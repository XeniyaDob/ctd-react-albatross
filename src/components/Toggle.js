import React from "react";
import styles from "./Toggle.module.css";

export const Toggle = ({ onChange }) => {
  return (
    <div className={styles.switchHolder}>
      <div className={styles.switchLabel}>
        <span>Switch</span>
      </div>
      <div className={styles.switchToggle}>
        <input type="checkbox" id="sort" onChange={onChange}></input>
        <label htmlFor="sort"></label>
      </div>
    </div>
  );
};
