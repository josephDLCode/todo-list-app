import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import { Providers } from './contexts/Providers.tsx'
import { GlobalStyle, NormalizeStyle } from './styles/global.style.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
    <GlobalStyle />
    <NormalizeStyle />
  </Providers>
)
