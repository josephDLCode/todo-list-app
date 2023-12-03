import { useLocation } from 'react-router-dom'

import {
  StyledSidebar,
  StyledSidebarHeader,
  StyledSidebarItemContainer
} from './sidebar.style'
import { SidebarItem } from './SidebarItem'
import { ListIcon } from '../../../icons/ListIcon'
import { LayoutIcon } from '../../../icons/LayoutIcon'

export const Sidebar = () => {
  const { pathname } = useLocation()

  return (
    <StyledSidebar>
      <StyledSidebarHeader>
        <img src="/logo-mark.svg" alt="logo-mark" width={40} height={40} />
      </StyledSidebarHeader>
      <StyledSidebarItemContainer>
        <SidebarItem
          title="Dashboard"
          icon={<LayoutIcon />}
          link="/"
          $isSelected={pathname === '/'}
        />
        <SidebarItem
          title="My Task"
          icon={<ListIcon />}
          link="/mytask"
          $isSelected={pathname === '/mytask'}
        />
      </StyledSidebarItemContainer>
    </StyledSidebar>
  )
}
