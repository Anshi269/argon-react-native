import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Block, Button, theme } from 'galio-framework';

const { width, height } = Dimensions.get('screen');

// Custom theme colors to match Argon design
const argonTheme = {
  COLORS: {
    PRIMARY: '#5e72e4',
    SECONDARY: '#32325d',
    LABEL: '#FE2472',
    INFO: '#11cdef',
    ERROR: '#f5365c',
    SUCCESS: '#2dce89',
    WARNING: '#fb6340',
    MUTED: '#8898aa',
    INPUT: '#ddd',
    PLACEHOLDER: '#9b9b9b',
    WHITE: '#ffffff',
    BLACK: '#000000',
    TRANSPARENT: 'transparent',
    GRADIENT_START: '#6f42c1',
    GRADIENT_END: '#17a2b8',
  },
  SIZES: {
    BASE: 16,
    FONT: 16,
    BORDER_RADIUS: 4,
    BORDER_WIDTH: 2,
  }
};

const OnboardingScreen = ({ navigation }) => {
  return (
    <Block flex style={styles.container}>
      <StatusBar hidden />
      
      {/* Gradient Background */}
      <LinearGradient
        colors={['#667eea', '#764ba2', '#f093fb']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        {/* Geometric Background Elements */}
        <View style={styles.geometricElements}>
          <View style={[styles.geometricShape, styles.shape1]} />
          <View style={[styles.geometricShape, styles.shape2]} />
          <View style={[styles.geometricShape, styles.shape3]} />
        </View>

        <KeyboardAvoidingView style={styles.registerContainer} behavior="padding" enabled>
          <Block flex middle>
            <Block style={styles.registerForm}>
              
              {/* Logo Section */}
              <Block center style={styles.logoContainer}>
                <View style={styles.logoIcon}>
                  <View style={styles.logoCircle}>
                    <View style={styles.logoInner} />
                  </View>
                </View>
              </Block>

              {/* Main Content */}
              <Block center style={styles.contentContainer}>
                <Text style={styles.mainTitle}>
                  Argon{'\n'}Design{'\n'}System
                </Text>
                
                <View style={styles.proBadge}>
                  <Text style={styles.proBadgeText}>PRO</Text>
                </View>

                <Text style={styles.description}>
                  Take advantage of all the features and screens made upon Galio Design System, coded on React Native for both.
                </Text>

                {/* Platform Icons */}
                <Block row center style={styles.platformContainer}>
                  <View style={styles.platformIcon}>
                    <Text style={styles.platformText}>🍎 iOS</Text>
                  </View>
                  <View style={styles.platformIcon}>
                    <Text style={styles.platformText}>🤖 android</Text>
                  </View>
                </Block>
              </Block>

              {/* CTA Button */}
              <Block center style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.ctaButton}
                  onPress={() => navigation.navigate('Register')}
                >
                  <Text style={styles.ctaButtonText}>GET PRO VERSION</Text>
                </TouchableOpacity>
              </Block>

            </Block>
          </Block>
        </KeyboardAvoidingView>
      </LinearGradient>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: argonTheme.COLORS.BLACK,
  },
  gradient: {
    width: width,
    height: height,
    zIndex: 1,
  },
  geometricElements: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  geometricShape: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: [{ rotate: '45deg' }],
  },
  shape1: {
    width: 100,
    height: 100,
    top: '15%',
    right: '20%',
    borderRadius: 20,
  },
  shape2: {
    width: 150,
    height: 150,
    top: '25%',
    left: '10%',
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  shape3: {
    width: 80,
    height: 80,
    bottom: '30%',
    right: '15%',
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  registerContainer: {
    width: width,
    height: height,
    zIndex: 2,
  },
  registerForm: {
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: 'space-between',
    height: height * 0.85,
  },
  logoContainer: {
    marginTop: 50,
    marginBottom: 30,
  },
  logoIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: argonTheme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  logoInner: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: argonTheme.COLORS.WHITE,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  mainTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: argonTheme.COLORS.WHITE,
    textAlign: 'center',
    lineHeight: 50,
    marginBottom: 10,
    fontFamily: 'OpenSans-Bold', // Use Open Sans as mentioned in theme
  },
  proBadge: {
    backgroundColor: argonTheme.COLORS.INFO,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 25,
  },
  proBadgeText: {
    color: argonTheme.COLORS.WHITE,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  description: {
    fontSize: 16,
    color: argonTheme.COLORS.WHITE,
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.9,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  platformContainer: {
    marginBottom: 20,
  },
  platformIcon: {
    marginHorizontal: 15,
    alignItems: 'center',
  },
  platformText: {
    color: argonTheme.COLORS.WHITE,
    fontSize: 16,
    opacity: 0.8,
  },
  buttonContainer: {
    marginBottom: 50,
  },
  ctaButton: {
    backgroundColor: argonTheme.COLORS.INFO,
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 25,
    width: width * 0.8,
    alignItems: 'center',
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  ctaButtonText: {
    color: argonTheme.COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default OnboardingScreen;