import React from "react";
import cn from "classnames";
import Button from "./button";
import styles from "./theme-button.module.css";

function ThemeButton({ className, children, large = false, ...props }) {
  return (
    <Button
      className={cn([styles.button, large && styles.large, className])}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ThemeButton;
