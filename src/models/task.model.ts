interface Task {
  __typename: 'Task'
  id: string
  name: string
  pointEstimate: PointEstimate
  dueDate: Date
  tags: TaskTag[]
  assignee?: User
  status: Status
}

type PointEstimate = 'EIGHT' | 'FOUR' | 'ONE' | 'TWO' | 'ZERO'

type TaskTag = 'ANDROID' | 'IOS' | 'NODE_JS' | 'RAILS' | 'REACT'

type Status = 'BACKLOG' | 'CANCELLED' | 'DONE' | 'IN_PROGRESS' | 'TODO'
