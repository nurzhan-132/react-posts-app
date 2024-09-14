import React from "react";
import styles from "./skeleton.module.scss";

const Skeleton = ({
  width = "100%", // Default width
  height = "auto",
  count = 1,
  gap = 16,
  flexDirection = "row",
}) => {
  const skeletonStyle = {
    width,
    height,
  };

  if (count === 1) {
    return <div className={styles.skeleton} style={skeletonStyle}></div>;
  }

  return (
    <div
      className={styles["skeleton-list"]}
      style={{ gap: `${gap}px`, flexDirection }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          className={styles.skeleton}
          style={skeletonStyle}
          key={index}
        ></div>
      ))}
    </div>
  );
};

export default Skeleton;
