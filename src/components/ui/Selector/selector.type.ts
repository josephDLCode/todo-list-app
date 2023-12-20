interface SelectorProps {
  isMulti?: boolean
  items: SelectorItem[]
  optionListTitle: string
  onSelect?: (value: string | string[]) => void
}

interface SelectorItem {
  value: string
  label: {
    text: string
    icon?: JSX.Element
  }
}
