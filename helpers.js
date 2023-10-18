
import{getTasksFromStorage,setToStorage} from  './local-storage.js';


const tasks = getTasksFromStorage();
const addTaskInput = document.querySelector(".input-area input");
export function addTask(){
  if (addTaskInput.value.trim() == "" )
      return;
  const taskDate = new Date();
  const newTask = {
      id: tasks.length,
      title: addTaskInput.value,
      completed: false,
      createdAt: new Date().toGMTString(),
  };
  tasks.push(newTask);
  setToStorage();
  addTaskInput.value = "";
}

export function changeColor1(){
  document.getElementById("b1").style.color = "#0093E9";
  document.getElementById("b1").style.borderColor = "#0093E9";

  document.getElementById("b3").style.color = "black";
  document.getElementById("b3").style.borderColor = "white";
  document.getElementById("b2").style.color = "black";
  document.getElementById("b2").style.borderColor = "white";

  const taskList = document.querySelector('.task-list');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    taskList.appendChild(createTaskHTML(task));
  });
}

export function changeColor2(){
  document.getElementById("b2").style.color = "#0093E9";
  document.getElementById("b2").style.borderColor = "#0093E9";

  document.getElementById("b1").style.color = "black";
  document.getElementById("b1").style.borderColor = "white";
  document.getElementById("b3").style.color = "black";
  document.getElementById("b3").style.borderColor = "white";

  const taskList = document.querySelector('.task-list');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    if (!task.completed) {
      taskList.appendChild(createTaskHTML(task));
    }
  });
}
export function changeColor3(){
  document.getElementById("b3").style.color = "#0093E9";
  document.getElementById("b3").style.borderColor = "#0093E9";

  document.getElementById("b1").style.color = "black";
  document.getElementById("b1").style.borderColor = "white";
  document.getElementById("b2").style.color = "black";
  document.getElementById("b2").style.borderColor = "white";

  const taskList = document.querySelector('.task-list');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    if (task.completed) {
      taskList.appendChild(createTaskHTML(task));
    }
  });
}

function createTaskHTML(task) {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;
    setToStorage();
  });


  const taskTitle = document.createElement('p');
  taskTitle.classList.add('task-title');
  taskTitle.textContent = task.title;

  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row');
  const taskDate = document.createElement('p');
  taskDate.classList.add('task-date');
  
  taskDate.textContent=task.createdAt;

  rowDiv.appendChild(taskTitle);
  rowDiv.appendChild(checkbox);

  taskDiv.appendChild(rowDiv);
  taskDiv.appendChild(taskDate);
  

  if (task.completed) {
    taskDiv.classList.add('completed');
  }

  return taskDiv;
}