import styled from 'styled-components'

export const StyledMobileHeaderIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.neutral[2]};
  }
`
