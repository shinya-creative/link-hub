import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  width: '100%',
  maxWidth: '800px',
  marginTop: vars.space.xl,
});

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const loaderContainer = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: vars.space.xl,
});

export const loader = style({
  border: `4px solid ${vars.colors.secondary}`,
  borderTop: `4px solid ${vars.colors.primary}`,
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  animation: `${spin} 1s linear infinite`,
});

export const emptyMessage = style({
  color: vars.colors.font,
  textAlign: 'center',
  marginTop: vars.space.xl,
});
