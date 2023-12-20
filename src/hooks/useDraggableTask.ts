import { useState } from 'react'
import { DropResult } from 'react-beautiful-dnd'

import { useTask } from './useTask'
import { TASK_LIST_STATUS } from '../constants/task-list.constant'
import { reorderColumnList, separateColumnTitle } from '../utils/task-list.util'

export const useDraggableTask = () => {
  const [data, setData] = useState(TASK_LIST_STATUS)
  const {
    updateTask: { updateTaskFn }
  } = useTask()

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result
    // If user tries to drop in an unknown destination
    if (!destination) return
    // If the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return
    // If the user drops within the same column but in a different position
    const sourceCol = data.columns[source.droppableId]
    const destinationCol = data.columns[destination.droppableId]

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      )

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn
        }
      }
      setData(newState)
      return
    }
    // If the user moves from one column to another
    const startTaskIds = Array.from(sourceCol.taskIds)
    const [removed] = startTaskIds.splice(source.index, 1)
    const newStartCol = {
      ...sourceCol,
      title: `${separateColumnTitle(sourceCol.title)}(${startTaskIds.length})`,
      taskIds: startTaskIds
    }

    const endTaskIds = Array.from(destinationCol.taskIds)
    endTaskIds.splice(destination.index, 0, removed)
    const newEndCol = {
      ...destinationCol,
      title: `${separateColumnTitle(destinationCol.title)}(${
        endTaskIds.length
      })`,
      taskIds: endTaskIds
    }

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      }
    }

    // Update Task Status
    updateTaskFn({
      variables: {
        input: {
          id: removed,
          status: newEndCol.id
        }
      }
    })
    setData(newState)
  }

  return { handleDragEnd, data, setData }
}
