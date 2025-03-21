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
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  if (!feed) return;
  if (feed.length <= 0)
    return (
      <div className="flex flex-col items-center m-30 gap-4">
        <h1>No new user found</h1>
        <img className="w-80" src="https://cdn-icons-png.freepik.com/256/15052/15052692.png?semt=ais_hybrid" />
      </div>
    );

  return (
    feed && (
      <div className="flex justify-center py-2  mt-20">
      {/* <img src="https://media.istockphoto.com/id/1403848173/vector/vector-online-chatting-pattern-online-chatting-seamless-background.jpg?s=612x612&w=0&k=20&c=W3O15mtJiNlJuIgU6S9ZlnzM_yCE27eqwTCfXGYwCSo="/> */}
        <UserCard user={feed[0]} />
      </div> 
    )
  );
};

export default Feed;
