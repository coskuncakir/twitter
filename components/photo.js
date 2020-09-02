import React from "react";
import styles from "./photo.module.css";
import cn from "classnames";

function Photo({ src = "images/avatar.jpg", alt, size = 47 }) {
  return (
    <div className={cn(styles.photo)} style={{ width: size, height: size }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  );
}

export default Photo;
