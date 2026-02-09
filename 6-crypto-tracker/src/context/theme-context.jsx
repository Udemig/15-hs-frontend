import { createContext, useContext, useEffect, useState } from "react";

// Context Kurulumu
export const ThemeContext = createContext();

// Context Sağlayıcısı
export const ThemeProvider = ({ children }) => {
  // tema state'i
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // localstorage'a kaydedilmiş bir tema varsa onu kullan
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    // tarayıcda tercih edilen temayı kullan
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // temayı değiştiricek fonksiyon
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  // tema değişimi tailwindin algılaması için body elementini güncelle
  useEffect(() => {
    const root = document.documentElement;

    if (isDarkTheme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);

  // context yapısından diğer component'lara sağlanacak verileri belirle
  return <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// Context yapısına abone olmamızı sağlayan custom hook
export const useTheme = () => useContext(ThemeContext);
