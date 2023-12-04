interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  color?: 'primary' | 'secondary'
}
