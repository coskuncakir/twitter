import React from "react";
import cn from "classnames";
import Button from "./button";
import styles from "./navigation-button.module.css";

function NavigationButton({
  path,
  children,
  selected,
  className,
  notify,
  ...props
}) {
  return (
    <Button
      className={cn(
        styles.button,
        selected && styles.buttonSelected,
        className
      )}
      path={path}
      {...props}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  );
}

export default NavigationButton;
