import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import Photo from "../photo";
import { ArrowBottom } from "../icons";
import Button from "../button";
import TextBody from "../text/text-body";

function ProfileBox({
  flat = false,
  name = "Coşkun Çakır",
  username = "@coscakir",
}) {
  return (
    <Button className={cn(styles.box)}>
      <Photo size={39} />
      {!flat && (
        <>
          <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.username}>{username}</TextBody>
          </div>
          <ArrowBottom className={styles.arrowBottom} />
        </>
      )}
    </Button>
  );
}

export default ProfileBox;
