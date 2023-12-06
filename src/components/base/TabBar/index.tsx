import { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { TabBarItem } from './TabBarItem'
import { LayoutIcon } from '../../../icons/LayoutIcon'
import { ModalContext } from '../../../contexts/ModalContext'
import { LayoutTopLineIcon } from '../../../icons/LayoutTopLineIcon'
import { AddCircleFillIcon } from '../../../icons/AddCircleFillIcon'
import { StyledTabBar, StyledTabBarItemContainer } from './tabbar.style'

export const TabBar = () => {
  const { pathname } = useLocation()
  const { setOpenModal } = useContext(ModalContext)

  return (
    <StyledTabBar>
      <StyledTabBarItemContainer>
        <TabBarItem
          title="Dashboard"
          icon={<LayoutIcon />}
          link="/"
          $isSelected={pathname === '/'}
        />
        <TabBarItem
          title="Add Project"
          icon={<AddCircleFillIcon />}
          onClick={() => setOpenModal(true)}
        />
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
