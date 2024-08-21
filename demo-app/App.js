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
      }}
    >
      <Text className="bg-primary-default dark:bg-red-600 p-8">
        Current theme: {theme === "light" ? "Light" : "Dark"}
      </Text>
      <Button title="Light Mode" onPress={() => toggleTheme("light")} />
      <Button title="Dark Mode" onPress={() => toggleTheme("dark")} />
    </View>
  );
}
