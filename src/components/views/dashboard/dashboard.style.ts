import styled from 'styled-components'

export const StyledDashboard = styled.div`
  margin-top: 16px;
  // background-color: lightgray;
  height: calc(100% - 154px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const StyledDashboardColumn = styled.div`
  height: 100%;
  overflow: hidden;

  h5 {
    font-size: 18px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0.75px;
    color: ${({ theme }) => theme.colors.neutral[1]};
  }
`

export const StyledTaskContainer = styled.div`
  height: calc(100% - 32px);
  overflow-y: auto;
`
