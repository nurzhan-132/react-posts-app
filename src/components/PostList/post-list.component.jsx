import React from "react";
import styles from "./post-list.module.scss";
import PostItem from "../PostItem/post-item.component";
import EmptyState from "../EmptyState/empty-state.component";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <EmptyState text="No posts found." />;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "xx-large" }}>{title}</h1>
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
