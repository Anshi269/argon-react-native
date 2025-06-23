import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Block, Text, Input, theme, Icon } from 'galio-framework';
import articles from '../constants/articles';
import { Card } from "../components/";

const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    return (
      <Block style={styles.cardsContainer}>
        <Card item={articles[0]} horizontal />
        <Block flex row>
          <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
          <Card item={articles[2]} />
        </Block>
        <Card item={articles[3]} horizontal />
        <Card item={articles[4]} full />
      </Block>
    );
  };

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        {/* Top Bar */}
        <Block row space="between" style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu" family="Feather" size={24} />
          </TouchableOpacity>
          <Input
  placeholder="What are you looking for?"
  iconContent={<Icon size={16} color="grey" name="search1" family="AntDesign" />}
  style={styles.search}
  onFocus={() => navigation.navigate('SearchDefault')}
/>
          <Icon name="bell" family="Feather" size={22} />
        </Block>

        {/* Category Filters */}
        <Block row style={styles.filters}>
          {["Music", "Fashion", "Food"].map((tag, idx) => (
            <Block key={idx} style={styles.filterBtn}>
              <Text size={12}>{tag}</Text>
            </Block>
          ))}
        </Block>

        {/* Articles */}
        {this.renderArticles()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: theme.SIZES.BASE,
  },
  topBar: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  search: {
    flex: 1,
    height: 40,
    marginHorizontal: 12,
  },
  filters: {
    marginBottom: 12,
  },
  filterBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#eee',
    borderRadius: 12,
    marginRight: 8,
  },
  cardsContainer: {
    paddingBottom: 20,
  },
});

export default Home;