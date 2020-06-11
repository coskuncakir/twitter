import React from "react";
import cn from "classnames";
import Button from "./button";
import styles from "./navigation-button.module.css";

function NavigationButton({ children, selected, notify, ...props }) {
  return (
    <Button
      className={cn(styles.button, selected && styles.buttonSelected)}
      {...props}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  );
}

export default NavigationButton;
