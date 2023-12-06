import { useContext } from 'react'

import { TaskContext } from '../contexts/TaskContext'
import { MainLayout } from '../components/layouts/MainLayout'
import { TaskList } from '../components/views/dashboard/TaskList'

export default function HomePage() {
  const {
    taskList,
    columnOrder,
    taskIdsForTodo,
    taskIdsForDone,
    taskIdsForInProgress
  } = useContext(TaskContext)

  return (
    <MainLayout>
      <TaskList
        tasks={taskList}
        columnOrder={columnOrder}
        tasksIdsForState={{
          TODO: taskIdsForTodo,
          IN_PROGRESS: taskIdsForInProgress,
          DONE: taskIdsForDone
        }}
      />
    </MainLayout>
  )
}
