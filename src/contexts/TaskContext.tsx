import { createContext } from 'react'

import { useTask } from '../hooks/useTask'
import { getTaskIds, structureTaskList } from '../utils/task-list.util'

interface TaskContextProps {
  taskList: TaskType
  columnOrder: string[]
  taskIdsForTodo: string[]
  taskIdsForDone: string[]
  taskIdsForInProgress: string[]
}

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
)

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading, error } = useTask()

  const tasks = data?.tasks || []
  const taskList = structureTaskList(tasks)
  const taskIdsForTodo = getTaskIds(tasks, 'TODO')
  const taskIdsForInProgress = getTaskIds(tasks, 'IN_PROGRESS')
  const taskIdsForDone = getTaskIds(tasks, 'DONE')
  const columnOrder = ['TODO', 'IN_PROGRESS', 'DONE']

  return (
    <TaskContext.Provider
      value={{
        taskList,
        columnOrder,
        taskIdsForTodo,
        taskIdsForInProgress,
        taskIdsForDone
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
