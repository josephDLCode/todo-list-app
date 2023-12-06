import { gql } from '@apollo/client'

export const GET_TASKS = gql`
  query TASK($input: FilterTaskInput!) {
    tasks(input: $input) {
      id
      name
    }
  }
`
