import React from "react";
import styles from "./HeaderFooter.module.css";

function Footer() {
  const today = new Date();

  const thisYear = today.getFullYear();

  return <footer className={styles.footer}>&copy;{thisYear}</footer>;
}
export default Footer;
