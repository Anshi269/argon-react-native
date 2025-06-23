import React from "react";
import 'react-native-url-polyfill/auto';
import { NavigationContainer } from "@react-navigation/native";
import { AppRegistry } from 'react-native';
import OnboardingStack from "./navigation/Screens";

console.log("🟢 App.js is running");

function App() {
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
}

// Register the main component
AppRegistry.registerComponent('main', () => App);

export default App;