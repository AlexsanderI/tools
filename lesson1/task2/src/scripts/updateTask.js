import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasckGetway.js';

// export const onToggleTask = (e) => {
//   const isCheckbox = e.target.classList.contains('list__item-checkbox');
//   const isDelete = e.target.classList.contains('list__item_delete-btn');
//   // if (!isCheckbox) {
//   //   return;
//   // }

//   const taskId = e.target.dataset.id;
//   const tasksList = getItem('tasksList');
//   const { text, createDate } = tasksList.find((task) => task.id === taskId);

//   const done = e.target.checked;
//   const updatedTask = {
//     text,
//     createDate,
//     done,
//     finishDate: done ? new Date().toISOString() : null,
//   };

//   if (isCheckbox)
//     updateTask(taskId, updatedTask)
//       .then(() => getTasksList())
//       .then((newTasksList) => {
//         setItem('tasksList', newTasksList);
//         renderTasks();
//       });
//   if (isDelete) {
//     deleteTask(taskId)
//       .then(() => getTasksList())
//       .then((newTasksList) => {
//         setItem('tasksList', newTasksList);
//         renderTasks();
//       });
//   }
// };

// 1 Prepare data
// 2 Update data to data base
// 3 Read new data frome server
// 4 Save new data to front-end storage
// 5 Update UI based on new data
export const onToggleTask = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  const isDelete = event.target.classList.contains('list__item_delete-btn');

  const taskId = event.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList.find((task) => task.id === taskId);

  const done = event.target.checked;
  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  if (isCheckbox) {
    updateTask(taskId, updatedTask)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }
  if (isDelete) {
    deleteTask(taskId)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }
};
