import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Icon } from 'galio-framework';

const { height, width } = Dimensions.get('window');

const Profile = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Purple Background Positioned Absolutely */}
      <ImageBackground
        source={require('../assets/Bg.png')}
        style={styles.backgroundContainer}
        resizeMode="cover"
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" family="Feather" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          <View style={styles.headerIcons}>
            <Icon name="bell" family="Feather" size={22} color="#fff" style={styles.iconSpacing} />
            <Icon name="shopping-bag" family="Feather" size={22} color="#fff" />
          </View>
        </View>
      </ImageBackground>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        {/* Profile Image - Overlapping */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarGradient}>
            <Image
              source={require('../assets/profile-image.png')}
              style={styles.avatar}
            />
          </View>
        </View>

        <View style={styles.cardContent}>
          {/* Action Buttons */}
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.connectBtn}>
              <Text style={styles.btnText}>CONNECT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.messageBtn}>
              <Text style={styles.btnText}>MESSAGE</Text>
            </TouchableOpacity>
          </View>

          {/* Stats */}
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>2k</Text>
              <Text style={styles.statLabel}>Friends</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>10</Text>
              <Text style={styles.statLabel}>Photos</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>89</Text>
              <Text style={styles.statLabel}>Comments</Text>
            </View>
          </View>

          {/* Name and Location */}
          <Text style={styles.name}>Jessica Jones, 27</Text>
          <Text style={styles.location}>San Francisco, USA</Text>

          {/* Description */}
          <Text style={styles.description}>
            An artist of considerable range, Jessica name taken by Melbourne ...
            <Text style={styles.showMore}> Show more</Text>
          </Text>

          {/* Album Section */}
          <View style={styles.albumHeader}>
            <Text style={styles.albumTitle}>Album</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>

          {/* Album Grid */}
          <View style={styles.albumGrid}>
            <View style={styles.albumRow}>
              <Image source={require('../assets/album 1.png')} style={styles.albumImage} />
              <Image source={require('../assets/album 2.png')} style={styles.albumImage} />
              <Image source={require('../assets/album 3.png')} style={styles.albumImage} />
            </View>
            <View style={styles.albumRow}>
              <Image source={require('../assets/album 4.png')} style={styles.albumImage} />
              <Image source={require('../assets/album 5.png')} style={styles.albumImage} />
              <Image source={require('../assets/album 6.png')} style={styles.albumImage} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.5, // Covers half the screen including top of card
    zIndex: -1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  scrollContent: {
  paddingBottom: 60,
  paddingTop: 0,
},
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 12,
  },
  profileCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: height * 0.25,
    borderRadius: 20,
    paddingBottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  avatarContainer: {
    position: 'absolute',
    top: -48,
    alignSelf: 'center',
    zIndex: 10,
  },
  avatarGradient: {
    width: 96,
    height: 96,
    borderRadius: 48,
    padding: 3,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  cardContent: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 12,
  },
  connectBtn: {
    backgroundColor: '#00BCD4',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  messageBtn: {
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  statLabel: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 13,
    textAlign: 'center',
    color: '#555',
    lineHeight: 18,
    marginBottom: 20,
  },
  showMore: {
    color: '#007AFF',
    fontWeight: '500',
  },
  albumHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  albumTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  viewAll: {
    color: '#007AFF',
    fontWeight: '500',
    fontSize: 14,
  },
  albumGrid: {
    gap: 8,
  },
  albumRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  albumImage: {
    width: (width - 55) / 3,
    height: 100,
    borderRadius: 10,
  },
});