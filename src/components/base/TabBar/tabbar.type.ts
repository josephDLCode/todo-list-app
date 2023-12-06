interface TabBarProps extends Omit<SidebarItemProps, 'link'> {
  onClick?: () => void
  link?: string
}
