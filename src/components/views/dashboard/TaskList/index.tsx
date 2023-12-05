import { TaskColumn } from '../TaskColumn'
import { StyledTaskList } from './task-list.style'

export const TaskList = () => {
  const tasks1 = [
    { id: '1a', title: 'Slack' },
    { id: '2a', title: 'Google' }
  ]
  const tasks2 = [
    { id: '1b', title: 'Twitter' },
    { id: '2b', title: 'Maxxis Tyres' },
    { id: '2c', title: 'Samsung' }
  ]
  const tasks3 = [
    { id: '1c', title: 'Tesla' },
    { id: '2c', title: 'Slack' }
  ]

  return (
    <StyledTaskList>
      <TaskColumn title="Working (03)" tasks={tasks1} />
      <TaskColumn title="In Progress (03)" tasks={tasks2} />
      <TaskColumn title="Completed (03)" tasks={tasks3} />
    </StyledTaskList>
  )
}
