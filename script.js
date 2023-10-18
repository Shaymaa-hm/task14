// Import necessary functions and variables
import { addTask, changeColor1, changeColor2, changeColor3 } from './helpers.js';

localStorage.setItem("backgroundColor", "red");
const addTaskInput = document.querySelector(".input-area input");
const addTaskBtn = document.querySelector("#create");

// Event listeners
addTaskBtn.addEventListener('click', addTask);
document.getElementById("b1").addEventListener('click', changeColor1);
document.getElementById("b2").addEventListener('click', changeColor2);
document.getElementById("b3").addEventListener('click', changeColor3);
