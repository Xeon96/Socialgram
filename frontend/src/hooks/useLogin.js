import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const API_URL = import.meta.env.VITE_API_URL;

  const login = async ({ username, password }) => {
    setLoading(true);
    try {
      const inputsValid = inputValidations({
        username,
        password,
      });

      if (!inputsValid) return;

      console.log("Backend EndPoint: ", API_URL);
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
         // Ensure cookies are sent and received
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("Auth-User", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function inputValidations({ username, password }) {
  if (!username || !password) {
    toast.error("Kindly fill all the fields!!");
    return false;
  }
  return true;
}
