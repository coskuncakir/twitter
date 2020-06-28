import styles from "./layout.module.css";
import cn from "classnames";
import useWindowSize from "../hooks/useWindowSize";

import CONST from "../constants";
import LeftSidebar from "./col-left";
import Main from "./col-main";
import RightSidebar from "./col-right";

function Layout({ children }) {
  const windowSize = useWindowSize();
  return (
    <div className={cn(styles.layout)}>
      <LeftSidebar flat={windowSize.width < CONST.DESKTOP_SIZE}>
        Left Sidebar
      </LeftSidebar>
      <Main> {children}</Main>
      {windowSize.width > CONST.TABLET_SIZE && (
        <RightSidebar>Right Sidebar</RightSidebar>
      )}
    </div>
  );
}

export default Layout;
