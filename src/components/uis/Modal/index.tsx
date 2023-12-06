import { useEffect, useState } from 'react'

import {
  StyledModal,
  StyledModalOverlay,
  StyledModalContent
} from './modal.style'

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  width
}) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setShowModal(false)
      }, 300)
    } else {
      setTimeout(() => {
        setShowModal(true)
      }, 300)
    }
  }, [open])

  if (showModal)
    return (
      <StyledModal>
        <StyledModalOverlay open={open} onClick={onClose}>
          <StyledModalContent onClick={e => e.stopPropagation()} width={width}>
            {children}
          </StyledModalContent>
        </StyledModalOverlay>
      </StyledModal>
    )

  return (
    <>
      {open && (
        <StyledModal>
          <StyledModalOverlay open={showModal} onClick={onClose} />
        </StyledModal>
      )}
    </>
  )
}
