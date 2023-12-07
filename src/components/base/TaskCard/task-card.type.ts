interface TaskCardProps extends Task {
  handleOptions?: (id: string) => void
  isOpenOptions?: boolean
}
