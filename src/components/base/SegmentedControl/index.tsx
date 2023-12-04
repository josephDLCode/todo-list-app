import { SegmentedIten } from './SegmentedIten'
import { StyledSegmentedControl } from './segmented-control.style'

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  navigate,
  pathname
}) => {
  return (
    <StyledSegmentedControl>
      <SegmentedIten
        title="Dashboard"
        $isSelected={pathname === '/'}
        onClick={() => navigate('/')}
      />
      <SegmentedIten
        title="Task"
        $isSelected={pathname === '/mytask'}
        onClick={() => navigate('/mytask')}
      />
    </StyledSegmentedControl>
  )
}
