import { gql } from '@apollo/client'

export const GET_TASKS = gql`
  query GET_TASKS($input: FilterTaskInput!) {
    tasks(input: $input) {
      id
      name
      pointEstimate
      dueDate
      status
      tags
      assignee {
        avatar
      }
    }
  }
`
