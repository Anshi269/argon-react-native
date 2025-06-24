import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";
import { argonTheme } from "../constants";

const { width } = Dimensions.get("screen");

const categories = [
  { name: "Music", screen: "Categories" },
  { name: "Shoes", screen: "Product" },
  { name: "Beauty", screen: "Beauty" },
  { name: "Fashion", screen: "Fashion" },
];

const Categories = ({ navigation }) => {
  const [selected, setSelected] = useState("Music");

  const handleCategoryPress = (category) => {
    setSelected(category.name);
    if (category.screen !== "Categories") {
      navigation.navigate(category.screen);
    }
  };

  // Function to handle cart icon press
  const handleCartPress = () => {
    navigation.navigate("Cart");
  };

  return (
    <Block safe flex style={styles.container}>
      {/* Top Header */}
      <Block row space="between" style={styles.header}>
        <Text bold size={20}>Categories</Text>
        <Block row>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Icon name="bell" family="Feather" size={22} color="#111827" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCartPress}>
            <Icon name="shopping-cart" family="Feather" size={20} />
          </TouchableOpacity>
        </Block>
      </Block>

      {/* Scrollable Filter Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity key={category.name} onPress={() => handleCategoryPress(category)}>
            <Block
              middle
              style={[styles.tab, selected === category.name && styles.activeTab]}
            >
              <Text
                bold={selected === category.name}
                color={selected === category.name ? "white" : argonTheme.COLORS.TEXT}
              >
                {category.name}
              </Text>
            </Block>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Scrollable Body */}
      <ScrollView contentContainerStyle={styles.content}>
        <Block style={styles.card}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=840&q=80" }}
            style={styles.cardImage}
          />
          <Text bold size={16} style={styles.cardText}>Rock Music Album</Text>
        </Block>
        <Block style={styles.card}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?fit=crop&w=840&q=80" }}
            style={styles.cardImage}
          />
          <Text bold size={16} style={styles.cardText}>Pop Collection</Text>
        </Block>
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    padding: theme.SIZES.BASE,
    alignItems: "center",
  },
  tabsContainer: {
    paddingHorizontal: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#f4f5f7",
    borderRadius: 30,
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: argonTheme.COLORS.PRIMARY,
  },
  content: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE * 2,
  },
  card: {
    marginBottom: theme.SIZES.BASE,
    backgroundColor: "#fff",
    borderRadius: 6,
    overflow: "hidden",
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: 180,
  },
  cardText: {
    padding: theme.SIZES.BASE / 2,
  },
});

export default Categories;