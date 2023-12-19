import styled from 'styled-components'

export const StyledSelector = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[3]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[2]};
  padding: 8px 0;
  position: absolute;
  margin-top: 8px;
  z-index: 1;
`

export const StyledSelectorTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.75px;
  color: ${({ theme }) => theme.colors.neutral[2]};
  cursor: default;
  padding: 0 16px;
`

export const StyledSelectorListContainer = styled.ul``

export const StyledSelectorListItem = styled.li`
  padding-top: 4px;
  padding-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.neutral[1]};
  padding: 4px 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[2]};
    border-radius: 4px;
    cursor: pointer;
  }

  & > span {
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.75px;
    text-wrap: nowrap;
  }

  & > svg {
    font-size: 24px;
  }
`
