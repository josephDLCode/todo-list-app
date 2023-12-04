import { StyledSwitchButton } from './switch-button.style'

export const SwitchButton: React.FC<SwitchButtonProps> = ({
  $isSelected,
  children,
  ...props
}) => {
  return (
    <StyledSwitchButton $isSelected={$isSelected} {...props}>
      {children}
    </StyledSwitchButton>
  )
}
