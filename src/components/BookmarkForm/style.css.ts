import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
  width: '100%',
  maxWidth: '500px',
  margin: `${vars.space.xl} auto`,
  padding: vars.space.lg,
  backgroundColor: vars.colors.surface,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.colors.border}`,
});

export const formGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
});

export const label = style({
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.strongFont,
  fontSize: vars.fontSizes.sm,
});

const inputBase = style({
  width: '100%',
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.colors.border}`,
  backgroundColor: vars.colors.background,
  fontSize: vars.fontSizes.md,
  color: vars.colors.strongFont,
  '::placeholder': {
    color: vars.colors.thinFont,
  },
  ':focus': {
    outline: 'none',
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 2px ${vars.colors.secondary}`,
  },
});

export const input = style([inputBase]);

export const textarea = style([
  inputBase,
  {
    minHeight: '120px',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
]);

export const submitButton = style({
  alignSelf: 'flex-end',
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.colors.primary,
  color: 'white',
  border: 'none',
  borderRadius: vars.radius.md,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.bold,
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',
  ':hover': {
    backgroundColor: vars.colors.hover,
  },
});
