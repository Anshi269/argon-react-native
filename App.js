import React from "react";
import 'react-native-url-polyfill/auto';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppRegistry } from 'react-native';
import Home from "./screens/Home";
import Elements from "./screens/Elements";
import Articles from "./screens/Articles";
import Onboarding from "./screens/Onboarding";
import DrawerContent from "./navigation/DrawerContent";
import Categories from './screens/Categories';
import CarouselScreen from './screens/Carousel';
import ProductScreen from './screens/Product';
import ChatScreen from './screens/Chat';
import ShoppingCart from './screens/ShoppingCart'; // Add this import
import SearchDefault from './screens/SearchDefault';
import SearchActive from './screens/SearchActive';
import Profile from "./screens/Profile";
import Settings from './screens/Settings';
import NotificationSettings from './screens/NotificationSettings';
import UserAgreement from './screens/UserAgreement';
import Notifications from './screens/Notifications';
import Register from './screens/Register'; // already imported


const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
  initialRouteName="Onboarding"
  drawerContent={(props) => <DrawerContent {...props} />}
>
  <Drawer.Screen name="Home" component={Home} />
  <Drawer.Screen name="Elements" component={Elements} />
  <Drawer.Screen name="Articles" component={Articles} />
  <Drawer.Screen name="Onboarding" component={Onboarding} />
  <Drawer.Screen name="Categories" component={Categories} />
  <Drawer.Screen name="Carousel" component={CarouselScreen} />
  <Drawer.Screen name="Product" component={ProductScreen} />
  <Drawer.Screen name="Chat" component={ChatScreen} />
  <Drawer.Screen name="Cart" component={ShoppingCart} />
  <Drawer.Screen name="SearchDefault" component={SearchDefault} />
  <Drawer.Screen name="SearchActive" component={SearchActive} />
  <Drawer.Screen name="Profile" component={Profile} />
  <Drawer.Screen name="Settings" component={Settings} />
  <Drawer.Screen name="NotificationSettings" component={NotificationSettings} />
  <Drawer.Screen name="UserAgreement" component={UserAgreement} options={{ drawerLabel: () => null, title: null, drawerIcon: () => null }} />
  <Drawer.Screen name="Notifications" component={Notifications} options={{ drawerLabel: () => null }} />
  <Drawer.Screen name="Register" component={Register} />
</Drawer.Navigator>

    </NavigationContainer>
  );
}

AppRegistry.registerComponent('main', () => App);
export default App;