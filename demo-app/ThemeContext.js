import React, { createContext, useState, useEffect, useContext } from "react";
import { View, Appearance, useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState(systemTheme);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      }
    };

    loadTheme();

    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (theme === "system") {
        setTheme(colorScheme);
      }
    });

    return () => subscription.remove();
  }, [theme]);

  const handleSetTheme = async (selectedTheme) => {
    if (selectedTheme === "system") {
      setTheme(systemTheme);
    } else {
      setTheme(selectedTheme);
    }
    await AsyncStorage.setItem("theme", selectedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme }}>
      <View data-theme={theme} style={{ flex: 1 }}>
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
