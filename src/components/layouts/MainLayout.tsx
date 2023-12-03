import styled from 'styled-components'
import { Sidebar } from '../base/Sidebar'
import { MainContainer } from '../base/MainContainer'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledMainLayout>
      <Sidebar />
      <MainContainer>{children}</MainContainer>
    </StyledMainLayout>
  )
}

const StyledMainLayout = styled.div`
  display: grid;
  grid-template-columns: 232px 1fr;
  gap: 32px;
  height: 100vh;
  width: 100vw;
  padding: 32px;
`
