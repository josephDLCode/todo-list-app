import { StyledSegmentedItem } from './segmented-control.style'

export const SegmentedIten: React.FC<SegmentedItemProps> = ({
  title,
  $isSelected,
  ...props
}) => {
  return (
    <StyledSegmentedItem $isSelected={$isSelected} {...props}>
      {title}
    </StyledSegmentedItem>
  )
}
