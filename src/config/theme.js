import { scale, scaleVertical } from '../utils/scale';

const Colors = {
  accent: '#E4FDE1',
  primary: '#456990',
  success: '#028090',
  disabled: '#CACACA',

  foreground: '#114B5F',
  alterForeground: '#707070',
  inverseForeground: '#ffffff',
  secondaryForeground: '#3C6B7C',
  background: '#FFFFFF',
  alterBackground: '#F2F2F2',
  overlayBackground: '#00000057',

  border: '#f2f2f2',

  twitter: '#41abe1',
  google: '#e94335',
  facebook: '#3b5998',

  info: '#028090',
  warning: '#7791AE',
  danger: '#F45B69',

  eagleGreen: '#114B5F',
  metalicSeaweed: '#028090',
  nyanza: '#E4FDE1',
  queenBlue: '#456990',
  fieryRose: '#F45B69'
};

const Fonts = {
  regular: 'Quicksand-Regular',
  medium: 'Quicksand-Medium'
};

const FontBaseValue = scale(18);

export const YamagataTheme = {
  name: 'main',
  colors: {
    accent: Colors.accent,
    primary: Colors.primary,
    disabled: Colors.disabled,
    twitter: Colors.twitter,
    google: Colors.google,
    facebook: Colors.facebook,
    brand: Colors.accent,
    text: {
      base: Colors.foreground,
      secondary: Colors.secondaryForeground,
      accent: Colors.accent,
      inverse: Colors.inverseForeground,
      hint: Colors.alterForeground
    },
    input: {
      text: Colors.alterForeground,
      background: Colors.background,
      label: Colors.secondaryForeground,
      placeholder: Colors.secondaryForeground
    },
    screen: {
      base: Colors.background,
      alter: Colors.alterBackground,
      scroll: Colors.alterBackground,
      bold: Colors.alterBackground,
      overlay: Colors.overlayBackground
    },
    button: {
      back: Colors.background,
      underlay: Colors.alterBackground,
      highlight: Colors.primary
    },
    border: {
      base: Colors.border,
      accent: Colors.accent,
      secondary: Colors.secondaryForeground,
      highlight: Colors.highlight
    },
    control: {
      background: Colors.background
    }
  },
  fonts: {
    sizes: {
      h0: scale(32),
      h1: scale(26),
      h2: scale(24),
      h3: scale(20),
      h4: scale(18),
      h5: scale(16),
      h6: scale(15),
      p1: scale(16),
      p2: scale(15),
      p3: scale(15),
      p4: scale(13),
      s1: scale(15),
      s2: scale(13),
      s3: scale(13),
      s4: scale(12),
      s5: scale(12),
      s6: scale(13),
      s7: scale(10),
      base: FontBaseValue,
      small: FontBaseValue * 0.8,
      medium: FontBaseValue,
      large: FontBaseValue * 1.2,
      xlarge: FontBaseValue / 0.75,
      xxlarge: FontBaseValue * 1.6
    },
    lineHeights: {
      medium: 18,
      big: 24
    },
    family: {
      regular: Fonts.regular,
      medium: Fonts.medium
    }
  }
};
