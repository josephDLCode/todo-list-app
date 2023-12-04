import { useLocation } from 'react-router-dom'

import { TabBarItem } from './MobileTabBarItem'
import { LayoutIcon } from '../../../icons/LayoutIcon'
import { LayoutTopLineIcon } from '../../../icons/LayoutTopLineIcon'
import { AddCircleFillIcon } from '../../../icons/AddCircleFillIcon'
import { StyledTabBar, StyledTabBarItemContainer } from './tabbar.style'

export const TabBar = () => {
  const { pathname } = useLocation()

  return (
    <StyledTabBar>
      <StyledTabBarItemContainer>
        <TabBarItem
          title="Dashboard"
          icon={<LayoutIcon />}
          link="/"
          $isSelected={pathname === '/'}
        />
        <TabBarItem title="Add Project" icon={<AddCircleFillIcon />} link="/" />
        <TabBarItem
          title="My Task"
          icon={<LayoutTopLineIcon />}
          link="/mytask"
          $isSelected={pathname === '/mytask'}
        />
      </StyledTabBarItemContainer>
    </StyledTabBar>
  )
}
