interface Column {
  id: string
  title: string
  taskIds: string[]
}

type TaskIdsType = Record<string, Column>
type TaskType = Record<string, Task>

type TasksIdsForState = {
  TODO: string[]
  IN_PROGRESS: string[]
  DONE: string[]
}
