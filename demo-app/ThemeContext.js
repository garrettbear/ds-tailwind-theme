import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";

const ThemeContext = createContext();

const lightTheme = {
  backgroundColor: "#ffffff",
  textColor: "#000000",
};

const darkTheme = {
  backgroundColor: "#000000",
  textColor: "#ffffff",
};

const foxTheme = {
  backgroundColor: "#FF4500",
  textColor: "#FFF8DC",
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
  fox: foxTheme,
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem("appTheme");
      if (savedTheme) {
        setTheme(themes[savedTheme]);
      } else {
        const systemTheme = Appearance.getColorScheme();
        setTheme(themes[systemTheme] || themes.light);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = (themeName) => {
    setTheme(themes[themeName]);
    AsyncStorage.setItem("appTheme", themeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
