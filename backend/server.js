import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectToMongoDB from "./db/connectToMongoDb.js";
import { app,server } from "./socket/socket.js";



app.use(cors({
    origin: "http://localhost:5173",
    credentials: true 
}));

//Library to get values from .env files
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //To parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser());//To get the cookies of the request

app.use("/api/auth",authRoutes); //if the get request starts with api/auth, then the request is redirected to the authRoutes. 
app.use("/api/messages",messageRoutes); //if the get request starts with api/messages, then the request is redirected to the messageRoutes. 
app.use("/api/users",userRoutes);



//run express erver and listen to the PORT
server.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});


// app.get("/",(req, res) => {
//     //root route http://localhost:5000/
//     res.send("Hello World!!");
// });