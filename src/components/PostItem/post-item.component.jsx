import React from "react";
import styles from "./post-item.module.scss";
import Button from "../UI/Button/button.component";

const PostItem = ({ post, remove, number }) => {
  return (
    <div className={styles["post"]}>
      <div className={styles["post-content"]}>
        <strong className={styles["post-content-title"]}>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className={styles["post-btns"]}>
        <Button onClick={() => remove(post)}>Delete</Button>
      </div>
    </div>
  );
};

export default PostItem;
