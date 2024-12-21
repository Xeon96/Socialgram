import { createContext,useState,useEffect,useContext} from "react";
import { useAuthContext } from "./AuthContext";
import  io from "socket.io-client";

export const SocketContext = createContext();


export const useSocketContext = () => {
    return useContext(SocketContext);
} 

export const SocketContextProvider = ({children}) =>{
    const [socket,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const{authUser} = useAuthContext()

    useEffect(()=>{
        if(authUser){
            const socket = io("http://localhost:8000",{
                query:{
                    userId: authUser._id,
                }
            });
            setSocket(socket);//Store details of the socket we connected so that it can be used across our application 


            socket.on("getOnlineUsers",(userSocketMap)=>{
                setOnlineUsers(userSocketMap);
            })

            return () => socket.close();
        }
        //When we logout the authUser is set to null and so the socket connection is close.
        else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }

        
    },[authUser]);//Whenever authUser is updated the use effect is executed and a socket connection is made to the express server

    return <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
}