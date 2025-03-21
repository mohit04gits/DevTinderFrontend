/* eslint-disable react/prop-types */
import { useState } from "react";

import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import UserProfCard from "./userProfile";


// const {firstName,lastName,age,about,gender,photoUrl} = user;
const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [age, setAge] = useState(user.age);
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          about,
          photoUrl,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="flex justify-center gap-10 p-2 my-10 ">
      <div className="flex justify-center my-10">
        <div className="card bg-base-300 w-96 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title justify-center">Login</h2>
            <div className="flex flex-col gap-2">
              <label className="form-control w-full max-w-xs mt-4">
                <div className="label">
                  <span className="label-text">firstName</span>
                </div>
                <input
                  value={firstName}
                  type="text"
                  className="input mt-2 border-0 input-bordered w-full max-w-xs outline-0 rounded-lg p-2"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>

              <label className="form-control w-full max-w-xs outline-0 mt-4">
                <div className="label">
                  <span className="label-text">lastName</span>
                </div>
                <input
                  value={lastName}
                  type="text"
                  className="input border-0 input-bordered w-full max-w-xs outline-0 rounded-lg mt-2 p-2"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>

              <label className="form-control w-full max-w-xs outline-0 mt-4">
                <div className="label">
                  <span className="label-text">Photo</span>
                </div>
                <div>
                  <input
                    value={photoUrl}
                    type="text"
                    className="input border-0 input-bordered w-full max-w-xs outline-0 rounded-lg mt-2 p-2"
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                  
                </div>
              </label>

              <label className="form-control w-full max-w-xs outline-0 mt-4">
                <div className="label">
                  <span className="label-text">Age</span>
                </div>
                <input
                  value={age}
                  type="text"
                  className="input border-0 input-bordered w-full max-w-xs outline-0 rounded-lg mt-2 p-2"
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>

              <label className="form-control w-full max-w-xs outline-0 mt-4">
                <div className="label">
                  <span className="label-text">gender</span>
                </div>
                <input
                  value={gender}
                  type="text"
                  className="input border-0 input-bordered w-full max-w-xs outline-0 rounded-lg mt-2 p-2"
                  onChange={(e) => setGender(e.target.value)}
                />
              </label>

              <label className="form-control w-full max-w-xs outline-0 mt-4">
                <div className="label">
                  <span className="label-text">About</span>
                </div>
                <input
                  value={about}
                  type="text"
                  className="input border-0 input-bordered w-full max-w-xs outline-0 rounded-lg mt-2 p-2"
                  onChange={(e) => setAbout(e.target.value)}
                />
              </label>
            </div>

            <p className="text-red-500">{error} </p>

            <div className="card-actions justify-center">
              <button onClick={saveProfile} className="btn btn-primary">
                save profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <UserProfCard
          user={{ firstName, lastName, age, gender, about, photoUrl }}
        />
      </div>
    </div>
  );
};

export default EditProfile;
