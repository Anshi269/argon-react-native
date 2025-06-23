import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const { width } = Dimensions.get('screen');

const cartItems = [
  {
    id: 1,
    name: "Discover What's New In Beauty And Rec ...",
    price: "$180",
    image: require('../assets/product1.png'),
    status: "In Stock"
  },
  {
    id: 2,
    name: "Carry the charm of New Orleans with you ...",
    price: "$230", 
    image: require('../assets/product 2.png'),
    status: "In Stock"
  },
  {
    id: 3,
    name: "Blue Nile is the world's leading diamond je ...",
    price: "$90",
    image: require('../assets/product 3.png'),
    status: "In Stock"
  },
  {
    id: 4,
    name: "The perfect diamond engagement ring ...",
    price: "$300",
    image: require('../assets/product 4.png'),
    status: "In Stock"
  },
];

const suggestions = [
  {
    name: 'Lip makeup',
    price: '$300',
    image: require('../assets/suggest 1.png'),
  },
  {
    name: 'Hair treatment', 
    price: '$40',
    image: require('../assets/suggest 2.png'),
  },
  {
    name: 'Leather Jacket',
    price: '$240',
    image: require('../assets/suggest 3.png'),
  },
];

export default function ShoppingCart() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.headerTitle}>Shopping Cart</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerIcon}>♡</Text>
          <Text style={styles.headerIcon}>🛒</Text>
        </View>
      </View>

      {/* Cart Summary */}
      <View style={styles.cartSummary}>
        <Text style={styles.summaryText}>
          Cart subtotal (5 items): <Text style={styles.totalPrice}>$725</Text>
        </Text>
      </View>

      {/* Proceed to Checkout Button */}
      <View style={styles.checkoutContainer}>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>

      {/* Cart Items */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.cartItemsContainer}>
          {cartItems.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.productImage} />
                <TouchableOpacity style={styles.quantityContainer}>
                  <Text style={styles.quantityText}>01</Text>
                  <Text style={styles.quantityArrow}>▼</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemDetails}>
                <Text style={styles.itemName} numberOfLines={2}>
                  {item.name}
                </Text>
                <Text style={styles.itemStatus}>{item.status}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                
                <View style={styles.itemActions}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>DELETE</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>SAVE FOR LATER</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Suggestions Section */}
        <View style={styles.suggestionsContainer}>
          <Text style={styles.suggestionsTitle}>
            Customers who shopped for items in your cart also shopped for:
          </Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.suggestionsScroll}>
            {suggestions.map((item, idx) => (
              <View key={idx} style={styles.suggestionItem}>
                <Image source={item.image} style={styles.suggestionImage} />
                <Text style={styles.suggestionName} numberOfLines={2}>
                  {item.name}
                </Text>
                <Text style={styles.suggestionPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.addToCartButton}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Checkout Button */}
      <View style={styles.bottomCheckoutContainer}>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 18,
    color: '#6B7280',
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 18,
    color: '#6B7280',
    marginLeft: 16,
  },
  cartSummary: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  summaryText: {
    fontSize: 16,
    color: '#374151',
  },
  totalPrice: {
    fontWeight: '600',
    color: '#EF4444',
  },
  checkoutContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  checkoutButton: {
    backgroundColor: '#6366F1',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  cartItemsContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  cartItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  imageContainer: {
    marginRight: 16,
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#374151',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    minWidth: 60,
    justifyContent: 'space-between',
  },
  quantityText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  quantityArrow: {
    fontSize: 10,
    color: '#FFFFFF',
    marginLeft: 8,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
    lineHeight: 20,
  },
  itemStatus: {
    fontSize: 12,
    color: '#10B981',
    marginBottom: 4,
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 16,
    color: '#6366F1',
    marginBottom: 16,
    fontWeight: '600',
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  actionButton: {
    backgroundColor: '#374151',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  suggestionsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  suggestionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
    lineHeight: 24,
  },
  suggestionsScroll: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  suggestionItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    width: 140,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  suggestionImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 12,
  },
  suggestionName: {
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
    marginBottom: 8,
    minHeight: 20,
    fontWeight: '500',
  },
  suggestionPrice: {
    fontSize: 16,
    color: '#6366F1',
    fontWeight: '600',
    marginBottom: 12,
  },
  addToCartButton: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    width: '100%',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomCheckoutContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
});