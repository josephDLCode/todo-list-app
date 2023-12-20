import { createContext } from 'react'

import { useTask } from '../hooks/useTask'
import { getTaskIds, structureTaskList } from '../utils/task-list.util'

interface TaskContextProps {
  taskList: TaskType
  todoTaskIds: string[]
  doneTaskIds: string[]
  doingTaskIds: string[]
}

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
)

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const { tasks } = useTask()

  const tasksArray = tasks.data?.tasks || []
  const taskList = structureTaskList(tasksArray)
  const todoTaskIds = getTaskIds(tasksArray, 'TODO')
  const doingTaskIds = getTaskIds(tasksArray, 'IN_PROGRESS')
  const doneTaskIds = getTaskIds(tasksArray, 'DONE')

  return (
    <TaskContext.Provider
      value={{
        taskList,
        todoTaskIds,
        doneTaskIds,
        doingTaskIds
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
