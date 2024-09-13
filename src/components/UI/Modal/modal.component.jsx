import React from "react";
import clsx from "clsx";
import styles from "./modal.module.scss";

const Modal = ({ children, visible, setVisible }) => {
  return (
    <div
      className={clsx(styles.modal, visible && styles.active)}
      onClick={() => setVisible(false)}
    >
      <div
        className={styles["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
