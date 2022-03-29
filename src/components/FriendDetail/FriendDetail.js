import React from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const params = useParams();
  return (
    <div>
      <h3>This is detail of a friend: {params.friendId} </h3>
    </div>
  );
};

export default FriendDetail;
