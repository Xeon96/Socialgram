import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";

const Conversations = () => {
  const {loading,conversations} = useGetConversation();
  //console.log(conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation,index)=>(
        <Conversation
        key={conversation._id}
        conversation={conversation}
        //emoji={conversation.emoji}
        Lastidx = {index == conversations.length -1}//Get if it is the last index(or last conversation)
        />
      ))}
      {loading? <span className="loading loading-spinner mx-auto"></span> : null }
    </div>
  );
};  

export default Conversations;

//==============================================================================================================================================================================

// import React from "react";
// import Conversation from "./Conversation";

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversation />
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//     </div>
//   );
// };

// export default Conversations;
