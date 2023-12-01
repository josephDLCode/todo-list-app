import { colors } from './color-palette'
import { breakpoints } from './breakpoints'
import { shadows, typography } from './shared-theme'

export const theme: ThemeType = {
  breakpoints,
  palette: {
    ...colors,
    primary: {
      ...colors.primary,
      contrastText: '#FFFFFF'
    },
    secondary: {
      ...colors.secondary,
      contrastText: '#FFFFFF'
    },
    error: {
      ...colors.error,
      contrastText: '#FFFFFF'
    },
    warning: {
      ...colors.warning,
      contrastText: '#FFFFFF'
    },
    info: {
      ...colors.info,
      contrastText: '#FFFFFF'
    },
    success: {
      ...colors.success,
      contrastText: '#FFFFFF'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: '#FFFFFF',
    mode: 'light'
  },
  shadows,
  typography
}
