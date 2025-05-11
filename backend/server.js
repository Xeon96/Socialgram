import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { healthcheck } from "./controllers/healthcheck.controller.js";
import connectToMongoDB from "./db/connectToMongoDb.js";
import { app,server } from "./socket/socket.js";

//Library to get values from .env files
dotenv.config();

const FrontEnd_IP = process.env.EC2_IP
const Environment = process.env.NODE_ENV
app.use(cors({
    origin: [FrontEnd_IP,'http://172.29.208.1:5173','http://192.168.0.104:5173'],
    credentials: true 
}));

//app.use(cors());


const PORT = process.env.PORT || 5000;

app.use(express.json()); //To parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser());//To get the cookies of the request

app.use("/api/auth",authRoutes); //if the get request starts with api/auth, then the request is redirected to the authRoutes. 
app.use("/api/messages",messageRoutes); //if the get request starts with api/messages, then the request is redirected to the messageRoutes. 
app.use("/api/users",userRoutes);
app.get('/healthcheck', healthcheck);


//run express erver and listen to the PORT
server.listen(PORT,'0.0.0.0',() => {
    connectToMongoDB();
    console.log(`Server is running on port@!!! ${PORT},Environmennt: ${Environment}`);
});


// app.get("/",(req, res) => {
//     //root route http://localhost:5000/
//     res.send("Hello World!!");
// });