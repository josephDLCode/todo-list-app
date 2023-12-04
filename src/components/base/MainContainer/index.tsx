import { SearchBar } from '../SearchBar'
import { TopNavBar } from '../TopNavBar'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { StyledMainContainer } from './main-container.styles'

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <StyledMainContainer>
      {isDesktop ? <SearchBar /> : <TopNavBar />}
      {children}
    </StyledMainContainer>
  )
}
