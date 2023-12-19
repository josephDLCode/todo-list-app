interface SelectorProps {
  title: string
  items: SelectorItem[]
  onSelect?: (value: string | string[]) => void
  openSelector?: boolean
  isMulti?: boolean
}

interface SelectorItem {
  value: string
  label: {
    text: string
    icon?: JSX.Element
  }
}
