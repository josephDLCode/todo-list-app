import { useState } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import { TaskCard } from '../../../base/TaskCard'
import {
  StyledTaskColumn,
  StyledTaskColumnBody,
  StyledTaskColumnTitle
} from './task-column.style'

export const TaskColumn: React.FC<TaskColumn> = ({ title, tasks, id }) => {
  const [isOpenOptions, setIsOpenOptions] = useState({
    isOpen: false,
    id: ''
  })

  return (
    <StyledTaskColumn>
      <StyledTaskColumnTitle>{title}</StyledTaskColumnTitle>
      <Droppable droppableId={id}>
        {droppableProvided => (
          <StyledTaskColumnBody
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
          </StyledTaskColumnBody>
        )}
      </Droppable>
    </StyledTaskColumn>
  )
}
