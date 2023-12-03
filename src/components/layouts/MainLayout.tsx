import styled from 'styled-components'

import { Sidebar } from '../base/Sidebar'
import { MainContainer } from '../base/MainContainer'
import { MobileSidebar } from '../base/MobileSidebar'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <StyledMainLayout $isDesktop={isDesktop}>
      {isDesktop ? <Sidebar /> : <MobileSidebar />}
      <MainContainer>{children}</MainContainer>
    </StyledMainLayout>
  )
}

const StyledMainLayout = styled.div<{ $isDesktop: boolean }>`
  display: grid;
  grid-template-columns: ${({ $isDesktop }) =>
    $isDesktop ? '232px 1fr' : '1fr'};
  gap: 32px;
  height: 100vh;
  width: 100vw;
  padding: 32px;
`
