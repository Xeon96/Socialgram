import React, { useEffect } from 'react'
import { useSocketContext } from '../context/socketContext'
import useConversation from '../zustand/useConversation';
import notificationSound from '../assets/Notification.wav'

const useListenMessages = () => {
  const{socket} = useSocketContext();
  const{messages,setMessages} = useConversation();

    useEffect(()=>{
        socket?.on("newMessage",(message)=>{
            setMessages([...messages,message]);
            const notification = new Audio(notificationSound)
            notification.volume = 1;
            //notification.play();
            return ()=> socket?.off("newMessage");
    },[socket,setMessages,messages]);

  
})
}

export default useListenMessages;