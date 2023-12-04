import { DashboardColumn } from './DashboardColumn'
import { StyledDashboard, StyledTaskContainer } from './dashboard.style'

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <DashboardColumn>
        <h5>Working (03)</h5>
        <StyledTaskContainer>1</StyledTaskContainer>
      </DashboardColumn>
      <DashboardColumn>
        <h5>In Progress (03)</h5>
        <StyledTaskContainer>2</StyledTaskContainer>
      </DashboardColumn>
      <DashboardColumn>
        <h5>Completed (03)</h5>
        <StyledTaskContainer>3</StyledTaskContainer>
      </DashboardColumn>
    </StyledDashboard>
  )
}
