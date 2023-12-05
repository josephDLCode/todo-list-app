import { DefaultTheme } from 'styled-components'

export function getBadgeBackground(
  theme: DefaultTheme,
  type: BadgeProps['$type']
) {
  const backgrounds = {
    general: `${theme.colors.neutral[1]}1a`,
    green: `${theme.colors.secondary[4]}1a`,
    blue: '#2F61BF1a',
    yellow: `${theme.colors.tertiary[4]}1a}`,
    red: `${theme.colors.primary[4]}1a`
  }

  return backgrounds[type || 'general']
}

export function getBadgeColor(theme: DefaultTheme, type: BadgeProps['$type']) {
  const colors = {
    general: theme.colors.neutral[1],
    green: theme.colors.secondary[4],
    blue: '#2F61BF',
    yellow: theme.colors.tertiary[4],
    red: theme.colors.primary[4]
  }

  return colors[type || 'general']
}
