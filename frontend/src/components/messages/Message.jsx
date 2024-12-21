import React, { useRef,useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
  const{authUser} = useAuthContext();
  const{selectedConversation} = useConversation()
  const MsgFromMe = message.senderId === authUser._id

  const MsgClass = MsgFromMe?"chat-end" : "chat-start"
  const timeClass =  MsgFromMe?"chat-start" : "chat-end"
  const profilePic = MsgFromMe?authUser.profilePic:selectedConversation.profilePic;
  const bubbleBgColor = MsgFromMe? "bg-blue-500":"bg-gray-700"




 
  //--------------------------------------------------------------------------------------------------------------------

  return (
    <div className={`chat ${MsgClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble text-sm ${timeClass} ${bubbleBgColor} `}>
        {message.message}
        <div className="chat-footer opacity-50">10:10</div>
      </div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
};

export default Message;

//========================================================================================================================

// import React from "react";

// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind CSS chat bubble component"
//             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//           />
//         </div>
//       </div>
//       <div className="chat-bubble chat-start text-sm bg-blue-600">
//         It was said that you would, destroy the Sith, not join them.
//         <div className="chat-footer opacity-50">19:80</div>
//       </div>
//       <div className="chat-footer opacity-50">Delivered</div>
//     </div>
//   );
// };

// export default Message;
