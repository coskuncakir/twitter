import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

function Stack({ children, column = false, gap = 12, className }) {
  return (
    <div
      className={cn(styles.stack, column && styles.column, className)}
      style={{ "--gap": `${gap}px` }}
    >
      {children}
    </div>
  );
}

export default Stack;
