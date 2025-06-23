import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  SafeAreaView,
  FlatList 
} from 'react-native';
import { Icon } from 'galio-framework';
import { argonTheme } from '../constants';

const SearchDefault = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredItems = [
    {
      id: 1,
      image: require('../assets/travel-image.png'), // Replace with your Figma image
      title: "Plan your trip with free itineraries, guides.",
      price: 125
    },
    {
      id: 2,
      image: require('../assets/concert-image.png'), // Replace with your Figma image
      title: "A concert is a live music performance in front.",
      price: 199
    },
    {
      id: 3,
      image: require('../assets/concert-past-image.png'), // Replace with your Figma image
      title: "Find concerts in the past one.",
      price: 49
    }
  ];

  const renderFeaturedItem = ({ item }) => (
    <TouchableOpacity style={styles.featuredItem}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" family="Feather" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Search</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="bell" family="Feather" size={20} color="#333" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="shopping-bag" family="Feather" size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Icon name="search" family="Feather" size={18} color="#999" />
          <TextInput
  style={styles.input}
  placeholder="Search products..."
  placeholderTextColor="#aaa"
  onSubmitEditing={() => navigation.navigate('SearchActive')}
/>
        </View>
      </View>

      {/* Featured Items */}
      <View style={styles.content}>
        <FlatList
          data={featuredItems}
          renderItem={renderFeaturedItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginLeft: 12,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    backgroundColor: '#FF3B30',
    borderRadius: 4,
  },
  searchSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listContainer: {
    paddingTop: 8,
  },
  featuredItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemImage: {
    width: 96,
    height: 96,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  itemContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
});

export default SearchDefault;