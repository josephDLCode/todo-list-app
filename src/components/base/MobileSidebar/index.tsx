import { useLocation } from 'react-router-dom'

import {
  StyledMobileSidebar,
  StyledMobileSidebarItemContainer
} from './mobile-sidebar.style'
import { LayoutIcon } from '../../../icons/LayoutIcon'
import { MobileSidebarItem } from './MobileSidebarItem'
import { LayoutTopLineIcon } from '../../../icons/LayoutTopLineIcon'
import { AddCircleFillIcon } from '../../../icons/AddCircleFillIcon'

export const MobileSidebar = () => {
  const { pathname } = useLocation()

  return (
    <StyledMobileSidebar>
      <StyledMobileSidebarItemContainer>
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
      </StyledMobileSidebarItemContainer>
    </StyledMobileSidebar>
  )
}
