interface ModalProps {
  open: boolean
  width?: number | string
  children: React.ReactNode
  onClose?: React.MouseEventHandler<HTMLDivElement>
}
