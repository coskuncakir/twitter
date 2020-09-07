import React, { useState, useEffect } from "react";
import "../styles/app.css";
import StoreContext from "../store";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const theme = localStorage.getItem("THEME") || "light";
    setTheme(theme);
  }, []);

  const onThemeChange = (theme) => {
    setTheme(theme);
    localStorage.setItem("THEME", theme);
  };

  useEffect(() => {
    const $html = document.querySelector("html");
    $html.classList.remove("light");
    $html.classList.remove("dim");
    $html.classList.remove("dark");
    theme && $html.classList.add(theme);
  }, [theme]);

  return (
    <StoreContext.Provider value={{ theme, onThemeChange }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}
