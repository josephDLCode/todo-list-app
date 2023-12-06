import {
  StyledTaskModal,
  StyledTaskModalBody,
  StyledTaskModalFooter,
  StyledTaskModalHeader,
  StyledTaskModalBadgeList
} from './task-modal.style'
import { Badge } from '../../uis/Badge'
import { Modal } from '../../uis/Modal'
import { Button } from '../../uis/Button'
import { UserFillIcon } from '../../../icons/UserFillIcon'
import { PriceTagFillIcon } from '../../../icons/PriceTagFillIcon'
import { IncreaseDecreaseIcon } from '../../../icons/IncreaseDecreaseIcon'
import { CalendarCheckLineIcon } from '../../../icons/CalendarCheckLineIcon'
import { IconButton } from '../../uis/IconButton'

export const TaskModal: React.FC<TaskModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} width={578}>
      <StyledTaskModal>
        <StyledTaskModalHeader>
          <input type="text" placeholder="Slack" />
        </StyledTaskModalHeader>
        <StyledTaskModalBody>
          <StyledTaskModalBadgeList>
            <IconButton>
              <Badge title="Estimate" icon={<IncreaseDecreaseIcon />} />
            </IconButton>
            <IconButton>
              <Badge title="Assigne" icon={<UserFillIcon />} />
            </IconButton>
            <IconButton>
              <Badge title="Label" icon={<PriceTagFillIcon />} />
            </IconButton>
            <IconButton>
              <Badge title="Due Date" icon={<CalendarCheckLineIcon />} />
            </IconButton>
          </StyledTaskModalBadgeList>
        </StyledTaskModalBody>
        <StyledTaskModalFooter>
          <Button color="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button>Create</Button>
        </StyledTaskModalFooter>
      </StyledTaskModal>
    </Modal>
  )
}
