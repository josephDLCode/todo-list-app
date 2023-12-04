import { StyledDashboardColumn } from './dashboard.style'

export const DashboardColumn = ({
  children
}: {
  children: React.ReactNode
}) => {
  return <StyledDashboardColumn>{children}</StyledDashboardColumn>
}
