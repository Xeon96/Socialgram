import  mongoose  from "mongoose";
import User from "../models/user.model.js";

export const getUsersForSidebar = async (req,res) => {
    try {
        const loggedInUserId = req.user._id; 
        const userList = await User.find({_id : {$ne: loggedInUserId}}).select("-password");

        return res.status(200).json(userList);
    } catch (error) {
        console.log("Error in getUsersForSidebar controller ", error.message);
        res.status(500).json({ error: "Internal server error!!" });
    }
};