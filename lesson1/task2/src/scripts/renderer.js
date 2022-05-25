import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => a.done - b.done;

const creatCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');
  // checkboxElem.classList.add('list__item-checkbox');
  // checkboxElem.setAttribute('data-id', id);
  checkboxElem.setAttribute('data-id', id);

  return checkboxElem;
};

export const creatListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = creatCheckbox({ done, id });
  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  const textElem = document.createElement('span');
  textElem.classList.add('list__item-text');

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list__item_delete-btn');
  textElem.textContent = text;

  listItemElem.append(checkboxElem, textElem, deleteBtnElem);

  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];

  listElem.innerHTML = '';
  const tasksElems = tasksList.sort(compareTasks).map(creatListItem);

  listElem.append(...tasksElems);
};
