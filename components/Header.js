import React from 'react';
import { TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import { Button, Block, NavBar, Text, theme } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';

import Icon from './Icon';
import Input from './Input';
import Tabs from './Tabs';
import argonTheme from '../constants/Theme';

const { height, width } = Dimensions.get('window');
const iPhoneX = () =>
  Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

const BellButton = ({ isWhite, style }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Pro')}>
      <Icon
        family="ArgonExtra"
        size={16}
        name="bell"
        color={argonTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
      />
      <Block middle style={styles.notify} />
    </TouchableOpacity>
  );
};

const BasketButton = ({ isWhite, style }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Cart')}>
      <Icon
        family="ArgonExtra"
        size={16}
        name="basket"
        color={argonTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
      />
    </TouchableOpacity>
  );
};

const SearchButton = ({ isWhite, style }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Pro')}>
      <Icon
        size={16}
        family="Galio"
        name="search-zoom-in"
        color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
      />
    </TouchableOpacity>
  );
};

const Header = ({
  back,
  title,
  white,
  transparent,
  bgColor,
  iconColor,
  titleColor,
  search,
  options,
  tabs,
  tabIndex,
  optionLeft,
  optionRight,
  ...props
}) => {
  const navigation = useNavigation();

  const handleLeftPress = () => (back ? navigation.goBack() : navigation.openDrawer());

  const renderRight = () => {
    switch (title) {
      case 'Home':
      case 'Title':
      case 'Categories':
      case 'Category':
      case 'Profile':
      case 'Search':
      case 'Deals':
      case 'Settings':
        return [
          <BellButton key="bell" isWhite={white} />,
          <BasketButton key="basket" isWhite={white} />
        ];
      case 'Product':
        return [
          <SearchButton key="search" isWhite={white} />,
          <BasketButton key="basket" isWhite={white} />
        ];
      default:
        return null;
    }
  };

  const renderSearch = () => (
    <Input
      right
      color="black"
      style={styles.search}
      placeholder="What are you looking for?"
      placeholderTextColor="#8898AA"
      onFocus={() => navigation.navigate('Pro')}
      iconContent={
        <Icon
          size={16}
          color={theme.COLORS.MUTED}
          name="search-zoom-in"
          family="ArgonExtra"
        />
      }
    />
  );

  const renderOptions = () => (
    <Block row style={styles.options}>
      <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Beauty')}>
        <Block row middle>
          <Icon name="diamond" family="ArgonExtra" style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON} />
          <Text size={16} style={styles.tabTitle}>{optionLeft || 'Beauty'}</Text>
        </Block>
      </Button>
      <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Fashion')}>
        <Block row middle>
          <Icon size={16} name="bag-17" family="ArgonExtra" style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON} />
          <Text size={16} style={styles.tabTitle}>{optionRight || 'Fashion'}</Text>
        </Block>
      </Button>
    </Block>
  );

  const renderTabs = () => {
    const defaultTab = tabs && tabs[0] && tabs[0].id;
    if (!tabs) return null;
    return (
      <Tabs data={tabs} initialIndex={tabIndex || defaultTab} onChange={(id) => navigation.setParams({ tabId: id })} />
    );
  };

  const renderHeader = () => {
    if (search || options || tabs) {
      return (
        <Block center>
          {search && renderSearch()}
          {options && renderOptions()}
          {tabs && renderTabs()}
        </Block>
      );
    }
    return null;
  };

  const noShadow = ['Search', 'Categories', 'Deals', 'Pro', 'Profile'].includes(title);
  const headerStyles = [
    !noShadow && styles.shadow,
    transparent && { backgroundColor: 'rgba(0,0,0,0)' }
  ];
  const navbarStyles = [styles.navbar, bgColor && { backgroundColor: bgColor }];

  return (
    <Block style={headerStyles}>
      <NavBar
        back={false}
        title={title}
        style={navbarStyles}
        transparent={transparent}
        right={renderRight()}
        rightStyle={{ alignItems: 'center' }}
        left={
          <Icon
            name={back ? 'chevron-left' : 'menu'}
            family="entypo"
            size={20}
            onPress={handleLeftPress}
            color={iconColor || (white ? argonTheme.COLORS.WHITE : argonTheme.COLORS.ICON)}
            style={{ marginTop: 2 }}
          />
        }
        leftStyle={{ paddingVertical: 12, flex: 0.2 }}
        titleStyle={[
          styles.title,
          { color: argonTheme.COLORS[white ? 'WHITE' : 'HEADER'] },
          titleColor && { color: titleColor }
        ]}
        {...props}
      />
      {renderHeader()}
    </Block>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX() ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 9,
    right: 12,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: argonTheme.COLORS.HEADER
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
});

export default Header;