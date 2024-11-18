import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
const router  = express.Router(); 

//Manage all the authentication routes.

// router.get("/login",(req,res) => {
//     res.send(`login route`);
// });

router.post("/login",login);
router.post("/signup",signup);
router.post("/logout",logout);

export default router;