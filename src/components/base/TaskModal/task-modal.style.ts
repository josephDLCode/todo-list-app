import styled from 'styled-components'

export const StyledTaskModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const StyledTaskModalHeader = styled.header`
  color: ${({ theme }) => theme.colors.neutral[1]};
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.75px;

  input {
    width: 122px;
    background-color: transparent;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.neutral[2]};
    }
  }
`

export const StyledTaskModalBody = styled.div``

export const StyledTaskModalFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
`

export const StyledTaskModalBadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`
