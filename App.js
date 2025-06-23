import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingStack from "./navigation/Screens";

console.log("🟢 App.js is running");

export default function App() {
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
}
