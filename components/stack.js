import React from "react";
import styles from "./stack.module.css";
import cn from "classnames";

function Stack({ children, column = false, gap = 12 }) {
  return (
    <div
      className={cn(styles.stack, column && styles.column)}
      style={{ "--gap": `${gap}px` }}
    >
      {children}
    </div>
  );
}

export default Stack;
