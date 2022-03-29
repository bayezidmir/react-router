import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  console.log(useParams);
  const { postId } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
