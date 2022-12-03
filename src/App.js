import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoContainer from "./components/TodoContainer";
import Sidebar from "./components/Sidebar";
import styles from "./App.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";

const App = () => {
  return (
    <Router>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <Routes>
          <Route index exact path="/todo" element={<Landing />} />
          <Route
            path="todo/home"
            element={
              <>
                <TodoContainer airtableName="Home" />
              </>
            }
          />
          <Route
            path="todo/work"
            element={
              <>
                <TodoContainer airtableName="Work" />
              </>
            }
          />
          <Route
            path="todo/goals"
            element={
              <>
                <TodoContainer airtableName="Goals" />
              </>
            }
          />{" "}
          <Route
            path="todo/personal"
            element={
              <>
                <TodoContainer airtableName="Personal" />
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
