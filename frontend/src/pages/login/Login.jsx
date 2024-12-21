import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const{loading,login} = useLogin();
  const UserLogin = async (e) => {
    e.preventDefault();
    console.log({username,password});
    await login({username,password});
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-400 rounded-lg shadow-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> Socialgram</span>
        </h1>
        <form onSubmit={UserLogin}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full text-white input input-bordered h-10  bg-gray-800"
              onChange = {(e) => {setUsername(e.target.value)}}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full text-white input input-bordered h-10  bg-gray-800"
              onChange = {(e) => {setPassword(e.target.value)}}
            />
          </div>
          <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" >
                {"Don't"} have an account?
            </Link>

          <div className="m-2 flex  flex-row justify-between">
            <button className=" btn btn-sm btn-accent" disabled={loading}>{loading?<span className="loading loading-spinner"></span>: "Login"}</button>
            <button className=" btn btn-sm btn-error" disabled={loading}>{loading?<span className="loading loading-spinner"></span>: "Forgot/Reset Password"}</button>
          </div>

            

        </form>
      </div>
    </div>
  );
};

export default Login;




//==============================================================================================================================================================================//

//STARTER CODE FOR LOGIN PAGE
// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 bg-gray-400 rounded-lg shadow-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500"> Socialgram</span>
//         </h1>
//         <form action="Post">
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full text-white input input-bordered h-10  bg-gray-800"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full text-white input input-bordered h-10  bg-gray-800"
//             />
//           </div>
//           <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" >
//                 {"Don't"} have an account?
//             </a>

//           <div className="m-2 flex  flex-row justify-between">
//             <button className=" btn btn-sm btn-accent">Login</button>
//             <button className=" btn btn-sm btn-error">Forgot/Reset Password</button>
//           </div>

            

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

