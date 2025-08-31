import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const card = style({
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  marginBottom: vars.space.md,
  boxShadow: `0 4px 4px ${vars.colors.shadow}`,
  transition: 'box-shadow 0.2s ease-in-out',
  ':hover': {
    boxShadow: `0 4px 8px ${vars.colors.shadow}`,
  },
});

export const content = style({
  padding: vars.space.md,
});

export const titleLink = style({
  textDecoration: 'none',
  wordBreak: 'break-all',
});

export const title = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.strongFont,
  margin: 0,
  ':hover': {
    color: vars.colors.primary,
  }
});

export const description = style({
  marginTop: vars.space.sm,
  color: vars.colors.font,
  fontSize: vars.fontSizes.sm,
});

export const tagsContainer = style({
  marginTop: vars.space.sm,
});

export const tag = style({
  display: 'inline-block',
  backgroundColor: vars.colors.secondary,
  color: vars.colors.primary,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.full,
  fontSize: vars.fontSizes.xs,
  marginRight: vars.space.xs,
  marginBottom: vars.space.xs,
  fontWeight: vars.fontWeights.medium,
});

export const actions = style({
  padding: `0 ${vars.space.md} ${vars.space.md}`,
});

export const deleteButton = style({
  backgroundColor: vars.colors.danger,
  color: vars.colors.surface,
  border: 'none',
  borderRadius: vars.radii.sm,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  fontSize: vars.fontSizes.sm,
  cursor: 'pointer',
  transition: 'opacity 0.2s ease-in-out',
  ':hover': {
    opacity: 0.8,
  }
});
