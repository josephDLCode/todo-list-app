import { useContext } from 'react'

import { Input } from '../../ui/Input'
import { HeaderIcon } from '../HeaderIcon'
import { IconButton } from '../../ui/IconButton'
import { StyledTopNavBar } from './top-nav-bar.style'
import { SearchLineIcon } from '../../../icons/SearchLineIcon'
import { SearchContext } from '../../../contexts/SearchContext'
import { SearchCloseIcon } from '../../../icons/SearchCloseIcon'

export const TopNavBar = () => {
  const {
    isSelected,
    searchValue,
    clearSearch,
    handleBlur,
    handleChange,
    handleFocus
  } = useContext(SearchContext)

  const endIcon = () => {
    return isSelected ? (
      <IconButton onClick={clearSearch}>
        <SearchCloseIcon />
      </IconButton>
    ) : undefined
  }

  return (
    <StyledTopNavBar>
      <Input
        type="search"
        placeholder="Search"
        startIcon={<SearchLineIcon />}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={searchValue}
        endIcon={endIcon()}
      />
      <HeaderIcon clearSearch={clearSearch} />
    </StyledTopNavBar>
  )
}
