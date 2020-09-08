import styles from "./col-right.module.css";

function RightSidebar({ children }) {
  return <div className={styles.sidebar}>{children}</div>;
}

export default RightSidebar;
