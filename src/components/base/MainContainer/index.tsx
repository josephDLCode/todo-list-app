import { useLocation, useNavigate } from 'react-router-dom'

import { TopBar } from '../TopBar'
import { SearchBar } from '../SearchBar'
import { TopNavBar } from '../TopNavBar'
import { SegmentedControl } from '../SegmentedControl'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { StyledMainContainer } from './main-container.styles'
// import { useTask } from '../../../hooks/useTask'

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  // const { tasks } = useTask()

  return (
    <StyledMainContainer>
      {isDesktop ? <SearchBar /> : <TopNavBar />}
      {isDesktop ? (
        <TopBar navigate={navigate} pathname={pathname} />
      ) : (
        <SegmentedControl navigate={navigate} pathname={pathname} />
      )}
      {children}
    </StyledMainContainer>
  )
}
