import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./post-item.module.scss";
import Button from "../UI/Button/button.component";

const PostItem = ({ post, remove, number }) => {
  const navigate = useNavigate();

  const goToPost = (id) => {
    navigate(`/posts/${id}`);
  };
  return (
    <div className={styles["post"]}>
      <div className={styles["post-content"]}>
        <strong className={styles["post-content-title"]}>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className={styles["post-btns"]}>
        <Button onClick={() => goToPost(post.id)}>Open</Button>
        <Button onClick={() => remove(post)} delete={true}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
