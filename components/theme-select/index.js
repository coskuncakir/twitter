import React, { useContext } from "react";
import styles from "./index.module.css";
import StoreContext from "../../store";

const THEMES = {
  light: "Light",
  dim: "Dim",
  dark: "Dark",
};

function ThemeSelect() {
  const store = useContext(StoreContext);

  return (
    <div className={styles.container}>
      {Object.entries(THEMES).map(([key, value]) => (
        <label key={key}>
          <input
            type="radio"
            name="theme"
            value={key}
            checked={key === store.theme}
            onChange={(e) => store.onThemeChange(e.target.value)}
          />
          {value}
        </label>
      ))}
    </div>
  );
}

export default ThemeSelect;
