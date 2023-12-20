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
import { Modal } from '../../ui/Modal'
import { Button } from '../../ui/Button'
import { Selector } from '../../ui/Selector'
import { useTask } from '../../../hooks/useTask'
import { formateTimeForCalendar } from '../../../utils/common.util'

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
            <Selector
              optionListTitle="Estimate"
              items={SELECTOR_ESTIMATE_ITEMS}
            />
            <Selector
              optionListTitle="Assignee"
              items={SELECTOR_ASSIGNEE_ITEMS}
            />
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
