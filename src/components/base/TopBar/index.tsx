import { useLocation, useNavigate } from 'react-router-dom'

import { Button } from '../../uis/Button'
import { StyledTopBar } from './topbar.style'
import { ListIcon } from '../../../icons/ListIcon'
import { SwitchButton } from '../../uis/SwitchButton'
import { LayoutIcon } from '../../../icons/LayoutIcon'
import { AddLineIcon } from '../../../icons/AddLineIcon'

export const TopBar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <StyledTopBar>
      <div>
        <SwitchButton
          isSelected={pathname === '/mytask'}
          onClick={() => navigate('/mytask')}
        >
          <ListIcon />
        </SwitchButton>
        <SwitchButton
          isSelected={pathname === '/'}
          onClick={() => navigate('/')}
        >
          <LayoutIcon />
        </SwitchButton>
      </div>
      <Button>
        <AddLineIcon />
      </Button>
    </StyledTopBar>
  )
}
