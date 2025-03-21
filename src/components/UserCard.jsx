import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();
  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      ); // we have to pass empty objecet as an second parameter as it is an post call chatgpt
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.log(err.message)
    }
  };

  return (
    <div className="flex  flex-col card shadow-blue-600 bg-base-100 shadow-sm w-80 h-[500px]">
      {/* Set fixed height for consistent display */}

      {/* Image Section */}
      <div className="flex-2 h-2/3">
        {" "}
        {/* Ensures image takes 2/3 of the card height */}
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={photoUrl}
          alt={`${firstName} ${lastName}`}
        />
      </div>

      {/* Card Body */}
      <div className="card-body flex-1 h-1/3 flex flex-col justify-between">
        <div>
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + " , " + gender}</p>}
          <p className="text-sm">{about}</p>
        </div>
        <div className="card-actions flex justify-center mt-2">
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
