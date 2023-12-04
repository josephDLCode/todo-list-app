import styled from 'styled-components'

import {
  getBtnBackground,
  getBtnBackgroundHover,
  getBtnBackgroundActive,
  getBtnBackgroundDisable
} from '../../../utils/button.util'

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, color }) => getBtnBackground(theme, color)};
  border-radius: 8px;
  padding: 8px;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.75px;
  color: ${({ theme }) => theme.colors.neutral[1]};
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${({ theme, color }) =>
      getBtnBackgroundHover(theme, color)};
  }

  &:active {
    background-color: ${({ theme, color }) =>
      getBtnBackgroundActive(theme, color)};
  }

  &:disabled {
    background-color: ${({ theme, color }) =>
      getBtnBackgroundDisable(theme, color)};
    cursor: not-allowed;
    color: ${({ theme, color }) =>
      color === 'secondary' && theme.colors.neutral[2]};
  }
`
