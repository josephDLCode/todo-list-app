import { StyledButton } from './button.style'

export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  ...props
}) => {
  return (
    <StyledButton color={color} {...props}>
      {children}
    </StyledButton>
  )
}
