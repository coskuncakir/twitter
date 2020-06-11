import cn from "classnames";
import styles from "./col-right.module.css";

function RightSidebar({ children }) {
  return <div className={cn(styles.sidebar)}>{children}</div>;
}

export default RightSidebar;
