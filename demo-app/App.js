import React from "react";
import { Text, View, Button } from "react-native";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./global.css";

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

function MainApp() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.backgroundColor,
      }}
    >
      <Text
        className="bg-primary-default p-8"
        style={{ color: theme.textColor }}
      >
        Welcome to React Native with Expo! Hello
      </Text>
      <Button title="Light Mode" onPress={() => toggleTheme("light")} />
      <Button title="Dark Mode" onPress={() => toggleTheme("dark")} />
      <Button title="Fox Mode" onPress={() => toggleTheme("fox")} />
    </View>
  );
}
