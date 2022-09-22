import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <button data-text="Awesome" class={styles.button}>
        <span class={styles.actualText}>&nbsp;TodoApp&nbsp;</span>
        <span class={styles.hoverText} aria-hidden="true">
          &nbsp;TodoApp&nbsp;
        </span>
      </button>
    </header>
  );
}
export default Header;
