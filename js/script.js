var buttonAddTask = document.getElementById("action");
buttonAddTask.addEventListener("click", addTask);
const listHTML = document.getElementById("list-tasks");

var listAllTasks = [];

function addTask() {
  const taskInput = document.getElementById("task");
  if (taskValidateLength(taskInput.value)) {
    let taskTitle = taskInput.value;
    listAllTasks.push(taskTitle); // ADICIONANDO NO ARRAY
    innerTask(listAllTasks); // CHAMANDO A FUNÇÃO PARA INSERIR NO HTML
    taskInput.value = ""; // LIMPANDO O CAMPO DE TASK
    // LIMPANDO O ARRAY / JÁ QUE ELE FOI USADO PARA TRANSPORTAR OS VALORES
    listAllTasks = [];
  } else {
    // setError();
    console.log("ERRO");
  }
}

// VALIDANDO SE O TEXTO INSERIDO TEM MAIS DE 30 CARACTERES OU SE É VAZIO.
function taskValidateLength(task) {
  console.log(task);
  let isBigger = task.length === 0 || task.length > 30 ? false : true;
  return isBigger;
}

function innerTask(arrayList) {
  arrayList.forEach(insertHTML);
}

function insertHTML(element) {
  listHTML.innerHTML += `
  <li onclick="taskDelete(this)">
     <input id="checkbox" type="checkbox" />
     <label for="checkbox">${element}</label>
   </li>
   `;
}

// REMOVENDO TASK SELECIONADA.
function taskDelete(taskItem) {
  console.log(taskItem);
  taskItem.innerHTML = "";
}
