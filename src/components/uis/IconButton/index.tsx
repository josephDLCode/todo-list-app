import { StyledIconButton } from './icon-button.style'

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  ...props
}) => {
  return <StyledIconButton {...props}>{children}</StyledIconButton>
}
