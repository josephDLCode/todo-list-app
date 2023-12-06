import { useContext } from 'react'

import { Button } from '../../uis/Button'
import { StyledTopBar } from './topbar.style'
import { ListIcon } from '../../../icons/ListIcon'
import { SwitchButton } from '../../uis/SwitchButton'
import { LayoutIcon } from '../../../icons/LayoutIcon'
import { AddLineIcon } from '../../../icons/AddLineIcon'
import { ModalContext } from '../../../contexts/ModalContext'

export const TopBar: React.FC<TopBarProps> = ({ navigate, pathname }) => {
  const { setOpenModal } = useContext(ModalContext)

  return (
    <StyledTopBar>
      <div>
        <SwitchButton
          $isSelected={pathname === '/mytask'}
          onClick={() => navigate('/mytask')}
        >
          <ListIcon />
        </SwitchButton>
        <SwitchButton
          $isSelected={pathname === '/'}
          onClick={() => navigate('/')}
        >
          <LayoutIcon />
        </SwitchButton>
      </div>
      <Button onClick={() => setOpenModal(true)}>
        <AddLineIcon />
      </Button>
    </StyledTopBar>
  )
}
