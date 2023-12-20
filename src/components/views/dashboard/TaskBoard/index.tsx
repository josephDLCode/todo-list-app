import { useEffect, useContext } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import { BoardColumn } from '../BoardColumn'
import { StyledTaskBoard } from './task-board.style'
import { TaskContext } from '../../../../contexts/TaskContext'
import { useDraggableTask } from '../../../../hooks/useDraggableTask'

export const TaskBoard = () => {
  const { data, handleDragEnd, setData } = useDraggableTask()
  const { taskList, todoTaskIds, doingTaskIds, doneTaskIds } =
    useContext(TaskContext)

  useEffect(() => {
    setData({
      ...data,
      tasks: taskList,
      columns: {
        ...data.columns,
        TODO: {
          ...data.columns.TODO,
          title: `Working (${todoTaskIds.length})`,
          taskIds: todoTaskIds
        },
        IN_PROGRESS: {
          ...data.columns.IN_PROGRESS,
          title: `In Progress (${doingTaskIds.length})`,
          taskIds: doingTaskIds
        },
        DONE: {
          ...data.columns.DONE,
          title: `Completed (${doneTaskIds.length})`,
          taskIds: doneTaskIds
        }
      }
    })
  }, [taskList])

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <StyledTaskBoard>
        {data.columnOrder.map(columnId => {
          const column = data.columns[columnId]
          const tasks = column.taskIds.map((taskId: any) => data.tasks[taskId])

          return (
            <BoardColumn
              tasks={tasks}
              id={column.id}
              key={column.id}
              title={column.title}
            />
          )
        })}
      </StyledTaskBoard>
    </DragDropContext>
  )
}
