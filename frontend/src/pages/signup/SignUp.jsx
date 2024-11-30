//rafce
import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-400 rounded-lg shadow-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> Socialgram</span>
        </h1>
        <form action="Post">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Fullname"
              className="w-full text-white input input-bordered h-10  bg-gray-800"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full text-white input input-bordered h-10  bg-gray-800"
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
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full text-white input input-bordered h-10  bg-gray-800"
            />
          </div>

            <GenderCheckbox/>

          <div>
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600 inline-block"
            >
              Already have an account?
            </a>
          </div>

          <div className="m-2 flex  flex-row justify-between">
            <button className=" btn btn-block btn-sm btn-accent">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

//=============================================================================================================================================================================//

////STARTER CODE FOR SIGN UP PAGE
//rafce
// import React from "react";
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 bg-gray-400 rounded-lg shadow-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up
//           <span className="text-blue-500"> Socialgram</span>
//         </h1>
//         <form action="Post">
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Fullname</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Fullname"
//               className="w-full text-white input input-bordered h-10  bg-gray-800"
//             />
//           </div>
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
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full text-white input input-bordered h-10  bg-gray-800"
//             />
//           </div>

//             <GenderCheckbox/>

//           <div>
//             <a
//               href="#"
//               className="text-sm hover:underline hover:text-blue-600 inline-block"
//             >
//               Already have an account?
//             </a>
//           </div>

//           <div className="m-2 flex  flex-row justify-between">
//             <button className=" btn btn-block btn-sm btn-accent">SignUp</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
