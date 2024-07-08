import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { textSets } from "./data";

const AppContext = createContext();

const themes = {
  light: "light",
  dark: "dark",
  cupcake: "cupcake",
  night: "night",
};

const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.light;
};

export const AppProvider = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [theme, setTheme] = useState(themeFromLocalStorage());

  const [currentText, setCurrentText] = useState(textSets[0]);

  const [index, setIndex] = useState(1);

  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % textSets.length);
        setCurrentText(textSets[index]);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [index, textSets]);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleTheme = () => {
    const { light, dark, night, cupcake } = themes;
    const newTheme = theme === light ? dark : light;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        toggleMobileMenu,
        toggleTheme,
        showMobileMenu,
        currentText,
        fade,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
