import { useQuery } from '@apollo/client'
import { GET_TASKS } from '../gql/task/task.query'

export const useTask = () => {
  const tasks = useQuery<{ tasks: Task[] }>(GET_TASKS, {
    variables: {
      input: {}
    }
  })

  return { ...tasks }
}
