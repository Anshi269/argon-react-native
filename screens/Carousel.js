import React, { useState } from 'react';
import { ScrollView, StyleSheet, Image, Dimensions, View, Text, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('screen');

export default function MusicCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const musicCards = [
    {
      id: 1,
      title: 'Music Album',
      price: '$125',
      image: require('../assets/music-album.png'),
      description: 'Rock music is a genre of popular music.\nIt developed during and after the 1960s in\nthe United Kingdom.',
      hasTickets: true
    },
    {
      id: 2,
      title: 'Events',
      price: '$35',
      image: require('../assets/events.png'),
      description: 'Rock music is a genre of popular music.\nIt developed during and after the 1960s in\nthe United Kingdom.',
      hasTickets: false
    }
  ];

  const concertTickets = [
    {
      id: 1,
      title: "Queen's Concert",
      subtitle: 'Buy ticket',
      price: '$ 125',
      image: require('../assets/queen-concert.png')
    },
    {
      id: 2,
      title: 'Blue Jazz Concert',
      subtitle: 'Buy ticket',
      price: '$ 199',
      image: require('../assets/blue-jazz.png')
    }
  ];

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(scrollPosition / width);
    setCurrentIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Music</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Text style={styles.bellIcon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.profileIcon}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Main Cards Container - Horizontal Carousel */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
          style={styles.carouselContainer}
        >
          {musicCards.map((card) => (
            <View key={card.id} style={[styles.cardWrapper, { width }]}>
              <View style={styles.mainCard}>
                <View style={styles.imageContainer}>
                  <Image 
                    source={card.image}
                    style={styles.heroImage}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>{card.price}</Text>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{card.title}</Text>
                  <Text style={styles.cardDescription}>
                    {card.description}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Concert Tickets Section - Only show when Music Album is active */}
        {currentIndex === 0 && (
          <View style={styles.ticketsContainer}>
            {concertTickets.map((ticket) => (
              <View key={ticket.id} style={styles.ticketCard}>
                <Image 
                  source={ticket.image}
                  style={styles.ticketImage}
                  resizeMode="cover"
                />
                <View style={styles.ticketOverlay}>
                  <Text style={styles.ticketTitle}>{ticket.title}</Text>
                  <Text style={styles.ticketSubtitle}>{ticket.subtitle}</Text>
                  <Text style={styles.ticketPrice}>{ticket.price}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    fontSize: 24,
    color: '#333333',
    fontWeight: '400',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    letterSpacing: 0.5,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  bellIcon: {
    fontSize: 20,
    color: '#333333',
  },
  profileIcon: {
    fontSize: 20,
    color: '#333333',
  },
  scrollContainer: {
    flex: 1,
  },
  carouselContainer: {
    paddingTop: 20,
  },
  cardWrapper: {
    paddingHorizontal: 20,
  },
  mainCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  imageContainer: {
    height: 200,
    width: '100%',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  priceContainer: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  priceText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '600',
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 16,
    textAlign: 'center',
  },
  ticketsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    gap: 12,
  },
  ticketCard: {
    flex: 1,
    height: 140,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  ticketImage: {
    width: '100%',
    height: '100%',
  },
  ticketOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: 12,
  },
  ticketTitle: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
  },
  ticketSubtitle: {
    color: '#cccccc',
    fontSize: 10,
    marginBottom: 4,
  },
  ticketPrice: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
});