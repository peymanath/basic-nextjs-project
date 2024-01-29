import type { Config } from 'tailwindcss';
import type { KeyValuePair, RecursiveKeyValuePair, ResolvableTo } from 'tailwindcss/types/config';

type CustomFontType = ResolvableTo<
  KeyValuePair<
    string,
    | string
    | [fontSize: string, lineHeight: string]
    | [
        fontSize: string,
        configuration: Partial<{
          lineHeight: string;
          letterSpacing: string;
          fontWeight: string | number;
        }>,
      ]
  >
>;


// Customize Colors
const colorTailwind: ResolvableTo<RecursiveKeyValuePair> = {
  current: 'currentColor',
  transparent: 'transparent',

  // Neutral Color
  white: '#FFF',
  black: '#0C0C0C',

  // Primary Color
  primary: '#417F56',

  // Error Color
  error: '#C30000',
  'error-light': '#ED2E2E',
  'error-exLight': '#FFF2F2',

  // Success Color
  success: '#00966D',
  'success-light': '#00BA88',
  'success-exLight': '#F3FDFA',

  // Warning Color
  warning: '#A9791C',
  'warning-light': '#F4B740',
  'warning-exLight': '#FFF8E1'
};

// Customize Fonts
const fontTailwind: CustomFontType = {
  // Display Fonts
  'display-1': [
    '64px',
    {
      letterSpacing: '0',
      fontWeight: '700', // Bold
    },
  ],
};

// Customize Spacing
const spacingTailwind: ResolvableTo<KeyValuePair> = {
  0: '0',
  px: '1px',
  '0.25': '2px',
  '0.5': '4px',
  1: '8px',
  1.5: '12px',
  2: '16px',
  2.5: '20px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '48px',
  7: '56px',
  8: '64px',
  9: '72px',
  10: '80px',
  11: '88px',
  12: '96px',
  13: '104px',
  14: '112px',
  15: '120px',
  16: '128px',
  17: '136px',
  18: '144px',
  19: '152px',
  20: '160px',
};

// Customize BorderRadius
const borderRadiusCustomize: ResolvableTo<KeyValuePair> = {
  none: '0',
  DEFAULT: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '64px',
  full: '9999px',
};

// Customize BorderRadius
const boxShadowCustomize: ResolvableTo<KeyValuePair> = {
  '2': '0px 2px 2px 0px rgba(0, 0, 0, 0.25)',
  '4': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  '6': '0px 6px 6px 0px rgba(0, 0, 0, 0.25)',
  '8': '0px 8px 8px 0px rgba(0, 0, 0, 0.25)',
  '12': '0px 12px 12px 0px rgba(0, 0, 0, 0.25)',
  '16': '0px 16px 16px 0px rgba(0, 0, 0, 0.25)',
  card: '0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.09), 0px 9px 5px 0px rgba(0, 0, 0, 0.05), 0px 16px 6px 0px rgba(0, 0, 0, 0.01), 0px 25px 7px 0px rgba(0, 0, 0, 0.00)',
  'contact-card':
    '0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 3px 6px 0px rgba(0, 0, 0, 0.10), 0px 11px 11px 0px rgba(0, 0, 0, 0.09), 0px 24px 14px 0px rgba(0, 0, 0, 0.05), 0px 42px 17px 0px rgba(0, 0, 0, 0.01), 0px 66px 18px 0px rgba(0, 0, 0, 0.00)',
};

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        mobile: '2rem',
      },
    },
    colors: colorTailwind,
    fontSize: fontTailwind,
    spacing: spacingTailwind,
    borderRadius: borderRadiusCustomize,
    boxShadow: boxShadowCustomize,
    extend: {
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
export default config;