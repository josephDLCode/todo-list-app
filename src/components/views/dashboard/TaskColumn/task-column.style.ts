import styled from 'styled-components'

export const StyledTaskColumn = styled.div`
  height: 100%;
  overflow: hidden;
`

export const StyledTaskColumnBody = styled.div`
  height: calc(100% - 32px);
  overflow-y: auto;
`

export const StyledTaskColumnTitle = styled.h5`
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.75px;
  color: ${({ theme }) => theme.colors.neutral[1]};
`
