import { useRouter } from "next/router";
import { MENU } from "../constants";
import styles from "./navigation.module.css";

import NavigationButton from "./navigation-button";
import TextTitle from "./text-title";

function Navigation({ flat = false }) {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      {MENU.map((item) => (
        <NavigationButton
          key={item.key}
          notify={item.notify}
          selected={router.pathname === item.path}
          path={item.path}
          className={styles.navButton}
        >
          {router.pathname === item.path ? item.iconSelected : item.icon}
          {!flat && item.title && <TextTitle>{item.title}</TextTitle>}
        </NavigationButton>
      ))}
    </nav>
  );
}

export default Navigation;
