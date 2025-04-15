import mongoose from "mongoose";
import dotenv from "dotenv";


const connectToMongoDB = async () => {
    try{
        console.log("MongoDb String: ",process.env.MONGO_DB_URI);
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.log('Error connecting to mongo db: ',error.message);
    }
}

export default connectToMongoDB;