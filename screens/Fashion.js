import React from "react";
import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";
import { argonTheme } from "../constants";

const { width } = Dimensions.get("screen");

const fashionItems = [
  {
    title: "Streetwear Style",
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?fit=crop&w=840&q=80",
  },
  {
    title: "Summer Collection",
    image: "https://images.unsplash.com/photo-1495121605193-b116b5b9c8a5?fit=crop&w=840&q=80",
  },
];

const Fashion = () => {
  return (
    <Block safe flex style={{ backgroundColor: "#fff" }}>
      <Block
        row
        space="between"
        style={{ padding: 16, alignItems: "center", backgroundColor: "#fff" }}
      >
        <Text bold size={20}>Fashion</Text>
        <Block row>
          <Icon name="bell" family="Feather" size={20} color={argonTheme.COLORS.ICON} style={{ marginRight: 20 }} />
          <Icon name="shopping-cart" family="Feather" size={20} color={argonTheme.COLORS.ICON} />
        </Block>
      </Block>

      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {fashionItems.map((item, index) => (
          <Block key={index} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text size={16} bold style={styles.cardTitle}>
              {item.title}
            </Text>
          </Block>
        ))}
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    padding: theme.SIZES.BASE,
  },
  card: {
    marginBottom: theme.SIZES.BASE,
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: 160,
  },
  cardTitle: {
    padding: theme.SIZES.BASE / 2,
  },
});

export default Fashion;