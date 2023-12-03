import { StyledInput } from './input.style'

export const Input: React.FC<InputProps> = ({
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <StyledInput>
      <div className="start-icon">{startIcon}</div>
      <input {...props} />
      <div className="end-icon">{endIcon}</div>
    </StyledInput>
  )
}
