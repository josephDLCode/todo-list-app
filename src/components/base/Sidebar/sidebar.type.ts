interface SidebarItemProps {
  title: string
  icon: JSX.Element
  link: string
  $isSelected?: boolean
}

type StyledSidebarItemProps = Pick<SidebarItemProps, '$isSelected'>
