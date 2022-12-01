import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import styles from "./Sidebar.module.css";

export const SideBarData = [
  {
    title: "Home",
    path: "todo/home",
    icon: <AiIcons.AiOutlineHome />,
    className: styles.navText,
  },
  {
    title: "Work",
    path: "todo/work",
    icon: <FaIcons.FaReact />,
    className: styles.navText,
  },
  {
    title: "Goals",
    path: "todo/goals",
    icon: <RiIcons.RiFundsLine />,
    className: styles.navText,
  },
  {
    title: "Personal",
    path: "todo/personal",
    icon: <FaIcons.FaAngellist />,
    className: styles.navText,
  },
];
