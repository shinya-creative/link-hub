import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: '#2563EB',
    secondary: '#EFF6FF',
    hover: '#1D4ED8',

    background: '#F8FAFC',
    surface: '#FFFFFF',
    form: '#F0F0F0',

    font: '#6B7280',
    strongFont: '#1F2937',
    thinFont: '#9CA3AF',

    border: '#D9D9D9',
    buttonHover: '#C4C4C4',
    shadow: 'rgba(0, 0, 0, 0.1)',

    danger: '#E22323',
    dangerBackground: '#FEF2F2',
    dangerHover: '#B91C1C',
    success: '#35B335',
    successBackground: '#F2FEF2',
    successHover: '#22863A',
    warning: '#DCB646',
    warningBackground: '#FEF8F2',
    warningHover: '#C2810C',

    // Grays
    gray100: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#DCDCDC',
    gray400: '#C4C4C4',
    gray500: '#6B7280',
    gray600: '#4B5563',
    gray700: '#374151',
    gray800: '#1F2937',
    gray900: '#111827',

    // Blues
    blue100: '#DBEAFE',
    blue200: '#BFDBFE',
    blue300: '#93C5FD',
    blue400: '#60A5FA',
    blue500: '#3B82F6',
    blue600: '#2563EB',
    blue700: '#1D4ED8',
    blue800: '#1E40AF',
    blue900: '#1E3A8A',
  },
  space: {
    'none': '0',
    'xs': '4px',
    'sm': '8px',
    'md': '16px',
    'lg': '24px',
    'xl': '32px',
  },
  fontSizes: {
    'xs': '12px',
    'sm': '14px',
    'md': '16px',
    'lg': '18px',
    'xl': '24px',
  },
  fontWeights: {
    'regular': '400',
    'medium': '500',
    'bold': '700',
  },
  radius: {
    'sm': '4px',
    'md': '8px',
    'lg': '16px',
    'full': '9999px',
  }
});
