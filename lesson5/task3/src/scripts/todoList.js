import { onCreateTask } from './creatTask.js';
import { onToggleTask } from './updateTask.js';

export const initTodoListHandlers = () => {
  const creatBtnElem = document.querySelector('.create-task-btn');
  creatBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
};
