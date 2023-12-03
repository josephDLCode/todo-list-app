import styled from 'styled-components'

export const StyledMobileSidebar = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 79px;
  background-color: ${({ theme }) => theme.colors.neutral[4]};
`

export const StyledMobileSidebarItemContainer = styled.ul`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`

export const StyledMobileSidebarItem = styled.li<StyledSidebarItemProps>`
  width: 100%;
  height: 100%;
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary[4] : theme.colors.neutral[2]};

  &:hover {
    color: ${({ theme }) => theme.colors.primary[4]};
  }

  a {
    width: inherit;
    height: inherit;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;

    svg {
      width: 24px;
      height: 24px;
    }

    span {
      font-size: 13px;
      font-weight: 400;
      line-height: 13px;
      letter-spacing: 1px;
    }
  }
`
