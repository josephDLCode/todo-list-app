export const TASK_LIST_STATUS = {
  tasks: {} as TaskType,
  columns: {
    TODO: {
      id: 'TODO',
      title: 'Working',
      taskIds: []
    },
    IN_PROGRESS: {
      id: 'IN_PROGRESS',
      title: 'In Progress',
      taskIds: []
    },
    DONE: {
      id: 'DONE',
      title: 'Completed',
      taskIds: []
    }
  } as TaskIdsType,
  columnOrder: ['TODO', 'IN_PROGRESS', 'DONE']
}
