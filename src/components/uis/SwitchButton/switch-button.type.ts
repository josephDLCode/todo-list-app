interface SwitchButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  isSelected?: boolean
}
