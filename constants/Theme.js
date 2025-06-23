// constants/Theme.js
export default {
  COLORS: {
    // Primary Colors
    PRIMARY: '#5e72e4',
    SECONDARY: '#32325d',
    TERTIARY: '#172b4d',
    
    // Accent Colors
    INFO: '#11cdef',
    SUCCESS: '#2dce89',
    WARNING: '#fb6340',
    ERROR: '#f5365c',
    
    // Neutral Colors
    WHITE: '#ffffff',
    BLACK: '#000000',
    MUTED: '#8898aa',
    PLACEHOLDER: '#9b9b9b',
    INPUT: '#ddd',
    TRANSPARENT: 'transparent',
    
    // Gradient Colors
    GRADIENT_START: '#667eea',
    GRADIENT_MID: '#764ba2',
    GRADIENT_END: '#f093fb',
    
    // Background Colors
    BACKGROUND: '#f8f9fe',
    CARD_BACKGROUND: '#ffffff',
    
    // Text Colors
    TEXT: '#32325d',
    TEXT_MUTED: '#8898aa',
    TEXT_WHITE: '#ffffff',
    
    // Social Colors
    FACEBOOK: '#3B5998',
    TWITTER: '#55ACEE',
    GOOGLE: '#DD4B39',
    GITHUB: '#000000',
    
    // Status Colors
    ONLINE: '#2dce89',
    OFFLINE: '#8898aa',
  },
  
  SIZES: {
    // Base Sizes
    BASE: 16,
    FONT: 16,
    BORDER_RADIUS: 4,
    BORDER_WIDTH: 2,
    
    // Icon Sizes
    ICON_SMALL: 16,
    ICON_MEDIUM: 24,
    ICON_LARGE: 32,
    
    // Button Sizes
    BUTTON_HEIGHT: 48,
    BUTTON_RADIUS: 4,
    
    // Input Sizes
    INPUT_HEIGHT: 48,
    INPUT_RADIUS: 4,
    
    // Screen Dimensions (will be set dynamically)
    WIDTH: null,
    HEIGHT: null,
  },
  
  FONTS: {
    // Font Weights
    LIGHT: '300',
    REGULAR: '400',
    MEDIUM: '500',
    SEMIBOLD: '600',
    BOLD: '700',
    
    // Font Sizes
    CAPTION: 12,
    SMALL: 14,
    BODY: 16,
    TITLE: 18,
    H6: 20,
    H5: 24,
    H4: 28,
    H3: 32,
    H2: 36,
    H1: 42,
  },
  
  SPACING: {
    // Margin/Padding Sizes
    XS: 4,
    SM: 8,
    MD: 16,
    LG: 24,
    XL: 32,
    XXL: 48,
  },
  
  SHADOWS: {
    // Shadow Presets
    LIGHT: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    MEDIUM: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    HEAVY: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 8,
    },
  },
  
  GRADIENTS: {
    // Predefined Gradients
    PRIMARY: ['#667eea', '#764ba2'],
    SECONDARY: ['#f093fb', '#f5576c'],
    INFO: ['#11cdef', '#1171ef'],
    SUCCESS: ['#2dce89', '#2dcecc'],
    WARNING: ['#fb6340', '#fbb140'],
    ERROR: ['#f5365c', '#f56036'],
    
    // Special Gradients
    ONBOARDING: ['#667eea', '#764ba2', '#f093fb'],
    CARD: ['rgba(255,255,255,0.8)', 'rgba(255,255,255,0.4)'],
  },
  
  ANIMATIONS: {
    // Animation Durations
    FAST: 150,
    MEDIUM: 300,
    SLOW: 500,
    
    // Easing
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out',
  }
};