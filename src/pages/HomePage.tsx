import { SearchBar } from '../components/base/SearchBar'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <SearchBar />
      <h1>Home Page</h1>
    </MainLayout>
  )
}
