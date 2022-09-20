import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoContainer from "./components/TodoContainer";
import Sidebar from "./components/Sidebar";
import styles from "./App.module.css";

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Sidebar />
        <Routes>
          <Route
            index
            exact
            path="/"
            element={
              <>
                <TodoContainer airtableName="Home" />
              </>
            }
          />
          <Route
            index
            exact
            path="/work"
            element={
              <>
                <TodoContainer airtableName="Work" />
              </>
            }
          />
          <Route
            index
            exact
            path="/goals"
            element={
              <>
                <TodoContainer airtableName="Goals" />
              </>
            }
          />{" "}
          <Route
            index
            exact
            path="/personal"
            element={
              <>
                <TodoContainer airtableName="Personal" />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
