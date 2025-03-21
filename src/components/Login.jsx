import { useState } from "react";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [emailId, setEmailId] = useState("sachin@google.com");
  const [password, setPassword] = useState("Sachin@1834");
  const [error, setError] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));

      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center mt-35 ">
      <div className="card bg-base-300 w-96 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div className="flex flex-col gap-2">
            <label className="form-control w-full max-w-xs mt-4">
              <div className="label">
                <span className="label-text">Email Id</span>
              </div>
              <input
                value={emailId}
                type="text"
                className="input bg-base-200  w-full max-w-xs rounded-lg p-2"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>

            <label className="form-control w-full max-w-xs outline-0 mt-4">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                value={password}
                type="text"
                className="input bg-base-200  w-full max-w-xs rounded-lg mt-2 p-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <p className="text-red-500">{error} </p>

          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
            <Link to="/signUp" className="btn btn-primary">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
