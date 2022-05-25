import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { createTask, getTasksList } from './tasckGetway.js';

export const onCreateTask = () => {
  const taskTitleInputeElem = document.querySelector('.task-input');

  const text = taskTitleInputeElem.value;

  if (!text) {
    return null;
  }

  taskTitleInputeElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// 1 Prepare data
// 2 Write data to data base
// 3 Read new data frome server
// 4 Save new data to front-end storage
// 5 Update UI based on new data
