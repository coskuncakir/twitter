import React from "react";
import classNames from "classnames";
import styles from "./text-body.module.css";

function TextBody({ children, bold = false, className, ...props }) {
  return (
    <span
      className={classNames(styles.body, bold && styles.bold, className)}
      {...props}
    >
      {children}
    </span>
  );
}

export default TextBody;
