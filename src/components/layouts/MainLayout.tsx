import styled from 'styled-components'

import { TabBar } from '../base/TabBar'
import { Sidebar } from '../base/Sidebar'
import { MainContainer } from '../base/MainContainer'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <StyledMainLayout $isDesktop={isDesktop}>
      {isDesktop ? <Sidebar /> : <TabBar />}
      <MainContainer>{children}</MainContainer>
    </StyledMainLayout>
  )
}

const StyledMainLayout = styled.div<{ $isDesktop: boolean }>`
  display: grid;
  grid-template-columns: ${({ $isDesktop }) =>
    $isDesktop ? '232px 1fr' : '1fr'};
  grid-template-rows: calc(100vh - 64px);
  gap: 32px;
  height: 100vh;
  width: 100vw;
  padding: ${({ $isDesktop }) => ($isDesktop ? '32px' : '8px 16px')};
`
