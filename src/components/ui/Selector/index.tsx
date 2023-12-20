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
  labelIcon,
  labelTitle,
  selectedValue,
  optionListTitle
}) => {
  const [openSelector, setOpenSelector] = useState(false)
  // const [selected, setSelected] = useState<string | string[]>(isMulti ? [] : '')

  const handleClick = (value: string) => {
    if (!onSelect) return

    if (isMulti) {
      if (Array.isArray(selectedValue)) {
        if (selectedValue.includes(value)) {
          onSelect(selectedValue.filter(item => item !== value))
        } else {
          onSelect([...selectedValue, value])
        }
      } else {
        onSelect([value])
      }
    } else {
      onSelect(value)
    }
    setOpenSelector(false)
  }

  const getIcon = () => {
    if (!onSelect) return

    if (isMulti) {
      if (Array.isArray(selectedValue)) {
        if (selectedValue.length > 0) return null
        else return labelIcon || null
      }
    } else {
      if (selectedValue) {
        return (
          items.find(item => item.value === selectedValue)?.label?.icon || null
        )
      } else {
        return labelIcon || null
      }
    }
  }

  const getLabel = () => {
    if (isMulti) {
      if (Array.isArray(selectedValue)) {
        const firstItemSelected =
          items.find(item => item.value === selectedValue[0])?.label?.text || ''

        if (selectedValue.length === 1) {
          return firstItemSelected
        } else if (selectedValue.length > 1) {
          return `${selectedValue.length} ${firstItemSelected}`
        } else {
          return labelTitle
        }
      } else {
        return labelTitle
      }
    } else {
      if (selectedValue) {
        return (
          items.find(item => item.value === selectedValue)?.label?.text || ''
        )
      } else {
        return labelTitle || 'Select'
      }
    }
  }

  const renderItems = () => {
    if (isMulti) {
      return items?.map(item => (
        <li key={item.value} onClick={() => handleClick(item.value)}>
          {selectedValue?.includes(item.value) ? (
            <GrCheckboxSelected />
          ) : (
            <GrCheckbox />
          )}
          <span>{item.label.text}</span>
        </li>
      ))
    } else {
      return items?.map(item => (
        <li key={item.value} onClick={() => handleClick(item.value)}>
          {item.label.icon}
          <span>{item.label.text}</span>
        </li>
      ))
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
            {renderItems()}
          </StyledSelectorItemsContainer>
        </StyledSelectorOptions>
      )}
    </StyledSelector>
  )
}
