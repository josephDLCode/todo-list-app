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
  SELECTOR_TASK_TAG_ITEMS
} from '../../../constants/task-modal.constant'
import { Modal } from '../../ui/Modal'
import { Button } from '../../ui/Button'
import { Selector } from '../../ui/Selector'
import { useTask } from '../../../hooks/useTask'
import { UserFillIcon } from '../../../icons/UserFillIcon'
import { PriceTagFillIcon } from '../../../icons/PriceTagFillIcon'
import { formateTimeForCalendar } from '../../../utils/common.util'
import { IncreaseDecreaseIcon } from '../../../icons/IncreaseDecreaseIcon'

export const TaskModal: React.FC<TaskModalProps> = ({ open, onClose }) => {
  const [tags, setTags] = useState({
    name: '',
    pointEstimate: '',
    tags: [] as string[],
    assigneeId: ''
  })

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
    // ...code
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
  }

  const submitTask = () => {
    /* createTaskFn({
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
    }) */
    console.log('submitTask', tags)
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
            value={tags.name}
            onChange={({ target: { value } }) =>
              setTags({ ...tags, name: value })
            }
          />
        </StyledTaskModalHeader>
        <StyledTaskModalBody>
          <StyledTaskModalBadgeList>
            <Selector
              labelTitle="Estimate"
              optionListTitle="Estimate"
              items={SELECTOR_ESTIMATE_ITEMS}
              selectedValue={tags.pointEstimate}
              labelIcon={<IncreaseDecreaseIcon />}
              onSelect={value =>
                setTags({ ...tags, pointEstimate: value as string })
              }
            />
            <Selector
              labelTitle="Assignee"
              labelIcon={<UserFillIcon />}
              optionListTitle="Assign To..."
              items={SELECTOR_ASSIGNEE_ITEMS}
              selectedValue={tags.assigneeId}
              onSelect={value =>
                setTags({ ...tags, assigneeId: value as string })
              }
            />
            <Selector
              isMulti
              labelTitle="Label"
              labelIcon={<PriceTagFillIcon />}
              optionListTitle="Tag Title"
              items={SELECTOR_TASK_TAG_ITEMS}
              selectedValue={tags.tags}
              onSelect={value => setTags({ ...tags, tags: value as string[] })}
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
