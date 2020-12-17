import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Activity",
    path: "/Activity",
    icon: <AiIcons.AiFillPicture />,
    cName: "nav-text",
  },

  {
    title: "Recipes",
    path: "/Recipes",
    icon: <FaIcons.FaCookieBite />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/Contact",
    icon: <AiIcons.AiFillContacts />,
    cName: "nav-text",
  },
];
