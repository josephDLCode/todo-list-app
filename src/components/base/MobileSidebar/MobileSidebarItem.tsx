import { Link } from 'react-router-dom'
import { StyledMobileSidebarItem } from './mobile-sidebar.style'

export const MobileSidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  link,
  title,
  $isSelected
}) => {
  return (
    <StyledMobileSidebarItem $isSelected={$isSelected}>
      <Link to={link}>
        {icon}
        <span>{title}</span>
      </Link>
    </StyledMobileSidebarItem>
  )
}
