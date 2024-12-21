import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser} = useAuthContext();

//signup function, we return the pointer to the signup function in the return statement of useSignup().
  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const inputsValid = inputValidations({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!inputsValid) return false;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json(); 
      //console.log(data);
      if(data.error){
        throw new Error(data.error);
      }
//store login status in localStorage(local web storage)
localStorage.setItem("Auth-User",JSON.stringify(data));

//Context
await setAuthUser(data);




    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading,signup};
};

export default useSignup;

function inputValidations({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Kindly fill all the fields!!");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password and confirmpassword do not match");
    return false;
  }

  if (password.Length < 6) {
    toast.error("Password must be atleast 6 characters long");
    return false;
  }

  return true;
}
