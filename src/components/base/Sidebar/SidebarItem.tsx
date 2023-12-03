import { StyledSidebarItem } from './sidebar.style'
import { Link } from 'react-router-dom'

export const AsideItem: React.FC<SidebarItemProps> = ({
  icon,
  link,
  title,
  isSelected
}) => {
  return (
    <StyledSidebarItem isSelected={isSelected}>
      <Link to={link}>
        {icon}
        <span>{title.toUpperCase()}</span>
      </Link>
    </StyledSidebarItem>
  )
}
