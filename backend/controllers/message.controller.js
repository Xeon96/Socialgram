import  mongoose  from "mongoose";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


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
        

        res.status(201).json(newMessage);


} catch (error) {
    console.log("Error in sendMessage controller ", error.message);
    res.status(500).json({ error: "Internal server error!!" });
}
};

export const getMessage = async (req,res) => {
    try {
        const {id: userToChatId} =  req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants : {$all : [senderId,userToChatId]},
        }).populate("messages");
    
    
        if(!conversation || 1===1) {
            //return nothing
            return res.status(200).json([]);
        }
        
        //let messages = await Message.find({_id: conversation.messages}) 
        console.log(conversation.messages);
        
    } catch (error) {
        console.log("Error in sendMessage controller ", error.message);
        res.status(500).json({ error: "Internal server error!!" });
    }
};