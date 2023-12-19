interface AvatarProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'size'> {
  $size?: 'sm' | 'md' | 'lg'
}
