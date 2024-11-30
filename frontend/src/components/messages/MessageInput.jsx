import React from 'react'
import { IoMdSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full flex flex-row'>
            <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white border-gray-600" 
            placeholder='Message...'/>
            <button type="submit" className=" items-center btn btn-circle ms-3 btn-md btn-accent">
            <IoMdSend />
            </button>
        </div>
    </form>
  );
};

export default MessageInput

//================================================================================================================================================================================================
// import React from 'react'
// import { IoMdSend } from "react-icons/io";

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full flex flex-row'>
//             <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white border-gray-600" 
//             placeholder='Message...'/>
//             <button type="submit" className=" items-center btn btn-circle ms-3 btn-md btn-accent">
//             <IoMdSend />
//             </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput