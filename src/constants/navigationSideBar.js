import ChartPieSlice from "../assets/images/navigationSideBarIcons/ChartPieSlice";
import ShoppingBagOpen from "../assets/images/navigationSideBarIcons/ShoppingBagOpen";
import FolderNotch from "../assets/images/navigationSideBarIcons/FolderNotch";
import BookOpen from "../assets/images/navigationSideBarIcons/BookOpen";

import IdentificationBadge from "../assets/images/navigationSideBarIcons/IdentificationBadge";
import IdentificationCard from "../assets/images/navigationSideBarIcons/IdentificationCard";
import UsersThree from "../assets/images/navigationSideBarIcons/UsersThree";
import ChatsTeardrop from "../assets/images/navigationSideBarIcons/ChatsTeardrop";

export const dashboardList = (uiTheme) => [
  {
    icon: (
      <ChartPieSlice
        width={20}
        height={20}
        fill={uiTheme.mode === "dark" ? "#fff" : "#1C1C1C"}
      />
    ),
    title: "Default",
  },
  {
    icon: (
      <ShoppingBagOpen
        width={20}
        height={20}
        fill={uiTheme.mode === "dark" ? "#fff" : "#1C1C1C"}
      />
    ),
    title: "eCommerce",
  },
  {
    icon: (
      <FolderNotch
        width={20}
        height={20}
        fill={uiTheme.mode === "dark" ? "#fff" : "#1C1C1C"}
      />
    ),
    title: "Projects",
  },
  {
    icon: (
      <BookOpen
        width={20}
        height={20}
        fill={uiTheme.mode === "dark" ? "#fff" : "#1C1C1C"}
      />
    ),
    title: "Online Courses",
  },
];

export const pageList = (uiTheme) => [
  {
    icon: (
      <IdentificationBadge
        width={20}
        height={20}
        fill={uiTheme.mode === "dark" ? "#fff" : "#1C1C1C"}
      />
    ),
    title: "User Profile",
    subCategories: [
      "Overview",
      "Projects",
      "Campaigns",
      "Documents",
      "Followers",
    ],
  },
  {
    icon: (
      <IdentificationCard
        width={20}
        height={20}
        fill={uiTheme.mode === "dark" ? "#fff" : "#1C1C1C"}
      />
    ),
    title: "Account",
    subCategories: [
      "Overview",
      "Projects",
      "Campaigns",
      "Documents",
      "Followers",
    ],
  },
  {
    icon: (
      <UsersThree
        width={20}
        height={20}
        fill={uiTheme.mode === "dark" ? "#fff" : "#1C1C1C"}
      />
    ),
    title: "Corporate",
    subCategories: [
      "Overview",
      "Projects",
      "Campaigns",
      "Documents",
      "Followers",
    ],
  },
  {
    icon: (
      <IdentificationBadge
        width={20}
        height={20}
        fill={uiTheme.mode === "dark" ? "#fff" : "#1C1C1C"}
      />
    ),
    title: "Blog",
    subCategories: [
      "Overview",
      "Projects",
      "Campaigns",
      "Documents",
      "Followers",
    ],
  },
  {
    icon: (
      <ChatsTeardrop
        width={20}
        height={20}
        fill={uiTheme.mode === "dark" ? "#fff" : "#1C1C1C"}
      />
    ),
    title: "Social",
    subCategories: [
      "Overview",
      "Projects",
      "Campaigns",
      "Documents",
      "Followers",
    ],
  },
];
