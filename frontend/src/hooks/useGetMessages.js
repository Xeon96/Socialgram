import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useGetMessages = () => {
    const {selectedConversation,messages,setMessages} = useConversation();
    const[loading,setLoading] = useState(false);

    useEffect(()=>{
        
        const getMessages = async () => {

            try {
                const res = await fetch(`http://localhost:8000/api/messages/${selectedConversation._id}`,{credentials: 'include'})
                const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            setMessages(data);
            console.log("m",data)
            } catch (error) {
                toast.error(error.message)
            }
            finally{
                setLoading(false);
            }
        }

        if(selectedConversation?._id) 
            getMessages(); //Try to get messages only if a conversation is selected

    },[selectedConversation?._id,setMessages])

    return {loading,messages}
}

export default useGetMessages