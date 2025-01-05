import React, { useEffect,useRef,useState } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();

  //--------------------------------------------------------------------------------------------------------------------
  //Scroll to the latest message
  const messagesEndRef = useRef(null);

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (messagesEndRef.current) {
      if (isInitialLoad) {
        // Instant scroll for the first load
        //console.log("fast:",isInitialLoad);
        messagesEndRef.current.scrollIntoView({ behavior: "auto" });
        setIsInitialLoad(false); // Set initial load to false after the first scroll
      } else {
        // Smooth scroll for subsequent updates
        //console.log("smooth:",isInitialLoad)
        messagesEndRef.current.scrollIntoView({ behavior: "auto" });
      }
    }
  }, [messages]);

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <div className="flex-1 overflow-auto px-4">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
      {loading && (
        <div className="loading loading-spinner justify-center">
          hello world
        </div>
      )}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start a conversation</p>
      )}

      {/* This div stays at the bottom so that we can scroll to the bottom */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;

//========================================================================================================================
// import React from 'react'
// import Message from "./Message";

// const Messages = () => {
//   return (
//     <div className="flex-1 overflow-auto px-4">
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>

//         <Message/>

//         <Message/>
//         <Message/>
//         <Message/>

//     </div>
//   )
// }

// export default Messages
