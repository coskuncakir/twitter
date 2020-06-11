import React from "react";
import NavigationButton from "./navigation-button";
import TextTitle from "./text-title";
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More,
  HomeFill,
  ExplorerFill,
  NotificationFill,
  MessagesFill,
  BookmarkFill,
  ListsFill,
  ProfileFill,
} from "./icons";
import styles from "./navigation.module.css";

const MENU = [
  {
    key: "twitter",
    icon: <Twitter />,
    iconSelected: <Twitter />,
    title: "",
    notify: 0,
  },
  {
    key: "home",
    icon: <Home />,
    iconSelected: <HomeFill />,
    title: "Home",
    notify: 0,
  },
  {
    key: "explore",
    icon: <Explore />,
    iconSelected: <ExplorerFill />,
    title: "Explore",
    notify: 0,
  },
  {
    key: "notification",
    icon: <Notification />,
    iconSelected: <NotificationFill />,
    title: "Notification",
    notify: 17,
  },
  {
    key: "messages",
    icon: <Messages />,
    iconSelected: <MessagesFill />,
    title: "Messages",
    notify: 0,
  },
  {
    key: "bookmark",
    icon: <Bookmark />,
    iconSelected: <BookmarkFill />,
    title: "Bookmark",
    notify: 0,
  },
  {
    key: "lists",
    icon: <Lists />,
    iconSelected: <ListsFill />,
    title: "Lists",
    notify: 0,
  },
  {
    key: "profile",
    icon: <Profile />,
    iconSelected: <ProfileFill />,
    title: "Profile",
    notify: 0,
  },
  {
    key: "more",
    icon: <More />,
    iconSelected: <More />,
    title: "More",
    notify: 0,
  },
];

function Navigation({ flat = false, selectedKey = "home" }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((item) => (
        <NavigationButton
          key={item.key}
          notify={item.notify}
          selected={selectedKey === item.key}
        >
          {selectedKey === item.key ? item.iconSelected : item.icon}
          {!flat && item.title && <TextTitle>{item.title}</TextTitle>}
        </NavigationButton>
      ))}
    </nav>
  );
}

export default Navigation;
