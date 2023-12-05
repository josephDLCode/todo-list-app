import { TaskCard } from '../../../base/TaskCard'
import {
  StyledTaskColumn,
  StyledTaskColumnBody,
  StyledTaskColumnTitle
} from './task-column.style'

export const TaskColumn: React.FC<TaskColumn> = ({ title, tasks }) => {
  return (
    <StyledTaskColumn>
      <StyledTaskColumnTitle>{title}</StyledTaskColumnTitle>
      <StyledTaskColumnBody>
        {tasks?.map(task => (
          <TaskCard key={task.id} {...task} />
        ))}
      </StyledTaskColumnBody>
    </StyledTaskColumn>
  )
}
