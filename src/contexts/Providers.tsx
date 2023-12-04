import { SearchProvider } from './SearchContext'
import GlobalThemeProvider from './ThemeContext'

export const Providers = ({ children }: { children?: React.ReactNode }) => {
  return (
    <GlobalThemeProvider>
      <SearchProvider>{children}</SearchProvider>
    </GlobalThemeProvider>
  )
}
