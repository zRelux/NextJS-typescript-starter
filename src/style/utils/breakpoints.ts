import { css, DefaultTheme, FlattenInterpolation, ThemedStyledProps } from 'styled-components';

const breakpoints = {
  xs: 0,
  sm: 476,
  md: 700,
  lg: 1024,
  xl: 1181
};

export default breakpoints;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const query = (size: number) => (style: FlattenInterpolation<ThemedStyledProps<any, DefaultTheme>>) =>
  css`
    @media (min-width: ${size / 16}em) {
      ${style};
    }
  `;

export const fromExtraSmall = query(breakpoints.xs);

export const fromSmall = query(breakpoints.sm);

export const fromMedium = query(breakpoints.md);

export const fromLarge = query(breakpoints.lg);

export const fromExtraLarge = query(breakpoints.xl);

export const fromCustom = (size: number) => query(size);

export const fromSiteMaxWidth = (style: FlattenInterpolation<ThemedStyledProps<unknown, DefaultTheme>>) => css`
  @media (min-width: ${breakpoints.xl}px) {
    ${style};
  }
`;
