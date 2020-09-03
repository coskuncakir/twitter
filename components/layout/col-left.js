import cn from "classnames";
import styles from "./col-left.module.css";
import Navigation from "../navigation";
import ThemeButton from "../theme-button";
import ProfileBox from "../profil-box";

function LeftSidebar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />
      <div className={styles.tweet}>
        <ThemeButton large full={!flat}>
          {flat ? "T" : "Tweet"}
        </ThemeButton>
      </div>
      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  );
}

export default LeftSidebar;
