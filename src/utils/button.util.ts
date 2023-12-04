import { DefaultTheme } from 'styled-components'

export function getBtnBackground(
  theme: DefaultTheme,
  color?: ButtonProps['color']
) {
  const colors = {
    primary: theme.colors.primary[4],
    secondary: 'transparent'
  }

  return colors[color || 'primary']
}

export function getBtnBackgroundHover(
  theme: DefaultTheme,
  color?: ButtonProps['color']
) {
  const colors = {
    primary: theme.colors.primary[2],
    secondary: theme.colors.neutral[2]
  }

  return colors[color || 'primary']
}

export function getBtnBackgroundActive(
  theme: DefaultTheme,
  color?: ButtonProps['color']
) {
  const colors = {
    primary: theme.colors.primary[3],
    secondary: theme.colors.neutral[3]
  }

  return colors[color || 'primary']
}

export function getBtnBackgroundDisable(
  theme: DefaultTheme,
  color?: ButtonProps['color']
) {
  const colors = {
    primary: theme.colors.primary[2],
    secondary: 'transparent'
  }

  return colors[color || 'primary']
}
