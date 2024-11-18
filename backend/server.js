import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDb.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//Library to wget values from .env files



app.use(express.json()); //To parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser());//To get the cookies of the request

app.use("/api/auth",authRoutes); //if the get request starts with api/auth, then the request is redirected to the authRoutes. 
app.use("/api/messages",messageRoutes); //if the get request starts with api/messages, then the request is redirected to the messageRoutes. 
app.use("/api/users",userRoutes);



//run express erver and listen to the PORT
app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});


// app.get("/",(req, res) => {
//     //root route http://localhost:5000/
//     res.send("Hello World!!");
// });