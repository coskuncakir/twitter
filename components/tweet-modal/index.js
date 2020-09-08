import styles from "./style.module.css";
import Photo from "../photo";
import ThemeButton from "../theme-button";
import { Close } from "../icons";
import IconButton from "../button/icon";
import Stack from "../stack";

function TweetModal({ onClose = () => {} }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.avatar}>
          <Photo />
        </div>
        <div className={styles.body}>
          <div>
            <textarea
              className={styles.textarea}
              rows="4"
              placeholder="Whats happening?"
            ></textarea>
          </div>
          <Stack gap={20} className={styles.footer}>
            <IconButton className={styles.close} onClick={onClose}>
              <Close />
            </IconButton>
            <ThemeButton>Tweet</ThemeButton>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default TweetModal;
