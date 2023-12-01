import GlobalThemeProvider from './ThemeContext'

export const Providers = ({ children }: { children?: React.ReactNode }) => {
  return <GlobalThemeProvider>{children}</GlobalThemeProvider>
}
