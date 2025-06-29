import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";
import { Images, argonTheme, articles } from "../constants/";
import { Card } from "../components/";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

const categories = [
  {
    title: "Music Album",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=840&q=80",
    price: "$125",
  },
  {
    title: "Events",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1543747579-795b9c2c3ada?fit=crop&w=840&q=80",
    price: "$35",
  },
];

class Articles extends React.Component {
  renderHeader = () => (
    <Block row space="between" style={styles.header}>
      <TouchableWithoutFeedback onPress={() => this.props.navigation.openDrawer()}>
        <Icon name="menu" family="Feather" size={22} />
      </TouchableWithoutFeedback>
      <Text bold size={20}>Articles</Text>
      <Icon name="bell" family="Feather" size={22} />
    </Block>
  );

  renderProduct = (item, index) => {
    const { navigation } = this.props;
    return (
      <TouchableWithoutFeedback
        key={`product-${item.title}`}
        onPress={() => navigation.navigate("Pro", { product: item })}
      >
        <Block center style={styles.productItem}>
          <Image resizeMode="cover" style={styles.productImage} source={{ uri: item.image }} />
          <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Text center size={16} color={theme.COLORS.MUTED} style={styles.productPrice}>
              {item.price}
            </Text>
            <Text center size={34}>{item.title}</Text>
            <Text center size={16} color={theme.COLORS.MUTED} style={styles.productDescription}>
              {item.description}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

  renderCards = () => (
    <Block flex style={styles.group}>
      <Text bold size={16} style={styles.title}>Cards</Text>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Card item={articles[0]} horizontal />
        <Block flex row>
          <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
          <Card item={articles[2]} />
        </Block>
        <Card item={articles[4]} full />
        <Block flex card shadow style={styles.category}>
          <ImageBackground
            source={{ uri: Images.Products["View article"] }}
            style={[styles.imageBlock, { width: width - theme.SIZES.BASE * 2, height: 252 }]}
            imageStyle={{ width: width - theme.SIZES.BASE * 2, height: 252 }}
          >
            <Block style={styles.categoryTitle}>
              <Text size={18} bold color={theme.COLORS.WHITE}>View article</Text>
            </Block>
          </ImageBackground>
        </Block>
      </Block>
    </Block>
  );

  renderAlbum = () => (
    <Block flex style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}>
      <Text bold size={16} style={styles.title}>Album</Text>
      <Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
        <Block flex right>
          <Text size={12} color={theme.COLORS.PRIMARY} onPress={() => this.props.navigation.navigate("Home")}>
            View All
          </Text>
        </Block>
        <Block row space="between" style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}>
          {Images.Viewed.map((img, index) => (
            <Block key={`viewed-${index}`} style={styles.shadow}>
              <Image resizeMode="cover" source={{ uri: img }} style={styles.albumThumb} />
            </Block>
          ))}
        </Block>
      </Block>
    </Block>
  );

  render() {
    return (
      <Block flex>
        {this.renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderCards()}
          {this.renderAlbum()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 1.5,
    paddingBottom: theme.SIZES.BASE,
    backgroundColor: "#fff",
    zIndex: 99,
  },
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER,
  },
  group: {
    paddingTop: theme.SIZES.BASE,
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4,
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3,
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE,
  },
  shadow: {
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default Articles;