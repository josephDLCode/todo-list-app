import { createContext, useState } from 'react'

interface SearchContextProps {
  searchValue: string
  isSelected: boolean
  handleFocus: () => void
  handleBlur: () => void
  clearSearch: () => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps
)

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSelected, setSelected] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  const handleFocus = () => {
    setSelected(true)
  }

  const handleBlur = () => {
    setTimeout(() => {
      setSelected(false)
    }, 200)
  }

  const clearSearch = () => {
    setSearchValue('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchValue(value)
  }

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        isSelected,
        handleFocus,
        handleBlur,
        clearSearch,
        handleChange
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
