import { Input } from '../../uis/Input'
import { Avatar } from '../../uis/Avatar'
import { BellIcon } from '../../../icons/BellIcon'
import { SearchLineIcon } from '../../../icons/SearchLineIcon'

export const SearchBar = () => {
  const getEndIcon = () => {
    return (
      <>
        <BellIcon />
        <Avatar src="https://picsum.photos/50" />
      </>
    )
  }

  return (
    <Input
      startIcon={<SearchLineIcon />}
      type="search"
      placeholder="Search"
      endIcon={getEndIcon()}
    />
  )
}
