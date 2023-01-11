import formatBytes from "../utils/fileSizeParser";

export default function({stats}){
    return(<section class="text-gray-600 body-font bg-white">
    <div id= "stats" class="container px-5 py-10 mx-auto">
      <div class="flex flex-wrap -m-4 text-center">
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div class="border-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-75 hover:border-black border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="text-slate-800 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M8 17l4 4 4-4m-4-5v9"></path>
              <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">{stats.downloads}</h2>
          <p class="leading-relaxed">Downloads</p>
          </div>
        </div>
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div class="hover:border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-75 border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="text-slate-800 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">{stats.users}</h2>
            <p class="leading-relaxed group-hover:font-bold">Users</p>
          </div>
        </div>
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-75 hover:border-black border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="text-slate-800 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M3 18v-6a9 9 0 0118 0v6"></path>
              <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">{stats.files}</h2>
          <p class="leading-relaxed group-hover:font-bold">Files</p>
          </div>
        </div>
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-75 hover:border-black border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="text-slate-800 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">{formatBytes(stats.encrypted)}</h2>
          <p class="leading-relaxed group-hover:font-bold">Encrypted</p>
          </div>
        </div>
      </div>
    </div>
  </section>)
}
