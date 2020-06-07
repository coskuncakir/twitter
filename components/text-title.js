import React from "react";
import classNames from "classnames";
import styles from "./text-title.module.css";

function TextTitle({ children, bold = true }) {
  return (
    <h2 className={classNames(styles.title, bold && styles.bold)}>
      {children}
    </h2>
  );
}

export default TextTitle;
