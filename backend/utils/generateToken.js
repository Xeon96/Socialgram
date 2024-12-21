import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    debugger;
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn: "15d"
    }); 
    res.cookie("jwt",token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //15 days in miliseconds
        httpOnly : true, // prevents XSS attacks, cross-site scripting attacks
        sameSite : 'None',//process.env.NODE_ENV !== "development"?"strict": //CSRF attacks, cross-site attacks, forgery attacks
        secure : true//process.env.NODE_ENV !== "development"
    });

}

export default generateTokenAndSetCookie;