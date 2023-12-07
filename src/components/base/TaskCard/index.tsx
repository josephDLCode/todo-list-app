import { forwardRef } from 'react'

import {
  StyledTaskCard,
  StyledTaskCardBody,
  StyledTaskCardHeader,
  StyledTaskCardFooter,
  StyledTaskCardHeaderTitle,
  StyledTaskCardFooterIcons,
  StyledTaskCardBodyFirstRow,
  StyledTaskCardFooterIconsList,
  StyledTaskCardBodySecondRow
} from './task-card.style'
import { Badge } from '../../uis/Badge'
import { Avatar } from '../../uis/Avatar'
import { IconButton } from '../../uis/IconButton'
import { ChatIcon } from '../../../icons/ChatIcon'
import { FileIcon } from '../../../icons/FileIcon'
import { MoreFillIcon } from '../../../icons/MoreFillIcon'
import { NodeTreeIcon } from '../../../icons/NodeTreeIcon'
import { AlarmLineIcon } from '../../../icons/AlarmLineIcon'
import { getBadgeTypeByTag, getTaskPoints } from '../../../utils/task-card.util'
import { compareTime } from '../../../utils/common.util'

export const TaskCard = forwardRef<HTMLDivElement, Task>(
  ({ name, pointEstimate, dueDate, tags, status, assignee, ...props }, ref) => {
    const time = compareTime(dueDate)
    const { __typename, ...propsRest } = props

    return (
      <StyledTaskCard ref={ref} {...propsRest}>
        <StyledTaskCardHeader>
          <StyledTaskCardHeaderTitle>{name}</StyledTaskCardHeaderTitle>
          <IconButton>
            <MoreFillIcon />
          </IconButton>
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
