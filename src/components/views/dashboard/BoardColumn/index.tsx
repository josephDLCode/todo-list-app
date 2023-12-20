import { useState } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import { TaskCard } from '../../../base/TaskCard'
import {
  StyledBoardColumn,
  StyledBoardColumnBody,
  StyledBoardColumnTitle
} from './board-column.style'

export const BoardColumn: React.FC<TaskColumn> = ({ title, tasks, id }) => {
  const [isOpenOptions, setIsOpenOptions] = useState({
    isOpen: false,
    id: ''
  })

  return (
    <StyledBoardColumn>
      <StyledBoardColumnTitle>{title}</StyledBoardColumnTitle>
      <Droppable droppableId={id}>
        {droppableProvided => (
          <StyledBoardColumnBody
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks?.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {draggableProvided => (
                  <TaskCard
                    handleOptions={val => {
                      setIsOpenOptions({
                        isOpen: !isOpenOptions.isOpen,
                        id: val
                      })
                    }}
                    isOpenOptions={
                      isOpenOptions.isOpen && isOpenOptions.id === task.id
                    }
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                    {...task}
                  />
                )}
              </Draggable>
            ))}
          </StyledBoardColumnBody>
        )}
      </Droppable>
    </StyledBoardColumn>
  )
}
