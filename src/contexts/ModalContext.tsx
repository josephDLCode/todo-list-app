import { createContext, useState } from 'react'

import { TaskModal } from '../components/base/TaskModal'

interface ModalContextProps {
  openModal: boolean
  setOpenModal: (open: boolean) => void
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        openModal,
        setOpenModal
      }}
    >
      {children}
      <TaskModal open={openModal} onClose={() => setOpenModal(false)} />
    </ModalContext.Provider>
  )
}
