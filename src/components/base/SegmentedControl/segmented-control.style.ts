import styled from 'styled-components'

export const StyledSegmentedControl = styled.ul`
  background-color: ${({ theme }) => theme.colors.neutral[4]};
  border-radius: 10px;
  margin-top: 16px;
  margin-right: 23px;
  margin-left: 23px;
  padding: 4px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const StyledSegmentedItem = styled.li<StyledSegmentedItemProps>`
  border-radius: 8px;
  padding: 9.5px 24px;
  font-size: 13px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 1px;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[1]};
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.neutral[2] : 'transparent'};
`
