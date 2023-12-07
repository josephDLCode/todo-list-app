import moment from 'moment'
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
  SELECTOR_ESTIMATE_ITEMS,
  SELECTOR_TASK_TAG_ITEMS,
  TASK_MODAL_STATUS
} from '../../../constants/task-modal.constant'
import { Modal } from '../../uis/Modal'
import { Button } from '../../uis/Button'
import { Selector } from '../../uis/Selector'
import { Calendar } from '../../uis/Calendar'
import { useTask } from '../../../hooks/useTask'
import { UserFillIcon } from '../../../icons/UserFillIcon'
import { PriceTagFillIcon } from '../../../icons/PriceTagFillIcon'
import { formateTimeForCalendar } from '../../../utils/common.util'
import { IncreaseDecreaseIcon } from '../../../icons/IncreaseDecreaseIcon'
import { CalendarCheckLineIcon } from '../../../icons/CalendarCheckLineIcon'

export const TaskModal: React.FC<TaskModalProps> = ({ open, onClose }) => {
  const [estimate, setEstimate] = useState({
    label: '',
    value: ''
  })
  const [dueDate, setDueDate] = useState('')
  const [label, setLabel] = useState<string[]>([])
  const [title, setTitle] = useState('')
  const [assignee, setAssignee] = useState({
    icon: undefined as JSX.Element | undefined,
    title: '',
    id: ''
  })
  const [showSelector, setShowSelector] = useState<any>(TASK_MODAL_STATUS)
  const {
    createTask: {
      createTaskFn,
      createTaskRes: { loading }
    }
  } = useTask()

  const findSelectedItem = (value: string, itemCons: SelectorItem[]) => {
    const valueFound = itemCons.find(item => item.value === value)
    return valueFound || ({} as SelectorItem)
  }

  const clearState = () => {
    setDueDate('')
    setLabel([])
    setTitle('')
    setAssignee({
      icon: undefined,
      title: '',
      id: ''
    })
    setEstimate({
      label: '',
      value: ''
    })
    setShowSelector(TASK_MODAL_STATUS)
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

    setShowSelector({ ...options })
  }

  const submitTask = () => {
    createTaskFn({
      variables: {
        input: {
          name: title,
          status: 'TODO',
          pointEstimate: estimate.value,
          tags: label,
          dueDate: formateTimeForCalendar(dueDate as any),
          assigneeId: assignee.id
        }
      },
      onCompleted: () => {
        onClose && onClose()
        clearState()
      }
    })
  }

  const handleClose = () => {
    onClose && onClose()
    clearState()
  }

  return (
    <Modal open={open} onClose={handleClose} width={578}>
      <StyledTaskModal>
        <StyledTaskModalHeader>
          <input
            type="text"
            placeholder="Slack"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          />
        </StyledTaskModalHeader>
        <StyledTaskModalBody>
          <StyledTaskModalBadgeList>
            <div>
              <Button
                color="secondary"
                onClick={() =>
                  toggleSelector(showSelector, {
                    key: 'estimate',
                    value: showSelector.estimate
                  })
                }
              >
                <IncreaseDecreaseIcon />
                {estimate.label || 'Estimate'}
              </Button>
              <Selector
                items={SELECTOR_ESTIMATE_ITEMS}
                title="Estimate"
                openSelector={showSelector.estimate}
                onSelect={value => {
                  const estimateValue = findSelectedItem(
                    value as string,
                    SELECTOR_ESTIMATE_ITEMS
                  )
                  setEstimate({
                    label: estimateValue.label?.text || '',
                    value: value as string
                  })
                  setShowSelector({ ...showSelector, estimate: false })
                }}
              />
            </div>
            <div>
              <Button
                color="secondary"
                onClick={() =>
                  toggleSelector(showSelector, {
                    key: 'assignee',
                    value: showSelector.assignee
                  })
                }
              >
                {assignee.icon || <UserFillIcon />}
                {assignee.title || 'Assigne'}
              </Button>
              <Selector
                items={SELECTOR_ASSIGNEE_ITEMS}
                title="Assign To..."
                openSelector={showSelector.assignee}
                onSelect={value => {
                  const assigneeValue = findSelectedItem(
                    value as string,
                    SELECTOR_ASSIGNEE_ITEMS
                  )
                  setAssignee({
                    icon: assigneeValue.label?.icon || undefined,
                    title: assigneeValue.label.text || '',
                    id: value as string
                  })
                  setShowSelector({ ...showSelector, assignee: false })
                }}
              />
            </div>
            <div>
              <Button
                color="secondary"
                onClick={() =>
                  toggleSelector(showSelector, {
                    key: 'label',
                    value: showSelector.label
                  })
                }
              >
                <PriceTagFillIcon />
                {label.length ? label.join(', ') : 'Label'}
              </Button>
              <Selector
                isMulti
                openSelector={showSelector.label}
                title="Tag Title"
                items={SELECTOR_TASK_TAG_ITEMS}
                onSelect={value => {
                  setLabel(value as string[])
                  setShowSelector({ ...showSelector, label: false })
                }}
              />
            </div>
            <div>
              <Button
                color="secondary"
                onClick={() =>
                  toggleSelector(showSelector, {
                    key: 'dueDate',
                    value: showSelector.dueDate
                  })
                }
              >
                <CalendarCheckLineIcon />
                {dueDate
                  ? moment(formateTimeForCalendar(dueDate as any)).format(
                      'MMM. DD YYYY'
                    )
                  : 'Due Date'}
              </Button>
              {showSelector.dueDate && (
                <Calendar
                  value={dueDate}
                  onChange={(value: any) => {
                    setDueDate(value as string)
                    setShowSelector({ ...showSelector, dueDate: false })
                  }}
                  calendarType="gregory"
                />
              )}
            </div>
          </StyledTaskModalBadgeList>
        </StyledTaskModalBody>
        <StyledTaskModalFooter>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={submitTask} disabled={loading}>
            Create
          </Button>
        </StyledTaskModalFooter>
      </StyledTaskModal>
    </Modal>
  )
}
