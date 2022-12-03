import React from "react";
import styles from "../App.module.css";

import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/todo/home");
  };
  return (
    <>
      <div className={styles.todoContainer}>
        <h1>About this Project</h1>

        <ul className={styles.description}>
          <li>
            TODO app helps users stay organized and don’t forget important
            things.
          </li>
          <li>
            The app has Home, Work, Goals, and Personal pages. These pages help
            user to separate their tasks.
          </li>
          <li>
            The app is connected to the Airtable database. Users can add,
            delete, update, mark done, sort, and organize their records in
            ascending/descending order.
          </li>
          <li>
            This app was built as the React class's final project at Code The
            Dream's summer 2022 session.
          </li>
        </ul>
        <button className={styles.inputButton} onClick={navigateHome}>
          Get started
        </button>
      </div>
    </>
  );
};

export default Landing;
