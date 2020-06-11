import React from "react";
import styles from "./photo.module.css";
import cn from "classnames";

function Photo({
  src = "https://pbs.twimg.com/profile_images/1217397692588052480/yzR9kd6A_400x400.jpg",
  alt,
  size = 47,
}) {
  return (
    <div className={cn(styles.photo)} style={{ width: size, height: size }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  );
}

export default Photo;
