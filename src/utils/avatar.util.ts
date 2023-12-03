export function getAvatarSize(size?: AvatarProps['$size']) {
  const sizes = {
    sm: '32px',
    md: '40px',
    lg: '48px'
  }

  return sizes[size || 'md']
}
