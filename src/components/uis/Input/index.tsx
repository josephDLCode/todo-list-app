import { forwardRef } from 'react'
import { StyledInput } from './input.style'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ startIcon, endIcon, ...props }, ref) => {
    return (
      <StyledInput>
        <div className="start-icon">{startIcon}</div>
        <input ref={ref} {...props} />
        <div className="end-icon">{endIcon}</div>
      </StyledInput>
    )
  }
)
