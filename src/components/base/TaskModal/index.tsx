import { useState } from 'react'

import {
  StyledTaskModal,
  StyledTaskModalBody,
  StyledTaskModalFooter,
  StyledTaskModalHeader,
  StyledTaskModalBadgeList
} from './task-modal.style'
import {
  SELECTOR_ASSIGNEE_ITEMS,
  SELECTOR_ESTIMATE_ITEMS
} from '../../../constants/task-modal.constant'
import { Modal } from '../../uis/Modal'
import { Button } from '../../uis/Button'
import { Selector } from '../../uis/Selector'
import { UserFillIcon } from '../../../icons/UserFillIcon'
import { PriceTagFillIcon } from '../../../icons/PriceTagFillIcon'
import { IncreaseDecreaseIcon } from '../../../icons/IncreaseDecreaseIcon'
import { CalendarCheckLineIcon } from '../../../icons/CalendarCheckLineIcon'
import { Calendar } from '../../uis/Calendar'
import { formateTimeForCalendar } from '../../../utils/common.util'

export const TaskModal: React.FC<TaskModalProps> = ({ open, onClose }) => {
  const [estimate, setEstimate] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [assignee, setAssignee] = useState({
    icon: undefined as JSX.Element | undefined,
    title: ''
  })
  const [isOpenSelector, setIsOpenSelector] = useState<Record<string, boolean>>(
    {
      estimate: false,
      assignee: false,
      label: false,
      dueDate: false
    }
  )

  const findSelectedItem = (value: string, itemCons: SelectorItem[]) => {
    const valueFound = itemCons.find(item => item.value === value)
    return valueFound || ({} as SelectorItem)
  }

  const toggleSelector = (
    options: Record<string, boolean>,
    { key, value }: { key: string; value: boolean }
  ) => {
    Object.keys(options).forEach(optionKey => {
      if (key === optionKey) {
        options[optionKey] = !value
      } else {
        options[optionKey] = false
      }
    })

    setIsOpenSelector({ ...options })
  }

  return (
    <Modal open={open} onClose={onClose} width={578}>
      <StyledTaskModal>
        <StyledTaskModalHeader>
          <input type="text" placeholder="Slack" />
        </StyledTaskModalHeader>
        <StyledTaskModalBody>
          <StyledTaskModalBadgeList>
            <div>
              <Button
                color="secondary"
                onClick={() =>
                  toggleSelector(isOpenSelector, {
                    key: 'estimate',
                    value: isOpenSelector.estimate
                  })
                }
              >
                <IncreaseDecreaseIcon />
                {estimate || 'Estimate'}
              </Button>
              <Selector
                items={SELECTOR_ESTIMATE_ITEMS}
                title="Estimate"
                openSelector={isOpenSelector.estimate}
                onSelect={value => {
                  const estimateValue = findSelectedItem(
                    value,
                    SELECTOR_ESTIMATE_ITEMS
                  )
                  setEstimate(estimateValue.label.text || '')
                  setIsOpenSelector({ ...isOpenSelector, estimate: false })
                }}
              />
            </div>
            <div>
              <Button
                color="secondary"
                onClick={() =>
                  toggleSelector(isOpenSelector, {
                    key: 'assignee',
                    value: isOpenSelector.assignee
                  })
                }
              >
                {assignee.icon || <UserFillIcon />}
                {assignee.title || 'Assigne'}
              </Button>
              <Selector
                items={SELECTOR_ASSIGNEE_ITEMS}
                title="Assign To..."
                openSelector={isOpenSelector.assignee}
                onSelect={value => {
                  const assigneeValue = findSelectedItem(
                    value,
                    SELECTOR_ASSIGNEE_ITEMS
                  )
                  setAssignee({
                    icon: assigneeValue.label?.icon || undefined,
                    title: assigneeValue.label.text || ''
                  })
                  setIsOpenSelector({ ...isOpenSelector, assignee: false })
                }}
              />
            </div>
            <div>
              <Button color="secondary">
                <PriceTagFillIcon />
                Label
              </Button>
            </div>
            <div>
              <Button
                color="secondary"
                onClick={() =>
                  toggleSelector(isOpenSelector, {
                    key: 'dueDate',
                    value: isOpenSelector.dueDate
                  })
                }
              >
                <CalendarCheckLineIcon />
                Due Date
              </Button>
              {isOpenSelector.dueDate && (
                <Calendar
                  value={dueDate}
                  onChange={(value: any) => {
                    setDueDate(value as string)
                    setIsOpenSelector({ ...isOpenSelector, dueDate: false })
                  }}
                  calendarType="gregory"
                />
              )}
            </div>
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
