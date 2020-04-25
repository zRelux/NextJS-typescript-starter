import { css, FlattenSimpleInterpolation } from 'styled-components';

const baseline = 10;

// Mixin to convert a font-size from px to rem
// Uses a baseline of 10
// @params {fontsize} - Default to 16px, the value of the fontsize in px we want to convert to rem
// @params {linesize} - Default to 22px, the value of the lineheight in px we want to convert to rem
export function fontSize(fontsize = 16, linesize = 22) {
  const fontRem = fontsize / baseline;
  const lineRem = linesize / baseline;

  return css`
    font-size: ${fontsize}px;
    font-size: ${fontRem}rem;
    line-height: ${linesize}px;
    line-height: ${lineRem}rem;
  `;
}

// Mixin clearfix
// @usage - ${clearfix}; - To clear the space around an element
export function clearfix() {
  return css`
    &::after {
      clear: both;
      content: '';
      display: table;
    }
  `;
}

// Mixin font to apply a default style to the font

// @params {fontName} - The font required and the fallbacks as Arial and sans-serif
// @params {style} - The font-style to be applied to the font selected - default to normal
// @params {weight} - The font-weight to be applied to the font selected - Default to normal

// @usage - @include font($pembroke, italic, bold) - To include the Pembroke font, with a font-style italic and a font-weight bold
export function font(
  fontName: string,
  style = 'normal',
  weight: number | string = 'normal'
): FlattenSimpleInterpolation {
  switch (fontName) {
    case 'Pembroke Light':
      return font('Pembroke', 'normal', 300);

    case 'Pembroke Regular':
      return font('Pembroke', 'normal', 400);

    case 'Pembroke Bold':
    case 'Pembroke Medium':
      return font('Pembroke', 'normal', 700);

    case 'Aspect Light':
      return font('Aspect', 'normal', 300);

    case 'Aspect Regular':
      return font('Aspect', 'normal', 400);

    case 'Aspect Heavy':
      return font('Aspect', 'normal', 700);
  }

  return css`
    font-family: ${fontName}, Arial, sans-serif;
    font-style: ${style};
    font-weight: ${weight};
  `;
}
