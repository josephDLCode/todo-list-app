import { StyledAvatar } from './avatar.style'

export const Avatar: React.FC<AvatarProps> = ({ $size = 'md', ...props }) => {
  return (
    <StyledAvatar $size={$size}>
      <img {...props} />
    </StyledAvatar>
  )
}
