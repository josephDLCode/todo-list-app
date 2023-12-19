import { StyledBadge } from './tag.style'

export const Badge: React.FC<BadgeProps> = ({
  title,
  icon,
  $style = 'solid',
  $type = 'general'
}) => {
  return (
    <StyledBadge $style={$style} $type={$type}>
      {icon}
      <span>{title}</span>
    </StyledBadge>
  )
}
