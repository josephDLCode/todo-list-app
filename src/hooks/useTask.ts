import { useQuery } from '@apollo/client'
import { GET_TASKS } from '../gql/task/task.query'

export const useTask = () => {
  const tasks = useQuery(GET_TASKS, {
    variables: {
      input: {
        name: ''
      }
    }
  })

  return { tasks }
}
