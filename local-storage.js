const tasks = getTasksFromStorage();
function getTasksFromStorage() {
    const tasksAsJSON = localStorage.getItem("storedTasks");
    if (tasksAsJSON == null)
        return [];
    return JSON.parse(tasksAsJSON);
  }
  function setToStorage() {
    localStorage.setItem("storedTasks", JSON.stringify(tasks));
  }
  export{getTasksFromStorage,setToStorage}