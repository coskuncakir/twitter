import cn from "classnames";
import styles from "./col-left.module.css";
import Navigation from "./navigation";
import ThemeButton from "./theme-button";
import ProfileBox from "./profile-box";

function LeftSidebar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />
      <ThemeButton full big>
        Tweet
      </ThemeButton>
      <ProfileBox />
    </div>
  );
}

export default LeftSidebar;
