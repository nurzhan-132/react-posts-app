import React from "react";
import styles from "./select.module.scss";

const Select = ({ options, defaultValue, value, onChange, style }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={style}
    >
      <option disabled>{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default Select;
