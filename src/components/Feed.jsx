import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    console.log("Fetching feed...");
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      console.log("Feed response:", res.data);
      dispatch(addFeed(res.data)); // ✅ Updates Redux state
    } catch (err) {
      console.error("Feed Error:", err.response ? err.response.data : err);
    }
  };

  useEffect(() => {
    if (!feed || feed.length === 0) {
      getFeed();
    }
  }, [feed]); // ✅ Ensures it fetches only if feed is empty

  if (!feed || feed.length === 0) {
    return (
      <div className="flex flex-col items-center m-30 gap-4">
        <h1>No new user found</h1>
        <img
          className="w-80"
          src="https://cdn-icons-png.freepik.com/256/15052/15052692.png?semt=ais_hybrid"
          alt="No users found"
        />
      </div>
    );
  }

  return (
    <div className="flex justify-center py-2 mt-20">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
