interface SelectorProps {
  isMulti?: boolean
  labelTitle?: string
  items: SelectorItem[]
  labelIcon?: JSX.Element
  optionListTitle: string
  selectedValue?: string | string[]
  onSelect?: (value: string | string[]) => void
}

interface SelectorItem {
  value: string
  label: {
    text: string
    icon?: JSX.Element
  }
}
