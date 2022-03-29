import React, { useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  // const params = useParams();
  const { friendId } = useParams();

  const [friendDetail, setFriendDetail] = useState();

  console.log(friendDetail);
  useState(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriendDetail(data));
  }, []);

  return (
    <div>
      {/* <h3>This is detail of a friend: {params.friendId} </h3> */}
      <h2>Details of Mr. {friendDetail?.name} </h2>
      <div style={{ border: "2px dashed grey" }}>
        <p>Username: {friendDetail?.username}</p>
        <p>Email: {friendDetail?.email}</p>
        <p>Phone: {friendDetail?.phone}</p>
        <p>Web Address: {friendDetail?.website}</p>
        <p>City: {friendDetail?.address?.city}</p>
      </div>
    </div>
  );
};

export default FriendDetail;
