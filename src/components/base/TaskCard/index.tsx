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

export const TaskCard = forwardRef<HTMLDivElement, TaskCardProps>(
  ({ title, ...props }, ref) => {
    return (
      <StyledTaskCard ref={ref} {...props}>
        <StyledTaskCardHeader>
          <StyledTaskCardHeaderTitle>{title}</StyledTaskCardHeaderTitle>
          <IconButton>
            <MoreFillIcon />
          </IconButton>
        </StyledTaskCardHeader>
        <StyledTaskCardBody>
          <StyledTaskCardBodyFirstRow>
            <span className="points">4 Points</span>
            <Badge title="TODAY" icon={<AlarmLineIcon />} />
          </StyledTaskCardBodyFirstRow>
          <StyledTaskCardBodySecondRow>
            <Badge title="IOS APP" $type="green" />
            <Badge title="ANDROID" $type="yellow" />
          </StyledTaskCardBodySecondRow>
        </StyledTaskCardBody>
        <StyledTaskCardFooter>
          <Avatar src="https://picsum.photos/50" $size="sm" />
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
