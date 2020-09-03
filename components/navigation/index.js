import { useRouter } from "next/router";
import { MENU } from "../../constants";
import styles from "./index.module.css";
import cn from "classnames";
import NavigationButton from "./navigation-button";
import TextTitle from "../text/text-title";

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
          className={cn(styles.navButton, item.key)}
        >
          {router.pathname === item.path ? item.iconSelected : item.icon}
          {!flat && item.title && <TextTitle>{item.title}</TextTitle>}
        </NavigationButton>
      ))}
    </nav>
  );
}

export default Navigation;
