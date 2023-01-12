
const UploadComplete = ({url, show, setShow}) =>
{return (<>
    <input type="checkbox" id="my-modal" className="modal-toggle" onChange={()=>{}} checked={show}/>
    <div className="modal">
      <div className="modal-box border-white">
        <h3 className="font-bold text-2xl pb-2">Your file is available here:</h3>
        <a onClick={()=> { window.navigator.clipboard.writeText(url); alert("Link copied to clipboard.")}} class="inline-flex text-lg overflow-hidden w-full text-black bg-slate-200 rounded-sm group">
<span class="px-3.5 py-2 text-white bg-black hover:bg-slate-800 flex items-center justify-center">
<svg style={{color: "white"}} width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4H10C10.5523 4 11 3.55228 11 3C11 2.44772 10.5523 2 10 2H8Z" fill="white"></path> <path d="M3 5C3 3.89543 3.89543 3 5 3C5 4.65685 6.34315 6 8 6H10C11.6569 6 13 4.65685 13 3C14.1046 3 15 3.89543 15 5V11H10.4142L11.7071 9.70711C12.0976 9.31658 12.0976 8.68342 11.7071 8.29289C11.3166 7.90237 10.6834 7.90237 10.2929 8.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071C12.0976 15.3166 12.0976 14.6834 11.7071 14.2929L10.4142 13H15V16C15 17.1046 14.1046 18 13 18H5C3.89543 18 3 17.1046 3 16V5Z" fill="white"></path> <path d="M15 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H15V11Z" fill="white"></path> </svg>
</span>
<span class="pl-4 pr-5 py-2.5">{url}</span>
</a> 
<div className="modal-action">
          <button onClick={() => {setShow(false)}} htmlFor="my-modal" className=" text-black border border-slate-600 hover:bg-slate-800 hover:text-white font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Got It!</button>
        </div>
      </div>
    </div></>)}

export default UploadComplete;
