import styled from 'styled-components'

export const StyledConfirmModal = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
`

export const StyledConfirmModalBody = styled.div`
  h3 {
    font-size: clamp(1.2rem, 2vw, 2rem);
    font-weight: 600;
    text-align: center;
    text-wrap: balance;
    color: ${({ theme }) => theme.colors.neutral[1]};
  }
`

export const StyledConfirmModalFooter = styled.footer`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`
