import { resume } from "./assets";

export const bgColor = {
  primary: "#f3f3f3",
  secondary: "#eea305",
  tertiary: "#ff3c25",
  quaternary: "#80d8da",
};

export const NavigationLinks = [
  {
    displayName: "resume",
    path: resume,
    bgColor: bgColor.secondary,
  },
  {
    displayName: "project",
    path: "/project",
    bgColor: bgColor.tertiary,
  },
  {
    displayName: "contact",
    path: "/contact",
    bgColor: bgColor.quaternary,
  },
];
