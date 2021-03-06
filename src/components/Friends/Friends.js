import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
  // const [friends, setFriends] = useState([]);
  const [friends, setFriends] = useState([]);

  /* useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((data) => setFriends(data))
    );
  }, []); */

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div>
      <h3>Friends here</h3>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id}></Friend>
      ))}
    </div>
  );
};

export default Friends;
