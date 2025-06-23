import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Icon } from 'galio-framework';

const fallbackCategories = ['Clothing', 'Handbag', 'Style'];
const dailyDeals = [
  {
    title: 'Is makeup one of your daily essentials?',
    price: '$79',
    image: require('../assets/makeup-image.png'),
  },
  {
    title: 'Coffee is more than just a drink. It\'s...',
    price: '$109',
    image: require('../assets/coffee-image.png'),
  },
  {
    title: 'Find concerts in the past one.',
    price: '$49',
    image: require('../assets/concert-image.png'),
  },
];

const SearchActive = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Icon name="arrow-left" family="Feather" size={24} color="#000" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Search</Text>
        
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="bell" family="Feather" size={24} color="#000" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="shopping-bag" family="Feather" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="accessories"
          style={styles.searchInput}
          placeholderTextColor="#9CA3AF"
          value="accessories"
        />
        <TouchableOpacity style={styles.clearButton}>
          <Icon name="x" family="Feather" size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Not Found Message */}
        <View style={styles.messageContainer}>
          <Text style={styles.notFoundText}>
            We didn't find <Text style={styles.boldText}>"accessories"</Text> in our store.
          </Text>
          <Text style={styles.suggestionText}>
            You can see more products from other categories.
          </Text>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          {fallbackCategories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem}>
              <Text style={styles.categoryText}>{category}</Text>
              <Icon name="chevron-right" family="Feather" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Daily Deals Grid */}
        <Text style={styles.sectionTitle}>Daily Deals</Text>
        
       <FlatList
  data={dailyDeals}
  key={'2-cols'} // 👈 Add this line
  numColumns={2}
  columnWrapperStyle={{ justifyContent: 'space-between' }}
  keyExtractor={(item, index) => index.toString()}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 20 }}
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.gridCard}>
      <Image 
        source={item.image} 
        style={styles.gridImage} 
      />
      <Text style={styles.gridTitle} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.gridPrice}>{item.price}</Text>
    </TouchableOpacity>
  )}
/>
      </View>
    </View>
  );
};

export default SearchActive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 20,
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 24,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    paddingVertical: 0,
  },
  clearButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  messageContainer: {
    marginBottom: 32,
  },
  notFoundText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 8,
  },
  boldText: {
    fontWeight: '600',
    color: '#000000',
  },
  suggestionText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  categoriesContainer: {
    marginBottom: 32,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  categoryText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '400',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 20,
  },
  gridCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    paddingBottom: 12,
  },
  gridImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#F3F4F6',
  },
  gridTitle: {
    fontSize: 14,
    color: '#374151',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  gridPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    paddingHorizontal: 10,
    marginTop: 4,
  },
});