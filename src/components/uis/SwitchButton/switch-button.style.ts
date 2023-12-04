import styled from 'styled-components'

export const StyledSwitchButton = styled.button<SwitchButtonProps>`
  background-color: transparent;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.75px;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary[4] : theme.colors.neutral[1]};
  border: ${({ theme, isSelected }) =>
    isSelected && `1px solid ${theme.colors.primary[4]}`};

  svg {
    width: 24px;
    height: 24px;
  }
`
