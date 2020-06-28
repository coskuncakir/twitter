import React from "react";
import cn from "classnames";
import styles from "./button.module.css";
import Link from "next/link";

function LinkButton({ path, children, ...props }) {
  return (
    <Link href={path}>
      <a {...props}>{children}</a>
    </Link>
  );
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

function Button({ full = false, children, className, ...props }) {
  const Btn = props.path ? LinkButton : BaseButton;
  return (
    <Btn
      className={cn(styles.button, full && styles.fullWidth, className)}
      {...props}
    >
      {children}
    </Btn>
  );
}

export default Button;
