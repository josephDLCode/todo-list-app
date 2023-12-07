interface SelectorProps {
  title: string
  items: SelectorItem[]
  onSelect?: (value: string) => void
  openSelector?: boolean
}

interface SelectorItem {
  value: string
  label: {
    text: string
    icon?: JSX.Element
  }
}
