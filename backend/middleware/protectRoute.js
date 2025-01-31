import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized - No Token found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user; //If user exists in the DB then we add a new param to req and add pass the user to it.
    //console.log("Authorized User: ",user);
    next();
  } catch (error) {
    console.log("Error in protectRoute controller ", error.message);
    res.status(500).json({ error: "Internal server error!!" });
  }
};

export default protectRoute;