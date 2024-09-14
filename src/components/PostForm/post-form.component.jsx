import React, { useState } from "react";
import styles from "./post-form.module.scss";
import Input from "../UI/Input/input.component";
import Button from "../UI/Button/button.component";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form action="" className={styles["form"]}>
      <Input
        type="text"
        placeholder="Post title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Post description"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <Button onClick={addNewPost}>Create a post</Button>
    </form>
  );
};

export default PostForm;
