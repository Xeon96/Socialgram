import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/socketContext";

const Conversation = ({conversation,Lastidx}) => {
  const {selectedConversation,setSelectedConversation} = useConversation();
  //setSelectedConversation(conversation);
  const isSelected = selectedConversation?._id === conversation._id;
  const{onlineUsers} = useSocketContext();
  const isOnlineStatus = onlineUsers.includes(conversation?._id)? 'online':'';

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer ${isSelected ? "bg-sky-500":""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnlineStatus}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>
        <div>
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200"> {conversation.fullname}</p>
            <span className="text-xl">O</span>
          </div>
        </div>
      </div>
      {!Lastidx?<div className="divider my-0 py-0 h-1"></div>:null}
      
    </>
  );
};

export default Conversation;

//==============================================================================================================================================================================

// import React from "react";

// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//           </div>
//         </div>
//         <div>
//           <div className="flex gap-3 justify-between">
//             <p className="font-bold text-gray-200"> Vedant R</p>
//             <span className="text-xl">O</span>
//           </div>
//         </div>
//       </div>
//       <div className="divider my-0 py-0 h-1"></div>
//     </>
//   );
// };

// export default Conversation;