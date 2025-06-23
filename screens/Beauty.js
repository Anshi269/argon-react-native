import React from "react";
import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";
import { argonTheme } from "../constants";

const { width } = Dimensions.get("screen");

const beautyItems = [
  {
    title: "Makeup Kit",
    image: "https://images.unsplash.com/photo-1580656519539-0cfb39c11e38?fit=crop&w=840&q=80",
  },
  {
    title: "Skincare Pack",
    image: "https://images.unsplash.com/photo-1612703319547-e470188f07ba?fit=crop&w=840&q=80",
  },
];

const Beauty = () => {
  return (
    <Block safe flex style={{ backgroundColor: "#fff" }}>
      <Block
        row
        space="between"
        style={{ padding: 16, alignItems: "center", backgroundColor: "#fff" }}
      >
        <Text bold size={20}>Beauty</Text>
        <Block row>
          <Icon name="bell" family="Feather" size={20} color={argonTheme.COLORS.ICON} style={{ marginRight: 20 }} />
          <Icon name="shopping-cart" family="Feather" size={20} color={argonTheme.COLORS.ICON} />
        </Block>
      </Block>

      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {beautyItems.map((item, index) => (
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

export default Beauty;