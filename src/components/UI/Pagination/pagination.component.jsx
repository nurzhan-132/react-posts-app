import React from "react";
import clsx from "clsx";
import styles from "./pagination.module.scss";
import { getPagesArray } from "../../../_utils/pages";

const Pagination = ({ page, totalPages, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className={styles["page-wrapper"]}>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={clsx(styles["page"], page === p && styles["page-current"])}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
