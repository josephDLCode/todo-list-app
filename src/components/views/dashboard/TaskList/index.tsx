import { useState } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { TaskColumn } from '../TaskColumn'
import { StyledTaskList } from './task-list.style'
import { reorderColumnList } from '../../../../utils/task-list.util'

export const TaskList = () => {
  const initialData: any = {
    tasks: {
      1: { id: '1', title: 'Google' },
      2: { id: '2', title: 'Twitter' },
      3: { id: '3', title: 'Slack' },
      4: { id: '4', title: 'Maxxis Tyres' },
      5: { id: '5', title: 'Samsung' },
      6: { id: '6', title: 'Tesla' }
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Working (03)',
        taskIds: ['1', '2', '3', '4', '5', '6']
      },
      'column-2': {
        id: 'column-2',
        title: 'In Progress (03)',
        taskIds: []
      },
      'column-3': {
        id: 'column-3',
        title: 'Completed (03)',
        taskIds: []
      }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
  }

  const [data, setData] = useState(initialData)

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
      taskIds: startTaskIds
    }

    const endTaskIds = Array.from(destinationCol.taskIds)
    endTaskIds.splice(destination.index, 0, removed)
    const newEndCol = {
      ...destinationCol,
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

    setData(newState)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <StyledTaskList>
        {data.columnOrder.map((columnId: any) => {
          const column = data.columns[columnId]
          const tasks = column.taskIds.map((taskId: any) => data.tasks[taskId])

          return (
            <TaskColumn
              tasks={tasks}
              id={column.id}
              key={column.id}
              title={column.title}
              taskIds={column.taskIds as any}
            />
          )
        })}
      </StyledTaskList>
    </DragDropContext>
  )
}
