// import { useState } from "react";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     emailId: "",
//     password: "",
//     gender: "",
//     age: "",
//     photoUrl: "",
//   });

//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     try {
//       const response = await axios.post(BASE_URL + "/signup", formData);
//       setMessage(response.data);
//       return navigate("/login");
//     } catch (err) {
//       setError(err.response?.data || "Signup failed");
//     }
//   };

//   return (
//     <div className="flex justify-center my-26 p-2">
//       <div className="card bg-base-300 w-96 shadow-xl p-5">
//         <h2 className="text-center text-2xl font-bold">Sign Up</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
//           <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="input input-bordered w-full" required />
//           <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="input input-bordered w-full" required />
//           <input type="email" name="emailId" placeholder="Email" value={formData.emailId} onChange={handleChange} className="input input-bordered w-full" required />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="input input-bordered w-full" required />
//           <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} className="input input-bordered w-full" />
//           <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="input input-bordered w-full" />
//           <input type="text" name="photoUrl" placeholder="Photo URL" value={formData.photoUrl} onChange={handleChange} className="input input-bordered w-full" />

//           <button type="submit" className="btn btn-primary mt-4">Sign Up</button>
//         </form>

//         {error && <p className="text-red-500 mt-2">{error}</p>}
//         {message && <p className="text-green-500 mt-2">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default SignUp;


// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";

// import { useState } from "react";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";

// const SignUp = () => {
//   // ✅ State for form inputs
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [photoUrl, setPhotoUrl] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [about, setAbout] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailId, setEmailId] = useState("");
//   const [message, setMessage] = useState("");

//   const [error, setError] = useState("");

//   const handleSignUp = async () => {
//     try {
//       const res = await axios.post(
//         `${BASE_URL}/signup`,
//         {
//           emailId,
//           password,
//           firstName,
//           lastName,
//           gender,
//           age,
//           about,
//           photoUrl,
//         },
//         { withCredentials: true }
//       );
//       setMessage(res.data);

//       //dispatch(addUser(res.data));
//     } catch (err) {
//       setError(err?.response?.data || "Something went wrong");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="my-20 p-2 flex justify-center">
//       <div className="card bg-base-300 w-96 shadow-xl p-5">
//         <h2 className="text-center text-2xl font-bold">Sign Up</h2>
//         <div className="flex flex-col gap-3 mt-4">
//           <input
//             type="email"
//             value={emailId}
//             placeholder="Email"
//             onChange={(e) => setEmailId(e.target.value)}
//             className="input input-bordered w-full"
//             required
//           />
//           <input
//             type="password"
//             value={password}
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//             className="input input-bordered w-full"
//             required
//           />
//           <input
//             type="text"
//             value={firstName}
//             placeholder="First Name"
//             onChange={(e) => setFirstName(e.target.value)}
//             className="input input-bordered w-full"
//             required
//           />
//           <input
//             type="text"
//             value={lastName}
//             placeholder="Last Name"
//             onChange={(e) => setLastName(e.target.value)}
//             className="input input-bordered w-full"
//             required
//           />
//           <input
//             type="text"
//             value={photoUrl}
//             placeholder="Photo URL"
//             onChange={(e) => setPhotoUrl(e.target.value)}
//             className="input input-bordered w-full"
//           />
//           <input
//             type="number"
//             value={age}
//             placeholder="Age"
//             onChange={(e) => setAge(e.target.value)}
//             className="input input-bordered w-full"
//           />
//           <input
//             type="text"
//             value={gender}
//             placeholder="Gender"
//             onChange={(e) => setGender(e.target.value)}
//             className="input input-bordered w-full"
//           />
//           <input
//             type="text"
//             value={about}
//             placeholder="About"
//             onChange={(e) => setAbout(e.target.value)}
//             className="input input-bordered w-full"
//           />

//           {error && <p className="text-red-500">{error}</p>}
//           {message && <p className="text-green-500 mt-2">{message}</p>}
//           <button className="btn btn-primary mt-4" onClick={handleSignUp}>
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const SignUp = () => {
  // ✅ State for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [photoUrl, setPhotoUrl] = useState("");
  // const [age, setAge] = useState("");
  // const [gender, setGender] = useState("");
  // const [about, setAbout] = useState("");
  const [password, setPassword] = useState("");
  const [emailId, setEmailId] = useState("");

  // ✅ State for Messages & Errors
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/signup`,
        { emailId, password, firstName, lastName },
        { withCredentials: true }
      );
      setMessage("Successfully Signed Up! 🎉");
      setError(""); // Clear error if success

      // ✅ Remove message after 3 seconds
      setTimeout(() => setMessage(""), 3000);

    } catch (err) {
      setError("Signup failed! ❌");
      setMessage(""); // Clear success message

      // ✅ Remove error after 3 seconds
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div className="my-20 p-2 flex justify-center mt-[10%]">
      <div className="card bg-base-300 w-96 shadow-xl p-5">
        <h2 className="text-center text-2xl font-bold">Sign Up</h2>

        {/* ✅ Success Toast - DaisyUI Alert */}
        {message && (
          <div className="alert alert-success mt-3 shadow-lg">
            <span>{message}</span>
          </div>
        )}

        {/* ❌ Error Toast - DaisyUI Alert */}
        {error && (
          <div className="alert alert-error mt-3 shadow-lg">
            <span>{error}</span>
          </div>
        )}

        <div className="flex flex-col gap-3 mt-4">
          <input type="email" value={emailId} placeholder="Email" onChange={(e) => setEmailId(e.target.value)} className="input input-bordered w-full" required />
          <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="input input-bordered w-full" required />
          <input type="text" value={firstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} className="input input-bordered w-full" required />
          <input type="text" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} className="input input-bordered w-full" required />
          {/* <input type="text" value={photoUrl} placeholder="Photo URL" onChange={(e) => setPhotoUrl(e.target.value)} className="input input-bordered w-full" />
          <input type="number" value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)} className="input input-bordered w-full" />
          <input type="text" value={gender} placeholder="Gender" onChange={(e) => setGender(e.target.value)} className="input input-bordered w-full" />
          <input type="text" value={about} placeholder="About" onChange={(e) => setAbout(e.target.value)} className="input input-bordered w-full" /> */}

          <button className="btn btn-primary mt-4" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

