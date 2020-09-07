import styles from "./style.module.css";
import Photo from "../photo";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import IconButton from "../button/icon";
import * as Icon from "../icons";

function Tweet({ retweet_count, favorite_count, created_at, user, text }) {
  return (
    <article className={styles.tweet}>
      <div className={styles.avatar}>
        <Photo src={user.profile_image_url_https} />
      </div>

      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{user.name}</span>{" "}
          <span>@{user.screen_name}</span> ·{" "}
          <span>{formatDistanceToNowStrict(new Date(created_at))}</span>
        </header>
        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>
          <div className={styles.footerButton}>
            <IconButton className={styles.iconButton}>
              <Icon.Reply />
            </IconButton>
            {false && <span>4</span>}
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.iconButton}>
              <Icon.Retweet />
            </IconButton>
            {retweet_count > 0 && <span>{retweet_count}</span>}
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.iconButton}>
              <Icon.Like />
            </IconButton>
            {favorite_count > 0 && <span>{favorite_count}</span>}
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.iconButton}>
              <Icon.Share />
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  );
}

export default Tweet;
