import { useState } from 'react'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'

import {
  StyledSelector,
  StyledSelectorLabel,
  StyledSelectorTitle,
  StyledSelectorOptions,
  StyledSelectorItemsContainer
} from './selector.style'

export const Selector: React.FC<SelectorProps> = ({
  items,
  isMulti,
  onSelect,
  optionListTitle
}) => {
  const [openSelector, setOpenSelector] = useState(false)
  const [selected, setSelected] = useState<string>('')

  const handleClick = (value: string) => {
    setSelected(value)
    setOpenSelector(false)
  }

  const getIcon = () => {
    if (selected) {
      return items.find(item => item.value === selected)?.label?.icon || null
    } else {
      return items.length > 0 ? items[0].label.icon : null
    }
  }

  const getLabel = () => {
    if (selected) {
      return items.find(item => item.value === selected)?.label?.text || ''
    } else {
      return items.length > 0 ? items[0].label.text : 'Select'
    }
  }

  return (
    <StyledSelector>
      <StyledSelectorLabel onClick={() => setOpenSelector(!openSelector)}>
        {getIcon()}
        <span>{getLabel()}</span>
      </StyledSelectorLabel>
      {openSelector && (
        <StyledSelectorOptions>
          <StyledSelectorTitle>{optionListTitle}</StyledSelectorTitle>
          <StyledSelectorItemsContainer>
            {items?.map(item => (
              <li key={item.value} onClick={() => handleClick(item.value)}>
                {item.label.icon}
                <span>{item.label.text}</span>
              </li>
            ))}
          </StyledSelectorItemsContainer>
        </StyledSelectorOptions>
      )}
    </StyledSelector>
  )
}
