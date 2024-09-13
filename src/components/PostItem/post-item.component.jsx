import React from "react";
import styles from "./post-item.module.scss";
import Button from "../UI/Button/button.component";

const PostItem = ({ post, remove, number }) => {
  return (
    <div className={styles["post"]}>
      <div className={styles["post-content"]}>
        <strong>
          {number} {post.title}
        </strong>
        <div>{post.description}</div>
      </div>
      <div className={styles["post-btns"]}>
        <Button onClick={() => remove(post)}>Delete</Button>
      </div>
    </div>
  );
};

export default PostItem;
