import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Block, Text, Icon } from 'galio-framework';
import { argonTheme } from '../constants';

export default function DrawerContent(props) {
  const drawerItems = [
    { label: 'Home', icon: 'home', route: 'Home' },
    { label: 'Categories', icon: 'layers', route: 'Categories' },
  ];

  return (
    <DrawerContentScrollView {...props}>
      <Block>
        {/* Main drawer items */}
        {drawerItems.map((item, index) => (
          <DrawerItem
            key={index}
            label={({ color, focused }) => (
              <Text color={focused ? argonTheme.COLORS.PRIMARY : color}>
                {item.label}
              </Text>
            )}
            icon={({ color, size }) => (
              <Icon
                name={item.icon}
                family="Feather"
                size={size}
                color={color}
              />
            )}
            onPress={() => props.navigation.navigate(item.route)}
          />
        ))}

        {/* Profile */}
        <DrawerItem
          label={({ color, focused }) => (
            <Text color={focused ? argonTheme.COLORS.PRIMARY : color}>
              Profile
            </Text>
          )}
          icon={({ color, size }) => (
            <Icon
              name="user"
              family="Feather"
              size={size}
              color={color}
            />
          )}
          onPress={() => props.navigation.navigate('Profile')}
        />

        {/* Settings */}
        <DrawerItem
          label={({ color, focused }) => (
            <Text color={focused ? argonTheme.COLORS.PRIMARY : color}>
              Settings
            </Text>
          )}
          icon={({ color, size }) => (
            <Icon
              name="settings"
              family="Feather"
              size={size}
              color={color}
            />
          )}
          onPress={() => props.navigation.navigate('Settings')}
        />

        {/* Register */}
        <DrawerItem
          label={({ color, focused }) => (
            <Text color={focused ? argonTheme.COLORS.PRIMARY : color}>
              Register
            </Text>
          )}
          icon={({ color, size }) => (
            <Icon
              name="user-plus"
              family="Feather"
              size={size}
              color={color}
            />
          )}
          onPress={() => props.navigation.navigate('Register')}
        />
      </Block>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
  },
});