export function reorderColumnList(
  sourceCol: any,
  starIndex: number,
  endIndex: number
) {
  const newTaskIds = Array.from(sourceCol.taskIds)
  const [removed] = newTaskIds.splice(starIndex, 1)
  newTaskIds.splice(endIndex, 0, removed)

  const newColumn = {
    ...sourceCol,
    taskIds: newTaskIds
  }

  return newColumn
}

export function getTaskIds(task: Task[], status: Status) {
  return task.filter(task => task.status === status).map(task => task.id)
}

export function structureTaskList(tasks: Task[]) {
  let taskList: TaskType = {}

  tasks.forEach(task => {
    taskList[task.id] = task
  })

  return taskList
}

export function separateColumnTitle(title: string) {
  const index = title.indexOf('(')
  return title.substring(0, index)
}
