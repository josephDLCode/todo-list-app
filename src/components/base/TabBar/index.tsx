import { useLocation } from 'react-router-dom'

import { LayoutIcon } from '../../../icons/LayoutIcon'
import { MobileSidebarItem } from './MobileTabBarItem'
import { LayoutTopLineIcon } from '../../../icons/LayoutTopLineIcon'
import { AddCircleFillIcon } from '../../../icons/AddCircleFillIcon'
import { StyledTabBar, StyledTabBarItemContainer } from './tabbar.style'

export const TabBar = () => {
  const { pathname } = useLocation()

  return (
    <StyledTabBar>
      <StyledTabBarItemContainer>
        <MobileSidebarItem
          title="Dashboard"
          icon={<LayoutIcon />}
          link="/"
          $isSelected={pathname === '/'}
        />
        <MobileSidebarItem
          title="Add Project"
          icon={<AddCircleFillIcon />}
          link="/"
        />
        <MobileSidebarItem
          title="My Task"
          icon={<LayoutTopLineIcon />}
          link="/mytask"
          $isSelected={pathname === '/mytask'}
        />
      </StyledTabBarItemContainer>
    </StyledTabBar>
  )
}
