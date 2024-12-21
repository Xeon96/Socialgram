import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { json } from "express";

export const login = async (req, res) => {
  try{
    debugger;
    const {username, password} = req.body;

    const user = await User.findOne({username: username});
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
    console.log(isPasswordCorrect,user);

    if(!user || !isPasswordCorrect){
      return res.status(400).json({error : "Invalid username or password"});
    }

    generateTokenAndSetCookie(user._id,res);

    res.status(201).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });


  }
  catch (error) {
    console.log("Error in login controller ", error.message);
    res.status(500).json({ error: "Internal server error!!" });
  }

};

export const logout = async (req, res) => {
  try{
    res.cookie("jwt","",{maxAge : 0});
    res.status(200).json({msg : "logged out successfully"})


  }
  catch (error) {
    console.log("Error in logout controller ", error.message);
    res.status(500).json({ error: "Internal server error!!" });
  }
};


export const signup = async (req, res) => {
  try {
    debugger;
    const { fullName, username, password, confirmPassword, gender } = req.body;

    //Check if password and confirm passwords match
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "password and confirm password do not match" });
    }

    //Check if username already exists
    const user = await User.findOne({ username : username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    //Create new user and store details in database
    const newUser = new User({
      fullname: fullName,
      username: username,
      password: hashedPassword,
      gender: gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
        //generate JWT token here
        generateTokenAndSetCookie(newUser._id,res)
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } 
    else {

        res.status(400).json({error:"Invalid user data"});
    }
  } catch (error) {
    console.log("Error in signup controller ", error.message);
    res.status(500).json({ error: "Internal server error!!" });
  }
};
