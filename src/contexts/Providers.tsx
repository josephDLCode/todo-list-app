import { ApolloProvider } from '@apollo/client'

import { ModalProvider } from './ModalContext'
import { SearchProvider } from './SearchContext'
import GlobalThemeProvider from './ThemeContext'
import { apolloClient } from '../services/apollo-client.service'

export const Providers = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalThemeProvider>
        <ModalProvider>
          <SearchProvider>{children}</SearchProvider>
        </ModalProvider>
      </GlobalThemeProvider>
    </ApolloProvider>
  )
}
