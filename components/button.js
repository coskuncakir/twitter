import React from "react";
import classNames from "classnames";
import styles from "./button.module.css";

function Button({ children, className, ...props }) {
  return (
    <button
      type="button"
      className={classNames(styles.button, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
