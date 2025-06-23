import React from 'react';
import { StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';

const { width } = Dimensions.get('screen');

export default function ProductScreen() {
  return (
    <Block flex style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1568254183934-5c3c7b0b4a9e?fit=crop&w=800&q=80' }}
        style={styles.image}
      />
      <Text size={24} bold>
        Cool Sneakers
      </Text>
      <Text muted style={{ marginVertical: theme.SIZES.BASE / 2 }}>
        by Jessica Jones
      </Text>
      <Text size={20} bold color={theme.COLORS.PRIMARY}>
        $899
      </Text>

      <Block row space="evenly" style={styles.sizeRow}>
        {[36, 37, 38, 39, 40].map(size => (
          <TouchableOpacity key={size}>
            <Block style={styles.sizeBox}>
              <Text size={16}>{size}</Text>
            </Block>
          </TouchableOpacity>
        ))}
      </Block>

      <Button round color="primary" style={styles.button}>
        Add to Cart
      </Button>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.SIZES.BASE * 2,
    backgroundColor: theme.COLORS.WHITE,
  },
  image: {
    width: width - theme.SIZES.BASE * 4,
    height: 300,
    borderRadius: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE * 2,
  },
  sizeRow: {
    marginVertical: theme.SIZES.BASE * 2,
  },
  sizeBox: {
    borderWidth: 1,
    borderColor: theme.COLORS.MUTED,
    padding: theme.SIZES.BASE / 2,
    borderRadius: 4,
  },
  button: {
    marginTop: theme.SIZES.BASE,
  },
});