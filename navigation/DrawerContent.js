import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Block, Text, Icon } from 'galio-framework';
import { argonTheme } from '../constants';

export default function DrawerContent(props) {
  const drawerItems = [
    { label: 'Home', icon: 'home', route: 'Home' },
    { label: 'Elements', icon: 'grid', route: 'Elements' },
    { label: 'Articles', icon: 'book-open', route: 'Articles' },
    { label: 'Categories', icon: 'layers', route: 'Categories' },
    { label: 'Carousel', icon: 'image', route: 'Carousel' },
    { label: 'Product', icon: 'shopping-cart', route: 'Product' },
    { label: 'Chat', icon: 'message-circle', route: 'Chat' },
    { label: 'Register', icon: 'user-plus', route: 'Register' },
    { label: 'Register', icon: 'user-plus', route: 'Register' },
  ];

  return (
    <DrawerContentScrollView {...props}>
      <Block style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={{ width: 120, height: 40 }}
          resizeMode="contain"
        />
      </Block>

      {/* Main drawer items */}
      {drawerItems.map((item, index) => (
        <DrawerItem
          key={index}
          label={({ color }) => <Text color={color}>{item.label}</Text>}
          icon={({ color, size }) => (
            <Icon name={item.icon} family="Feather" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate(item.route)}
        />
      ))}

      {/* Profile */}
      <DrawerItem
        label={({ color }) => <Text color={color}>Profile</Text>}
        icon={({ color, size }) => (
          <Icon name="user" family="Feather" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate('Profile')}
      />

      {/* Settings */}
      <DrawerItem
        label={({ color }) => <Text color={color}>Settings</Text>}
        icon={({ color, size }) => (
          <Icon name="settings" family="Feather" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate('Settings')}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
  },
});