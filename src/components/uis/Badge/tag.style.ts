import styled, { css } from 'styled-components'

import { getBadgeBackground, getBadgeColor } from '../../../utils/tag.util'

export const StyledBadge = styled('div')<Omit<BadgeProps, 'title'>>`
  ${({ theme, $style, $type }) => css`
    width: fit-content;
    height: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 4px 16px;
    border-radius: 4px;
    cursor: default;
    color: ${getBadgeColor(theme, $type)};
    background-color: ${$style === 'solid'
      ? getBadgeBackground(theme, $type)
      : 'transparent'};
    border: ${$style === 'outline' &&
    `1px solid ${getBadgeColor(theme, $type)}`};

    span {
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.75px;
      text-transform: uppercase;
    }

    svg {
      font-size: 24px;
    }
  `}
`
