import { forwardRef, useContext } from 'react'

import {
  StyledTaskCard,
  StyledTaskCardBody,
  StyledTaskCardHeader,
  StyledTaskCardFooter,
  StyledTaskCardHeaderTitle,
  StyledTaskCardFooterIcons,
  StyledTaskCardBodyFirstRow,
  StyledTaskCardFooterIconsList,
  StyledTaskCardBodySecondRow,
  StyledCardOptions
} from './task-card.style'
import { Badge } from '../../ui/Badge'
import { Avatar } from '../../ui/Avatar'
import { IconButton } from '../../ui/IconButton'
import { ChatIcon } from '../../../icons/ChatIcon'
import { FileIcon } from '../../../icons/FileIcon'
import { TrashIcon } from '../../../icons/TrashIcon'
import { compareTime } from '../../../utils/common.util'
import { MoreFillIcon } from '../../../icons/MoreFillIcon'
import { NodeTreeIcon } from '../../../icons/NodeTreeIcon'
import { AlarmLineIcon } from '../../../icons/AlarmLineIcon'
import { PencilLineIcon } from '../../../icons/PencilLineIcon'
import { getBadgeTypeByTag, getTaskPoints } from '../../../utils/task-card.util'
import { ModalContext } from '../../../contexts/ModalContext'

export const TaskCard = forwardRef<HTMLDivElement, TaskCardProps>(
  (
    {
      id,
      name,
      tags,
      status,
      dueDate,
      assignee,
      isOpenOptions,
      pointEstimate,
      handleOptions,
      ...props
    },
    ref
  ) => {
    const time = compareTime(dueDate)
    const { __typename, ...propsRest } = props
    const { setOpenDeleteModal, setTask } = useContext(ModalContext)

    const handleDelete = () => {
      setOpenDeleteModal(true)
      setTask({ id, name })
    }

    return (
      <StyledTaskCard ref={ref} {...propsRest}>
        <StyledTaskCardHeader>
          <StyledTaskCardHeaderTitle>{name}</StyledTaskCardHeaderTitle>
          <IconButton onClick={() => handleOptions && handleOptions(id)}>
            <MoreFillIcon />
          </IconButton>
          {isOpenOptions && (
            <StyledCardOptions>
              <li className="option-item">
                <PencilLineIcon className="option-icon" />
                <span>Edit</span>
              </li>
              <li className="option-item" onClick={handleDelete}>
                <TrashIcon className="option-icon" />
                <span>Delete</span>
              </li>
            </StyledCardOptions>
          )}
        </StyledTaskCardHeader>
        <StyledTaskCardBody>
          <StyledTaskCardBodyFirstRow>
            <span className="points">
              {getTaskPoints(pointEstimate)} Points
            </span>
            <Badge
              title={time}
              $type={time === 'YESTERDAY' ? 'red' : 'general'}
              icon={<AlarmLineIcon />}
            />
          </StyledTaskCardBodyFirstRow>
          <StyledTaskCardBodySecondRow>
            {tags?.map((tag, index) => (
              <Badge key={index} title={tag} $type={getBadgeTypeByTag(tag)} />
            ))}
          </StyledTaskCardBodySecondRow>
        </StyledTaskCardBody>
        <StyledTaskCardFooter>
          <Avatar
            src={`https://unavatar.io/gravatar/${assignee?.email}`}
            alt={assignee?.fullName}
            $size="sm"
          />
          <StyledTaskCardFooterIconsList>
            <StyledTaskCardFooterIcons>
              <FileIcon />
            </StyledTaskCardFooterIcons>
            <StyledTaskCardFooterIcons>
              <span>5</span>
              <NodeTreeIcon />
            </StyledTaskCardFooterIcons>
            <StyledTaskCardFooterIcons>
              <span>3</span>
              <ChatIcon />
            </StyledTaskCardFooterIcons>
          </StyledTaskCardFooterIconsList>
        </StyledTaskCardFooter>
      </StyledTaskCard>
    )
  }
)
