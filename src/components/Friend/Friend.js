import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, username, id } = friend;

  // const navigate = useNavigate();
  const navigate = useNavigate();

  // const showFriendDetail = () => {
  //   const path = `/friends/${id}`;
  //   navigate(path);
  // };

  const showFriendDetail = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };

  return (
    <div>
      <p>{name}</p>

      {/* <Link to={`/friend/${id}`}>Sample</Link>//this will work too */}

      <button onClick={showFriendDetail}>
        {username} | Id: {id}
      </button>
    </div>
  );
};

export default Friend;
