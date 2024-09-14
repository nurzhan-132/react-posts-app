import React from "react";
import styles from "./post-filter.module.scss";
import Input from "../UI/Input/input.component";
import Select from "../UI/Select/select.component";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className={styles["post-filter"]}>
      <Input
        placeholder="Search for posts..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />

      <Select
        defaultValue="Sort by"
        options={[
          { value: "title", title: "By title" },
          { value: "body", title: "By body" },
        ]}
        onChange={(selectedValue) =>
          setFilter({ ...filter, sort: selectedValue })
        }
        value={filter.sort}
      />
    </div>
  );
};

export default PostFilter;
