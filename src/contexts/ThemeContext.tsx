import { theme } from '../themes'
import { ThemeProvider } from 'styled-components'

const GlobalThemeProvider = ({ children }: { children?: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default GlobalThemeProvider
