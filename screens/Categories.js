import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";
import { argonTheme } from "../constants";

const { width } = Dimensions.get("screen");

const Categories = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Music");

  // Sample data for different categories
  const categoryData = {
    Music: [
      {
        id: 1,
        title: 'Jazz',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?fit=crop&w=400&h=250&q=80',
        action: 'carousel'
      },
      {
        id: 2,
        title: 'Hands',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?fit=crop&w=400&h=250&q=80',
        action: 'carousel'
      },
      {
        id: 3,
        title: 'Concerts',
        image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?fit=crop&w=400&h=250&q=80',
        action: 'carousel'
      },
      {
        id: 4,
        title: 'Venue',
        image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?fit=crop&w=400&h=250&q=80',
        action: 'carousel'
      },
      {
        id: 5,
        title: 'Body',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?fit=crop&w=400&h=250&q=80',
        action: 'carousel'
      },
      {
        id: 6,
        title: 'Clothes',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?fit=crop&w=400&h=250&q=80',
        action: 'carousel'
      }
    ],
    Beauty: [
      {
        id: 1,
        title: 'Skincare',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?fit=crop&w=400&h=250&q=80',
        action: 'beauty'
      },
      {
        id: 2,
        title: 'Makeup',
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?fit=crop&w=400&h=250&q=80',
        action: 'beauty'
      },
      {
        id: 3,
        title: 'Fragrance',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?fit=crop&w=400&h=250&q=80',
        action: 'beauty'
      },
      {
        id: 4,
        title: 'Hair Care',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?fit=crop&w=400&h=250&q=80',
        action: 'beauty'
      }
    ],
    Fashion: [
      {
        id: 1,
        title: 'Summer Collection',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?fit=crop&w=400&h=250&q=80',
        action: 'fashion'
      },
      {
        id: 2,
        title: 'Winter Wear',
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?fit=crop&w=400&h=250&q=80',
        action: 'fashion'
      },
      {
        id: 3,
        title: 'Casual Wear',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?fit=crop&w=400&h=250&q=80',
        action: 'fashion'
      },
      {
        id: 4,
        title: 'Formal Wear',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?fit=crop&w=400&h=250&q=80',
        action: 'fashion'
      }
    ],
    Shoes: [
      {
        id: 1,
        title: 'Blue Adidas',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fit=crop&w=400&h=250&q=80',
        action: 'product'
      },
      {
        id: 2,
        title: 'Perfect Shoes',
        image: 'https://images.unsplash.com/photo-1549298916-b41e19d5a8b5?fit=crop&w=400&h=250&q=80',
        action: 'product'
      },
      {
        id: 3,
        title: 'Fashion Shoes',
        image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?fit=crop&w=400&h=250&q=80',
        action: 'product'
      },
      {
        id: 4,
        title: 'Sport Shoes',
        image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?fit=crop&w=400&h=250&q=80',
        action: 'product'
      }
    ]
  };

  const tabs = ['Music', 'Beauty', 'Fashion', 'Shoes'];

  const handleCardClick = (card) => {
    if (selectedTab === 'Music' && card.action === 'carousel') {
      navigation.navigate('Carousel', { item: card });
    } else if (selectedTab === 'Shoes' && card.action === 'product') {
      navigation.navigate('Product', { item: card });
    } else {
      // Navigate to respective screens for Beauty and Fashion
      navigation.navigate(capitalizeFirstLetter(selectedTab), { item: card });
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleNotificationPress = () => {
    navigation.navigate('Notifications');
  };

  const handleCartPress = () => {
    navigation.navigate('Cart');
  };

  const renderCard = (item, index) => {
    const isLeftColumn = index % 2 === 0;
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => handleCardClick(item)}
        style={[
          styles.card,
          isLeftColumn ? styles.cardLeft : styles.cardRight
        ]}
      >
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <Block style={styles.cardOverlay}>
          <Text bold size={16} color="white" style={styles.cardText}>
            {item.title}
          </Text>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <Block safe flex style={styles.container}>
      {/* Top Header */}
      <Block row space="between" style={styles.header}>
        <Text bold size={20} color={argonTheme.COLORS.TEXT}>Categories</Text>
        <Block row style={styles.headerIcons}>
          <TouchableOpacity onPress={handleNotificationPress} style={styles.iconButton}>
            <Icon name="bell" family="Feather" size={22} color={argonTheme.COLORS.TEXT} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCartPress} style={styles.iconButton}>
            <Icon name="shopping-cart" family="Feather" size={20} color={argonTheme.COLORS.TEXT} />
          </TouchableOpacity>
        </Block>
      </Block>

      {/* Scrollable Filter Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        {tabs.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
            <Block
              middle
              style={[
                styles.tab,
                selectedTab === tab && styles.activeTab
              ]}
            >
              <Text
                bold={selectedTab === tab}
                color={selectedTab === tab ? "white" : argonTheme.COLORS.TEXT}
                size={14}
              >
                {tab}
              </Text>
            </Block>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Scrollable Body with Grid Layout */}
      <ScrollView contentContainerStyle={styles.content}>
        <Block flex style={styles.gridContainer}>
          {categoryData[selectedTab]?.map((item, index) => renderCard(item, index))}
        </Block>

        {/* Additional Info Section for Shoes Tab */}
        {selectedTab === 'Shoes' && (
          <Block style={styles.infoSection}>
            <Text bold size={16} style={styles.infoTitle}>AirMax Nike</Text>
            <Text size={14} color={argonTheme.COLORS.MUTED} style={styles.infoDescription}>
              AirMax shoes are the best line of shoes created by Nike company.
            </Text>
            <TouchableOpacity>
              <Text size={14} color={argonTheme.COLORS.PRIMARY} style={styles.infoLink}>
                View article
              </Text>
            </TouchableOpacity>
          </Block>
        )}
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
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerIcons: {
    alignItems: "center",
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  tabsContainer: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE / 2,
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
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: (width - theme.SIZES.BASE * 3) / 2,
    marginBottom: theme.SIZES.BASE,
    backgroundColor: "#fff",
    borderRadius: 6,
    overflow: "hidden",
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  cardLeft: {
    marginRight: theme.SIZES.BASE / 2,
  },
  cardRight: {
    marginLeft: theme.SIZES.BASE / 2,
  },
  cardImage: {
    width: "100%",
    height: 120,
  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  infoSection: {
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    padding: theme.SIZES.BASE,
    marginTop: theme.SIZES.BASE,
  },
  infoTitle: {
    marginBottom: 8,
    color: argonTheme.COLORS.TEXT,
  },
  infoDescription: {
    marginBottom: 8,
    lineHeight: 20,
  },
  infoLink: {
    fontWeight: '500',
  },
});

export default Categories;