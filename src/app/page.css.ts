import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: `${vars.space.lg} ${vars.space.md}`,
  minHeight: '100vh',
  backgroundColor: vars.colors.background,
});

export const title = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.strongFont,
  marginBottom: vars.space.lg,
});
