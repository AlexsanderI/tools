const baseUrl = 'https://62840a40a48bd3c40b6a3c4f.mockapi.io/api/v1/tasks';

const mapTask = (tasks) => tasks.map(({ id, ...rest }) => ({ ...rest, id }));
export const getTasksList = () => fetch(baseUrl)
  .then((response) => response.json())
  .then((tasks) => mapTask(tasks));

export const createTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const updateTask = (taskId, updatedTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updatedTaskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
