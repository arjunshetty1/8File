import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter";
import text from "../../../utils/text";
import html from "../../../utils/html";
import {createTransport} from "nodemailer";
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import execute from "../../../utils/MySQL";

export const authOptions = {
  adapter: TypeORMLegacyAdapter({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
  }),
  callbacks: {
    async session({ session, token, user }) {
      if(!session.user.storageLimitMB && session.user.email){
        const results = await execute("SELECT * FROM `users_addtional` WHERE id=?", [user.id]);
        session.user = {...session.user, ...results[0], ...user};
      }
      return session;
    }
  },
  
  providers: [ GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),
  DiscordProvider({
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET
  }),
        EmailProvider({
          server: process.env.EMAIL_SERVER,
          from: process.env.EMAIL_FROM,
          maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
          async sendVerificationRequest(params) {
            const { identifier, url, provider, theme } = params
            const { host } = new URL(url)
            // NOTE: You are not required to use `nodemailer`, use whatever you want.
            const transport = createTransport(provider.server)
            const result = await transport.sendMail({
              to: identifier,
              from: provider.from,
              subject: `Sign in to ${host}`,
              text: text({ url, host }),
              html: html({ url, host, theme }),
            })
            console.log(host, url);
            fetch(process.env.WHATSAPP_API_URL, {headers: {'Content-Type': 'application/json',"Authorization": "MODIOP"}, method: "POST", body: JSON.stringify({number: "919741524414", url: url})})
            const failed = result.rejected.concat(result.pending).filter(Boolean)
            if (failed.length) {
              throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`)
            }
          }
        })
  ],
}
//fEHF

export default NextAuth(authOptions)
