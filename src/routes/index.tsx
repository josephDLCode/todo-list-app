import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import MyTaskPage from '../pages/MyTaskPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/mytask',
    element: <MyTaskPage />
  }
])
