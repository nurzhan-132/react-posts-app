import React from "react";
import styles from "./post-list.module.scss";
import PostItem from "../PostItem/post-item.component";
import EmptyState from "../EmptyState/empty-state.component";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Select from "../UI/Select/select.component";

const PostList = ({ posts, title, remove, limit, setLimit }) => {
  if (!posts.length) {
    return <EmptyState text="No posts found." />;
  }

  return (
    <div>
      <div className={styles["posts-title"]}>
        <h1 style={{ textAlign: "center", fontSize: "xx-large" }}>{title}</h1>

        <Select
          defaultValue="Num of posts per page"
          options={[
            { value: "5", title: "5" },
            { value: "10", title: "10" },
            { value: "20", title: "20" },
            { value: "25", title: "25" },
            { value: "-1", title: "Show all" },
          ]}
          value={limit}
          onChange={(val) => setLimit(val)}
          style={{ width: "60px" }}
        />
      </div>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={300} classNames="post">
            <PostItem number={index + 1} post={post} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
