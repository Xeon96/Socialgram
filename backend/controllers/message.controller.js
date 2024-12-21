import  mongoose  from "mongoose";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";


export const sendMessage  = async (req,res) => {

try {
    const {message} =  req.body;
    const receiverId =  req.params.id;
    const senderId = req.user._id;


    let conversation = await Conversation.findOne({
        participants : {$all : [senderId,receiverId]},
    });


    if(!conversation) {
        //We can use "create()" or we can create new object and use "save()" to push it to database
        conversation = await Conversation.create({
            participants : [senderId, new mongoose.Types.ObjectId(receiverId)]
        }); 
    }

        // conversation = new Conversation({
        //     participants : [senderId,receiverId]
        // });

        // if(conversation){
        //     await conversation.save();
        // }
        const newMessage = new Message({
            senderId,
            receiverId,
            message: message
        });//Create new message object to insert in db.


        if(newMessage){

            conversation.messages.push(newMessage._id);
        }

        // await newMessage.save();
        // await conversation.save(); // We can do this quickly by using promise

        await Promise.all([newMessage.save(),conversation.save()]);//This executes both the functions parallel

        //Send the new message to the receiver
        const receiverSocketId = getReceiverSocketId(receiverId);
        
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage); //This sends event to a specific client
        }

        res.status(201).json(newMessage);


} catch (error) {
    console.log("Error in sendMessage controller ", error.message);
    res.status(500).json({ error: "Internal server error!!" });
}
};

export const getMessage = async (req,res) => {
    try {
        console.log(req.params);
        console.log(req.user._id);

        const {id: userToChatId} =  req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants : {$all : [senderId,userToChatId]},
        }).populate("messages");//This auto populates the messages filed based on the message id from conversations and the messages from the messages model
    
    
        if(conversation) {
            return res.status(200).json(conversation.messages);
        }

        if(!conversation) { //If the use have not sent any message then return an empty array so that the front end can clear the message container
            //return nothing
            return res.status(200).json([]);
        }
        
        //let messages = await Message.find({_id: conversation.messages}) 
        console.log(conversation);
        
    } catch (error) {
        console.log("Error in getMessage controller ", error.message);
        res.status(500).json({ error: "Internal server error!!" });
    }
};