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
