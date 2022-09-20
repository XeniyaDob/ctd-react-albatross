import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import styles from "./Sidebar.module.css";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiOutlineHome />,
    className: styles.navText,
  },
  {
    title: "Work",
    path: "/work",
    icon: <FaIcons.FaReact />,
    className: styles.navText,
  },
  {
    title: "Goals",
    path: "/goals",
    icon: <RiIcons.RiFundsLine />,
    className: styles.navText,
  },
  {
    title: "Personal",
    path: "/personal",
    icon: <FaIcons.FaAngellist />,
    className: styles.navText,
  },
];
