import { useState, useEffect } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { TaskColumn } from '../TaskColumn'
import { StyledTaskList } from './task-list.style'
import { reorderColumnList } from '../../../../utils/task-list.util'

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  columnOrder,
  tasksIdsForState
}) => {
  const [data, setData] = useState({
    tasks: {} as TaskType,
    columns: {
      TODO: {
        id: 'TODO',
        title: 'Working (03)',
        taskIds: []
      },
      IN_PROGRESS: {
        id: 'IN_PROGRESS',
        title: 'In Progress (03)',
        taskIds: []
      },
      DONE: {
        id: 'DONE',
        title: 'Completed (03)',
        taskIds: []
      }
    } as TaskIdsType,
    columnOrder
  })

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

  useEffect(() => {
    setData({
      ...data,
      tasks,
      columns: {
        ...data.columns,
        TODO: {
          ...data.columns.TODO,
          taskIds: tasksIdsForState.TODO
        },
        IN_PROGRESS: {
          ...data.columns.IN_PROGRESS,
          taskIds: tasksIdsForState.IN_PROGRESS
        },
        DONE: {
          ...data.columns.DONE,
          taskIds: tasksIdsForState.DONE
        }
      }
    })
  }, [tasks])

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <StyledTaskList>
        {data.columnOrder.map(columnId => {
          const column = data.columns[columnId]
          const tasks = column.taskIds.map((taskId: any) => data.tasks[taskId])

          return (
            <TaskColumn
              tasks={tasks}
              id={column.id}
              key={column.id}
              title={column.title}
            />
          )
        })}
      </StyledTaskList>
    </DragDropContext>
  )
}
