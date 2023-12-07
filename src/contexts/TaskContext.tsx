import { createContext } from 'react'

import { useTask } from '../hooks/useTask'
import { getTaskIds, structureTaskList } from '../utils/task-list.util'

interface TaskContextProps {
  taskList: TaskType
  taskIdsForTodo: string[]
  taskIdsForDone: string[]
  taskIdsForInProgress: string[]
}

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
)

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const { tasks } = useTask()

  const tasksArray = tasks.data?.tasks || []
  const taskList = structureTaskList(tasksArray)
  const taskIdsForTodo = getTaskIds(tasksArray, 'TODO')
  const taskIdsForInProgress = getTaskIds(tasksArray, 'IN_PROGRESS')
  const taskIdsForDone = getTaskIds(tasksArray, 'DONE')

  return (
    <TaskContext.Provider
      value={{
        taskList,
        taskIdsForTodo,
        taskIdsForInProgress,
        taskIdsForDone
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
