import {
  StyledSelector,
  StyledSelectorListContainer,
  StyledSelectorListItem,
  StyledSelectorTitle
} from './selector.style'

export const Selector: React.FC<SelectorProps> = ({
  items,
  title,
  onSelect,
  openSelector
}) => {
  return (
    <>
      {openSelector && (
        <StyledSelector>
          <StyledSelectorTitle>{title}</StyledSelectorTitle>
          <StyledSelectorListContainer>
            {items?.map(item => (
              <StyledSelectorListItem
                key={item.value}
                onClick={() => onSelect && onSelect(item.value)}
              >
                {item.label.icon}
                <span>{item.label.text}</span>
              </StyledSelectorListItem>
            ))}
          </StyledSelectorListContainer>
        </StyledSelector>
      )}
    </>
  )
}
