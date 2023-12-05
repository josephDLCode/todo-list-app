import styled from 'styled-components'

export const StyledTaskList = styled.div`
  margin-top: 16px;
  height: calc(100% - 154px);
  display: grid;
  grid-template-columns: 100% 100% 100%;
  overflow-x: auto;
  grid-gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    grid-template-columns: 90% 90% 90%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
    grid-template-columns: 60% 60% 60%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 43% 43% 43%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 50% 50% 50%;
    grid-gap: 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
