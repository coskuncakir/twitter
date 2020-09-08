import React from "react";
import cn from "classnames";
import styles from "./col-left.module.css";
import Navigation from "../navigation";
import ThemeButton from "../theme-button";
import ProfileBox from "../profile-box";
import TweetModal from "../tweet-modal";
import { Tweet } from "../icons";

function LeftSidebar({ flat }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />

      <div className={styles.tweet}>
        <ThemeButton large full={!flat} onClick={() => setShowModal(true)}>
          {flat ? <Tweet /> : "Tweet"}
        </ThemeButton>
      </div>

      {showModal && <TweetModal onClose={() => setShowModal(false)} />}

      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  );
}

export default LeftSidebar;
