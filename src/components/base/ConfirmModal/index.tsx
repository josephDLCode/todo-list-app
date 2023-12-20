import { Button } from '../../ui/Button'
import { Modal } from '../../ui/Modal'
import {
  StyledConfirmModal,
  StyledConfirmModalBody,
  StyledConfirmModalFooter
} from './confir-modal.style'

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  onClose,
  onConfirm,
  isDisabled
}) => {
  return (
    <Modal open={open} onClose={onClose} width={578}>
      <StyledConfirmModal>
        <StyledConfirmModalBody>
          <h3>
            Are you sure you want to delete this task? This action cannot be
            undone.
          </h3>
        </StyledConfirmModalBody>
        <StyledConfirmModalFooter>
          <Button color="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onConfirm} disabled={isDisabled}>
            Delete
          </Button>
        </StyledConfirmModalFooter>
      </StyledConfirmModal>
    </Modal>
  )
}
