import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { LuMessagesSquare } from "react-icons/lu";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected/>
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="label-text text-gray-900 font-bold">Random</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:tetx-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome Vedant</p>
        <p>Select a chat to start messaging</p>
        <LuMessagesSquare className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

//================================================================================================================================================================================================

// import React from "react";
// import Messages from "./Messages";
// import MessageInput from "./MessageInput";

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       <>
//         <div className="bg-slate-500 px-4 py-2 mb-2">
//           <span className="label-text">To:</span>{" "}
//           <span className="label-text text-gray-900 font-bold">Random</span>
//         </div>
//         <Messages/>
//         <MessageInput/>
//       </>
//     </div>
//   );
// };

// export default MessageContainer;
