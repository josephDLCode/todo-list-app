import styled from 'styled-components'

export const StyledSidebar = styled.aside`
  background-color: ${({ theme }) => theme.colors.neutral[4]};
  border-radius: 24px;
`

export const StyledSidebarHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 44px;
`

export const StyledSidebarItemContainer = styled.ul`
  height: auto;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const StyledSidebarItem = styled.li<StyledSidebarItemProps>`
  width: 100%;
  height: 56px;
  display: flex;
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary[4] : theme.colors.neutral[2]};
  background: ${({ $isSelected }) =>
    $isSelected &&
    'linear-gradient(90deg, rgba(186, 37, 37, 0) 0%,rgba(210, 77, 77, 0.1) 100%)'};

  &:hover {
    color: ${({ theme }) => theme.colors.primary[4]};
  }

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 4px;
    background-color: ${({ theme, $isSelected }) =>
      $isSelected && theme.colors.primary[4]};
  }

  a {
    width: inherit;
    height: inherit;

    display: flex;
    gap: 16px;
    align-items: center;
    padding: 0 16px;

    svg {
      width: 24px;
      height: 24px;
    }

    span {
      font-size: 15px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.75px;
    }
  }
`
