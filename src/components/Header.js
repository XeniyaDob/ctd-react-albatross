import React from "react";
import styles from "./HeaderFooter.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.button}>
        <span className={styles.actualText}>&nbsp;TodoApp&nbsp;</span>
        <span className={styles.hoverText} aria-hidden="true">
          &nbsp;TodoApp&nbsp;
        </span>
      </button>
    </header>
  );
}
export default Header;
