import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div className="chat-bubble chat-start text-sm bg-blue-600">
        It was said that you would, destroy the Sith, not join them.
        <div className="chat-footer opacity-50">19:80</div>
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
