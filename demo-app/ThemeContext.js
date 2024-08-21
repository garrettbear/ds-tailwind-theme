import { createContext, useState, useContext, useEffect } from "react";
import { View } from "react-native";
import { useColorScheme } from "nativewind";

const themes = ["light", "dark", "fox"]; // Extendable list of themes

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState(systemColorScheme);

  const toggleTheme = (newTheme) => {
    if (themes.includes(newTheme)) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <View className={theme} style={{ flex: 1 }}>
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// import { createContext, useState, useContext, useEffect } from "react";
// import { View } from "react-native";
// import { useColorScheme } from "nativewind";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const systemColorScheme = useColorScheme();
//   const [theme, setTheme] = useState(systemColorScheme);

//   const toggleTheme = (newTheme) => {
//     setTheme(newTheme);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <View className={theme === "dark" ? "dark" : ""} style={{ flex: 1 }}>
//         {children}
//       </View>
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);
