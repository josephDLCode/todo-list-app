import { Link } from 'react-router-dom'
import { StyledTabBarItem } from './tabbar.style'

export const TabBarItem: React.FC<TabBarProps> = ({
  icon,
  link,
  title,
  $isSelected,
  onClick
}) => {
  return (
    <StyledTabBarItem $isSelected={$isSelected} onClick={onClick}>
      {link ? (
        <Link to={link}>
          {icon}
          <span>{title}</span>
        </Link>
      ) : (
        <button>
          {icon}
          <span>{title}</span>
        </button>
      )}
    </StyledTabBarItem>
  )
}
