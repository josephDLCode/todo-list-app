interface SegmentedControlProps {
  pathname: string
  navigate: (path: string) => void
}

interface SegmentedItemProps
  extends Pick<React.LiHTMLAttributes<HTMLLIElement>, 'onClick'> {
  title: string
  $isSelected?: boolean
}

type StyledSegmentedItemProps = Pick<SegmentedItemProps, '$isSelected'>
