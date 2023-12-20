import { useContext } from 'react'

import { Input } from '../../ui/Input'
import { HeaderIcon } from '../HeaderIcon'
import { SearchLineIcon } from '../../../icons/SearchLineIcon'
import { SearchContext } from '../../../contexts/SearchContext'

export const SearchBar = () => {
  const {
    isSelected,
    searchValue,
    clearSearch,
    handleBlur,
    handleChange,
    handleFocus
  } = useContext(SearchContext)

  return (
    <Input
      type="search"
      placeholder="Search"
      startIcon={<SearchLineIcon />}
      endIcon={
        <HeaderIcon
          isSearchSelected={isSelected}
          isDesktop
          clearSearch={clearSearch}
        />
      }
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      value={searchValue}
    />
  )
}
