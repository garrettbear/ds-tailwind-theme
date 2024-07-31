import React from "react";
import { Text, View, Button } from "react-native";
import { ThemeProvider, useTheme } from "./ThemeContext";

const AppContent = () => {
  const { theme, handleSetTheme } = useTheme();

  return (
    <View className={`flex-1 items-center justify-center bg-fun`}>
      <Text className="text-primary">Current Theme: {theme}</Text>
      <Button title="Light Theme" onPress={() => handleSetTheme("light")} />
      <Button title="Dark Theme" onPress={() => handleSetTheme("dark")} />
      <Button title="Fox Theme" onPress={() => handleSetTheme("fox")} />
      <Button
        title="System Preference"
        onPress={() => handleSetTheme("system")}
      />
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

// // App.js
// import React, { useState, useEffect } from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   Text,
//   View,
//   Button,
//   StyleSheet,
//   useColorScheme,
//   Appearance,
// } from "react-native";
// const {
//   lightThemeColors,
//   darkThemeColors,
//   foxThemeColors,
// } = require("./theme");

// export default function App() {
//   const systemTheme = Appearance.getColorScheme();
//   const [theme, setTheme] = useState(
//     systemTheme === "dark" ? darkThemeColors : lightThemeColors
//   );

//   useEffect(() => {
//     console.log("systemTheme", systemTheme);
//     if (theme === "system") {
//       setTheme(systemTheme === "dark" ? darkThemeColors : lightThemeColors);
//     }
//   }, [systemTheme]);

//   const handleSetTheme = (selectedTheme) => {
//     if (selectedTheme === "system") {
//       setTheme("system");
//       setTheme(systemTheme === "dark" ? darkThemeColors : lightThemeColors);
//     } else {
//       setTheme(selectedTheme);
//     }
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: theme["--bg-color"] }]}>
//       <Text style={{ color: theme["--color-fun"] }} className="bg-red-300 p-4">
//         Open up App.js to start working on your app!
//       </Text>
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Light Theme"
//           onPress={() => handleSetTheme(lightThemeColors)}
//         />
//         <Button
//           title="Dark Theme"
//           onPress={() => handleSetTheme(darkThemeColors)}
//         />
//         <Button
//           title="Fox Theme"
//           onPress={() => handleSetTheme(foxThemeColors)}
//         />
//         <Button
//           title="System Preference"
//           onPress={() => handleSetTheme("system")}
//         />
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonContainer: {
//     flexDirection: "column",
//     marginTop: 20,
//   },
// });
