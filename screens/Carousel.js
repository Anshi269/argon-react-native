import React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

const { width } = Dimensions.get('screen');

const items = [
  {
    title: 'Music Album',
    description: 'Rock music is a genre of popular music...',
    price: '$125',
    image: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?fit=crop&w=800&q=80',
  },
  {
    title: 'Concert 1',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?fit=crop&w=800&q=80',
  },
  {
    title: 'Concert 2',
    price: '$55',
    image: 'https://images.unsplash.com/photo-1503342452485-86a5d6cbd0d6?fit=crop&w=800&q=80',
  },
];

export default function CarouselScreen() {
  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <Block key={index} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Block style={styles.meta}>
            <Text size={16} color={theme.COLORS.MUTED}>
              {item.price}
            </Text>
            <Text size={22} bold>
              {item.title}
            </Text>
            {item.description && <Text size={14}>{item.description}</Text>}
          </Block>
        </Block>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width - theme.SIZES.BASE * 2,
    margin: theme.SIZES.BASE,
    borderRadius: theme.SIZES.BASE,
    overflow: 'hidden',
    backgroundColor: theme.COLORS.WHITE,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 220,
  },
  meta: {
    padding: theme.SIZES.BASE,
  },
});