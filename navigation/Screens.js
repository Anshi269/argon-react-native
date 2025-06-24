import React from "react";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// Components
import { Header } from "../components";
import { argonTheme } from "../constants";

// Screens
import Onboarding from "../screens/Onboarding";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Pro from "../screens/Pro";
import Categories from "../screens/Categories";
import Beauty from "../screens/Beauty";
import Fashion from "../screens/Fashion";
import ShoppingCart from '../screens/ShoppingCart';
import Settings from '../screens/Settings'; // Make sure you have this screen
import Register from '../screens/Register'; // Make sure you have this screen

// Drawer
import CustomDrawerContent from "./Menu";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pro" component={Pro} />
      <Stack.Screen name="Cart" component={ShoppingCart} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Pro" component={Pro} />
      <Stack.Screen name="Cart" component={ShoppingCart} />
    </Stack.Navigator>
  );
}

function CategoriesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Beauty" component={Beauty} />
      <Stack.Screen name="Fashion" component={Fashion} />
      <Stack.Screen name="Pro" component={Pro} />
      <Stack.Screen name="Cart" component={ShoppingCart} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Pro" component={Pro} />
    </Stack.Navigator>
  );
}

function RegisterStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{ backgroundColor: "white", width: width * 0.8 }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizontal: 12,
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      {/* Only the 5 main navigation items */}
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Categories" component={CategoriesStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
      <Drawer.Screen name="Register" component={RegisterStack} />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}