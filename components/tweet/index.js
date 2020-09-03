import styles from "./style.module.css";
import Photo from "../photo";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import IconButton from "../button/icon";
import * as Icon from "../icons";

function Tweet({ text, name, slug, datetime }) {
  return (
    <article className={styles.tweet}>
      <div className={styles.avatar}>
        <Photo />
      </div>

      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{name}</span> <span>@{slug}</span> ·{" "}
          <span>{formatDistanceToNowStrict(datetime)}</span>
        </header>
        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>
          <div className={styles.footerButton}>
            <IconButton className={styles.iconButton}>
              <Icon.Reply />
            </IconButton>
            <span>4</span>
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.iconButton}>
              <Icon.Retweet />
            </IconButton>
            <span>13</span>
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.iconButton}>
              <Icon.Like />
            </IconButton>
            <span>42</span>
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
