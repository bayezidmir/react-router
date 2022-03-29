import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, username, id } = friend;
  let navigate = useNavigate();

  const showFriendDetail = () => {
    const path = `/friend/${id}`;
    // navigate(`/friend/${id}`); this can be used as well instead of the following line
    navigate(path);
  };
  return (
    <div>
      <p>{name}</p>
      <button onClick={showFriendDetail}>
        {username} | Id: {id}
      </button>
    </div>
  );
};

export default Friend;
