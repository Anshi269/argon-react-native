import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

export default function ProductScreen({ navigation }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = [36.5, 37, 37.5, 38, 39, 40];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <View style={styles.notificationContainer}>
            <TouchableOpacity>
              <Icon name="bell" size={24} color="white" />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Icon name="shopping-bag" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Product Image Section */}
        <View style={styles.imageSection}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' }}
              style={styles.productImage}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Product Details Card */}
        <View style={styles.detailsCard}>
          {/* Product Title */}
          <Text style={styles.productTitle}>Shoes</Text>
          
          {/* Seller Info */}
          <View style={styles.sellerSection}>
            <View style={styles.sellerInfo}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face' }}
                style={styles.sellerAvatar}
              />
              <View>
                <Text style={styles.sellerName}>Jessica Jones</Text>
                <Text style={styles.sellerBadge}>Pro Seller</Text>
              </View>
            </View>
            <Text style={styles.price}>$899</Text>
          </View>

          {/* Size Selection */}
          <View style={styles.sizeSection}>
            <Text style={styles.sizeLabel}>Size</Text>
            <View style={styles.sizeGrid}>
              {sizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  onPress={() => setSelectedSize(size)}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.sizeButtonSelected
                  ]}
                >
                  <Text style={[
                    styles.sizeButtonText,
                    selectedSize === size && styles.sizeButtonTextSelected
                  ]}>
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Add to Cart Button */}
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Floating Message Button */}
      <TouchableOpacity 
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Chat')}
      >
        <Icon name="message-circle" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    zIndex: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  notificationContainer: {
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 12,
    height: 12,
    backgroundColor: '#ef4444',
    borderRadius: 6,
  },
  scrollView: {
    flex: 1,
  },
  imageSection: {
    height: 400,
    position: 'relative',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#3b82f6',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  detailsCard: {
    backgroundColor: 'white',
    marginTop: -60,
    marginHorizontal: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 24,
  },
  sellerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  sellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  sellerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sellerName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  sellerBadge: {
    fontSize: 12,
    color: '#6b7280',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  sizeSection: {
    marginBottom: 32,
  },
  sizeLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4b5563',
    marginBottom: 16,
  },
  sizeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sizeButton: {
    width: (width - 64) / 3 - 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    backgroundColor: '#f9fafb',
    alignItems: 'center',
    marginBottom: 8,
  },
  sizeButtonSelected: {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
  },
  sizeButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  sizeButtonTextSelected: {
    color: '#2563eb',
  },
  addToCartButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 48,
    height: 48,
    backgroundColor: '#2563eb',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
});