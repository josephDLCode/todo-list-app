import { ApolloProvider } from '@apollo/client'

import { TaskProvider } from './TaskContext'
import { ModalProvider } from './ModalContext'
import { SearchProvider } from './SearchContext'
import GlobalThemeProvider from './ThemeContext'
import { apolloClient } from '../services/apollo-client.service'

export const Providers = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalThemeProvider>
        <TaskProvider>
          <ModalProvider>
            <SearchProvider>{children}</SearchProvider>
          </ModalProvider>
        </TaskProvider>
      </GlobalThemeProvider>
    </ApolloProvider>
  )
}
