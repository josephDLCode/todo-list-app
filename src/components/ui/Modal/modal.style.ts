import styled from 'styled-components'

export const StyledModal = styled.div`
  position: fixed;
  z-index: 1300;
  inset: 0;
`

export const StyledModalOverlay = styled.div<{ open: boolean }>`
  margin: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  -webkit-tap-highlight-color: transparent;
  z-index: -1;
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`

export const StyledModalContent = styled.div<{ width?: number | string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) =>
    width ? (typeof width === 'number' ? `${width}px` : width) : '500px'};
  max-width: 90%;
  background-color: ${({ theme }) => theme.colors.neutral[3]};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
    rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
  border-radius: 8px;
  padding: 16px;
`
