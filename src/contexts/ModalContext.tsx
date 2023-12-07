import { createContext, useState } from 'react'

import { TaskModal } from '../components/base/TaskModal'
import { ConfirmModal } from '../components/base/ConfirmModal'
import { useTask } from '../hooks/useTask'

interface ModalContextProps {
  openModal: boolean
  setOpenModal: (open: boolean) => void
  openDeleteModal: boolean
  setOpenDeleteModal: (open: boolean) => void
  task: any
  setTask: (task: any) => void
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    deleteTask: { deleteTaskFn, deleteTaskRes }
  } = useTask()
  const [task, setTask] = useState<any>({})
  const [openModal, setOpenModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const handleDelete = () => {
    const { id } = task

    if (!id) return

    deleteTaskFn({
      variables: {
        input: {
          id
        }
      },
      onCompleted: () => {
        setOpenDeleteModal(false)
      }
    })
  }

  return (
    <ModalContext.Provider
      value={{
        task,
        setTask,
        openModal,
        setOpenModal,
        openDeleteModal,
        setOpenDeleteModal
      }}
    >
      {children}
      <TaskModal open={openModal} onClose={() => setOpenModal(false)} />
      <ConfirmModal
        open={openDeleteModal}
        onConfirm={handleDelete}
        isDisabled={deleteTaskRes.loading}
        onClose={() => setOpenDeleteModal(false)}
      />
    </ModalContext.Provider>
  )
}
