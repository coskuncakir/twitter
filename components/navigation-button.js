import React from "react";
import classnames from "classnames";
import Button from "./button";
import styles from "./navigation-button.module.css";

function NavigationButton({ children, selected, notify, props }) {
  return (
    <Button
      className={classnames(
        styles.navButton,
        selected && styles.navButtonSelected
      )}
      {...props}
    >
      {children}
      {notify && <span className={styles.notify}>{notify}</span>}
    </Button>
  );
}

export default NavigationButton;
