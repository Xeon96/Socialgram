import { Server } from "socket.io";
import http from "http";
import express from "express";


const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin: 'http://localhost:5173',
        method: ['GET','POST']
    }
});

const userSocketMap = {}; //map to store the userid and socketId of all the connected users. {userId: socketId}

export const getReceiverSocketId = (receiverId) =>{
    return userSocketMap[receiverId];
}

io.on('connection',(socket)=>{
    console.log("a user connected",socket.id);

    const userId = socket.handshake.query.userId;

    //Map userId with the socketId
    if(userId!= undefined)
        userSocketMap[userId] = socket.id;

    //io.emit() is used to send events to all the connected clients
    io.emit("getOnlineUsers",Object.keys(userSocketMap));//Send userId of all loggedin user to all the connected clients



    //socket.on() is used to listen to the events. can be used both on client and server side
    socket.on('disconnect',()=>{
        console.log("User disconnected",socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    });
});




export {app, io, server}