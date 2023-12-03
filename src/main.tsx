import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'
import { Providers } from './contexts/Providers.tsx'
import { GlobalStyle, NormalizeStyle } from './styles/global.style.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Providers>
    <RouterProvider router={router} />
    <GlobalStyle />
    <NormalizeStyle />
  </Providers>
)
