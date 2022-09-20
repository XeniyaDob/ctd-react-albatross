import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { SideBarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <>
      <nav className={styles.sidebarContainer}>
        {SideBarData.map((item, index) => {
          return (
            <NavLink key={index} to={item.path} className={item.className}>
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};
export default Sidebar;
