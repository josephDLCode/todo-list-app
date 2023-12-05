import { MainLayout } from '../components/layouts/MainLayout'
import { TaskList } from '../components/views/dashboard/TaskList'

export default function HomePage() {
  return (
    <MainLayout>
      <TaskList />
    </MainLayout>
  )
}
