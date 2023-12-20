import { useQuery, useMutation } from '@apollo/client'

import { GET_TASKS } from '../gql/task/task.query'
import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK
} from '../gql/task/task.mutation'

export const useTask = () => {
  const tasks = useQuery<{ tasks: Task[] }>(GET_TASKS, {
    variables: {
      input: {}
    }
  })

  const [createTaskFn, createTaskRes] = useMutation<Task>(CREATE_TASK, {
    refetchQueries() {
      return [
        {
          query: GET_TASKS,
          variables: {
            input: {}
          }
        }
      ]
    }
  })

  const [updateTaskFn, updateTaskRes] = useMutation<Task>(UPDATE_TASK, {
    refetchQueries() {
      return [
        {
          query: GET_TASKS,
          variables: {
            input: {}
          }
        }
      ]
    }
  })

  const [deleteTaskFn, deleteTaskRes] = useMutation<Task>(DELETE_TASK, {
    refetchQueries() {
      return [
        {
          query: GET_TASKS,
          variables: {
            input: {}
          }
        }
      ]
    }
  })

  return {
    tasks: { ...tasks },
    createTask: { createTaskFn, createTaskRes },
    updateTask: { updateTaskFn, updateTaskRes },
    deleteTask: { deleteTaskFn, deleteTaskRes }
  }
}
