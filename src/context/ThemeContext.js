import { createContext, useState } from "react";

const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

//   func toggle change theme value
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = {
    theme,
    toggleTheme
  };
  console.log(`Theme value : ${theme}`)
  return (
    <ThemeContext.Provider value={value}>{ children }</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
