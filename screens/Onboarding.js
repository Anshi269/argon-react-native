import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      {/* Background */}
      <ImageBackground
        source={require('../assets/images/onboarding-bg.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Argon Icon */}
        <Image
          source={require('../assets/logo/argon-icon.png')}
          style={styles.argonIcon}
        />

        {/* Title */}
        <Text style={styles.title}>Argon{'\n'}Design{'\n'}System</Text>

        {/* PRO badge */}
        <View style={styles.proBadge}>
          <Text style={styles.proText}>PRO</Text>
        </View>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Take advantage of all the features and screens made upon Galio Design
          System, coded on React Native for both.
        </Text>

        {/* Platform Icons */}
        <View style={styles.iconRow}>
          <Image
            source={require('../assets/icons/ios.png')}
            style={styles.platformIcon}
          />
          <Image
            source={require('../assets/icons/android.png')}
            style={styles.platformIcon}
          />
        </View>

        {/* CTA Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>GET PRO VERSION</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  argonIcon: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 42,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 48,
  },
  proBadge: {
    marginTop: 8,
    backgroundColor: '#11cdef',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  proText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  subtitle: {
    color: '#fff',
    opacity: 0.9,
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: 20,
    lineHeight: 24,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  platformIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 15,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#11cdef',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 40,
    width: width * 0.8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
