import { useContext } from 'react'

import { TaskContext } from '../contexts/TaskContext'
import { MainLayout } from '../components/layouts/MainLayout'
import { TaskList } from '../components/views/dashboard/TaskList'

export default function HomePage() {
  const { taskList, taskIdsForTodo, taskIdsForDone, taskIdsForInProgress } =
    useContext(TaskContext)

  return (
    <MainLayout>
      <TaskList
        tasks={taskList}
        tasksIdsForState={{
          TODO: taskIdsForTodo,
          IN_PROGRESS: taskIdsForInProgress,
          DONE: taskIdsForDone
        }}
      />
    </MainLayout>
  )
}
