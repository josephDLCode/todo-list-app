import { useState } from 'react'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'

import {
  StyledSelector,
  StyledSelectorTitle,
  StyledSelectorListItem,
  StyledSelectorListContainer
} from './selector.style'

export const Selector: React.FC<SelectorProps> = ({
  items,
  title,
  isMulti,
  onSelect,
  openSelector
}) => {
  const [selected, setSelected] = useState<string[]>([])

  const handleClick = (value: string) => {
    let items = []
    if (isMulti) {
      if (selected.find(val => val === value)) {
        items = selected.filter(val => val !== value)
        setSelected(selected.filter(val => val !== value))
      } else {
        items = [...selected, value]
        setSelected([...selected, value])
      }

      onSelect && onSelect(items)
      return
    }
    onSelect && onSelect(value)
  }

  return (
    <>
      {openSelector && (
        <StyledSelector>
          <StyledSelectorTitle>{title}</StyledSelectorTitle>
          <StyledSelectorListContainer>
            {items?.map(item => (
              <StyledSelectorListItem
                key={item.value}
                onClick={() => handleClick(item.value)}
              >
                {isMulti ? (
                  selected.find(val => item.value === val) ? (
                    <GrCheckboxSelected />
                  ) : (
                    <GrCheckbox />
                  )
                ) : (
                  item.label.icon
                )}
                <span>{item.label.text}</span>
              </StyledSelectorListItem>
            ))}
          </StyledSelectorListContainer>
        </StyledSelector>
      )}
    </>
  )
}
