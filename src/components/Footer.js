import React from "react";
import styles from "./HeaderFooter.module.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

function Footer() {
  const today = new Date();

  const thisYear = today.getFullYear();

  return (
    <footer className={styles.footer}>
      <p>TODOAPP &copy;{thisYear}</p>

      <a href="https://codethedream.org/" target="_blank">
        CTD project
      </a>
      <a href="https://xeniya.gor.sh/" target="_blank">
        <BsFillFileEarmarkPersonFill />
      </a>

      <a
        href="https://github.com/XeniyaDob?tab=overview&from=2022-02-01&to=2022-02-28"
        target="_blank"
      >
        <FaGithubSquare />
      </a>

      <a
        href="https://www.linkedin.com/in/xeniya-dobrogorskaya-b49083225/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </footer>
  );
}
export default Footer;
