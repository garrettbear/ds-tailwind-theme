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
  const capitalize = (str) =>
    typeof str === "string"
      ? str.charAt(0).toUpperCase() + str.slice(1)
      : theme.colorScheme.charAt(0).toUpperCase() + theme.colorScheme.slice(1);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-fun"
    >
      <Text className="bg-primary-default p-8">
        Current theme: {capitalize(theme)}
      </Text>
      <Button title="Light Mode" onPress={() => toggleTheme("light")} />
      <Button title="Dark Mode" onPress={() => toggleTheme("dark")} />
      <Button title="Fox Mode" onPress={() => toggleTheme("fox")} />
    </View>
  );
}
