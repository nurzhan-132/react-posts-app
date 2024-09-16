import React from "react";
import clsx from "clsx";
import styles from "./button.module.scss";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(styles["button"], props.delete && styles["button-red"])}
    >
      {children}
    </button>
  );
};

export default Button;
