interface Shadow {
  small: string
  default: string
  large: string
}

interface Typography {
  fontFamily: string
  fontWeight: number
  fontSize: string
  lineHeight: number
  letterSpacing: string
  textTransform: string
}

interface FontType extends Pick<Typography, 'fontFamily' | 'fontSize'> {
  fontWeightLight: number
  fontWeightRegular: number
  fontWeightMedium: number
  fontWeightBold: number
  h1: Omit<Typography, 'textTransform'>
  h2: Omit<Typography, 'textTransform'>
  h3: Omit<Typography, 'textTransform'>
  h4: Omit<Typography, 'textTransform'>
  h5: Omit<Typography, 'textTransform'>
  h6: Omit<Typography, 'textTransform'>
  subtitle1: Omit<Typography, 'textTransform'>
  subtitle2: Omit<Typography, 'textTransform'>
  body1: Omit<Typography, 'textTransform'>
  body2: Omit<Typography, 'textTransform'>
  button: Typography
  caption: Omit<Typography, 'textTransform'>
  overline: Typography
}

interface Palette {
  common: Common
  primary: Color
  secondary: Color
  error: Color
  warning: Color
  info: Color
  success: Color
  grey: GreyColor
  text: TextColor
  divider: string
  background: string
  mode: 'light' | 'dark'
}
