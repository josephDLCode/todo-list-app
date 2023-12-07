import styled, { css } from 'styled-components'

export const StyledTaskCard = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[4]};
  width: 100%;
  height: 208px;
  padding: 16px;
  display: grid;
  grid-template-rows: 32px 1fr 32px;
  grid-gap: 16px;
  margin-top: 16px;
  position: relative;
`

export const StyledTaskCardHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      font-size: 24px;
      color: ${theme.colors.neutral[2]};
    }
  `}
`

export const StyledTaskCardHeaderTitle = styled.h5`
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.75px;
  color: ${({ theme }) => theme.colors.neutral[1]};
`

export const StyledTaskCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const StyledTaskCardBodyFirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .points {
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.75px;
    color: ${({ theme }) => theme.colors.neutral[1]};
  }
`

export const StyledTaskCardBodySecondRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const StyledTaskCardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledTaskCardFooterIconsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.colors.neutral[1]};
`

export const StyledTaskCardFooterIcons = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  span {
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.75px;
  }
`

export const StyledCardOptions = styled.ul`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[2]};
  background-color: ${({ theme }) => theme.colors.neutral[3]};
  padding: 8px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 8px;
  z-index: 1;
  color: ${({ theme }) => theme.colors.neutral[1]};

  .option-item {
    cursor: pointer;
    padding: 4px 16px;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      border-radius: 8px;
      background-color: ${({ theme }) => theme.colors.neutral[2]};
    }

    & > .option-icon {
      font-size: 24px;
      color: ${({ theme }) => theme.colors.neutral[1]};
    }

    & > span {
      font-size: 15px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.75px;
    }
  }
`
