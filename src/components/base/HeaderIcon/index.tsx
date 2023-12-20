import { Avatar } from '../../ui/Avatar'
import { IconButton } from '../../ui/IconButton'
import { BellIcon } from '../../../icons/BellIcon'
import { StyledMobileHeaderIcon } from './header-icon.style'
import { SearchCloseIcon } from '../../../icons/SearchCloseIcon'

export const HeaderIcon: React.FC<HeaderIconProps> = ({
  isDesktop,
  clearSearch,
  isSearchSelected
}) => {
  return (
    <>
      {isDesktop ? (
        <>
          {isSearchSelected && (
            <IconButton onClick={clearSearch}>
              <SearchCloseIcon />
            </IconButton>
          )}
          <BellIcon />
          <Avatar src="https://picsum.photos/50" />
        </>
      ) : (
        <StyledMobileHeaderIcon>
          <BellIcon />
          <Avatar src="https://picsum.photos/50" />
        </StyledMobileHeaderIcon>
      )}
    </>
  )
}
