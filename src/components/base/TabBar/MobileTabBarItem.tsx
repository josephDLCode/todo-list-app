import { Link } from 'react-router-dom'
import { StyledTabBarItem } from './tabbar.style'

export const TabBarItem: React.FC<SidebarItemProps> = ({
  icon,
  link,
  title,
  $isSelected
}) => {
  return (
    <StyledTabBarItem $isSelected={$isSelected}>
      <Link to={link}>
        {icon}
        <span>{title}</span>
      </Link>
    </StyledTabBarItem>
  )
}
