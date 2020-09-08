import styles from "./style.module.css";
import Photo from "../photo";
import ThemeButton from "../theme-button";
import { Close } from "../icons";
import IconButton from "../button/icon";
import Stack from "../stack";

function TweetModal({ closeModal = () => {} }) {
  const [tweet, setTweet] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async () => {
    setLoading(true);

    const response = await fetch("/api/tweet/create", {
      method: "POST",
      body: JSON.stringify({ tweet: tweet }),
    });

    setLoading(false);
  };

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
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
            />
          </div>
          <Stack gap={20} className={styles.footer}>
            <IconButton className={styles.close} onClick={closeModal}>
              <Close />
            </IconButton>
            <ThemeButton onClick={onSubmit}>
              {loading ? "Loading" : "Tweet"}
            </ThemeButton>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default TweetModal;
