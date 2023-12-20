import { MainLayout } from '../components/layouts/MainLayout'
import { TaskBoard } from '../components/views/dashboard/TaskBoard'

export default function HomePage() {
  return (
    <MainLayout>
      <TaskBoard />
    </MainLayout>
  )
}
