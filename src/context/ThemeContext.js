import { createContext, useState } from "react";


// const themes = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee"
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222"
//   }
// };



const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

//   func toggle change theme value
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const valueThemes = {
    theme,
    toggleTheme
  };
  
  return (
    <ThemeContext.Provider value={valueThemes}>{ children }</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
