import { gql } from '@apollo/client'

export const CREATE_TASK = gql`
  mutation CREATE_TASK($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      name
      pointEstimate
      dueDate
      tags
      status
      assignee {
        avatar
        email
      }
    }
  }
`

export const UPDATE_TASK = gql`
  mutation UPDATE_TASK($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      id
      name
      pointEstimate
      dueDate
      tags
      status
      assignee {
        avatar
        email
      }
    }
  }
`

export const DELETE_TASK = gql`
  mutation DELETE_TASK($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      id
      name
      pointEstimate
      dueDate
      tags
      status
      assignee {
        avatar
        email
      }
    }
  }
`
