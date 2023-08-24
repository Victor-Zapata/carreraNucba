// DEFINIR LAS VARIABLES NECESARIAS DE LOS ELEMENTOS HTML
const taskInput = document.querySelector('.input-text');
const addForm = document.querySelector('.add-form');
const tasksContainer = document.querySelector('.tasks-list');
const deleteAllBtn = document.querySelector('.deleteAll-btn');

//Definimos la lista de tareas. Si existe un array de tarea en el LS vamos a traer esa lista, pero en caso que no esté, será un array vacío
let taskList = JSON.parse(localStorage.getItem('tasks') || []);

//función que guarda en el LS el array de tareas
const saveLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(taskList));
};

//Función que crea el HTML de una tarea
//función generadora
const createTask = (task) => 
`<li>${task.name}<img class="delete-btn" src="./img/delete.svg" alt="boton de borrar" data-id="${task.id}"></li>`;

//Función que renderiza la lista de tareas
//el .join() es para evitar que aparezca una coma entre las tareas a la hora de renderizar
const renderTaskList = () => {
  tasksContainer.innerHTML = taskList.map((task) => createTask(task).join(""));
};


//función que oculta o muestra el botón borrar todas las tareas. Depender de si el array esta vacío o no.
const toggleDeleteAllButton = () => {
  if (!taskList.length) {
    deleteAllBtn.classList.add('hidden');
    return /*para que no se siga ejecutando*/
  }
  deleteAllBtn.classList.remove('hidden');
}

//función que convierte el value del taskInput en un string sin espacios al principio y al final(trim) y sin multiespaciado interno(replace)
const correctInputValue = () => {
  return taskInput.value.trim().replace(/\s+/g, " ");
};

//función que verifica si la tarea ingresada es válida (no vacía y no repetida)
const isValidTask = (taskName) => {
  let isValid = true;
  if (!taskName.length) {
    alert("Por favor, ingresa una tarea");
    isValid = false;
  } else if (taskList.some((task) => task.name.toLowerCase() === taskName.toLowerCase())) {
    alert("Ya existe una tarea con ese nombre");
    isValid = false;
  }
  return isValid;
}

const addTask = (e) => {
  e.preventDefault();
  const taskName = correctInputValue();
  if (isValidTask(taskName)) {
    taskList = [...taskList, { name: taskName, id: Date.now() }];
    addForm.reset();
    renderTaskList();
    saveLocalStorage();
    toggleDeleteAllButton();
  }
};

const removeTask = (e) => {
  if (!e.target.classList.contains('delete-btn')) return;
  const filterID = Number(e.target.dataset.id);
  taskList = taskList.filter((task) => task.id !== filterID);
  renderTaskList();
  saveLocalStorage();
  toggleDeleteAllButton();
};

//función que borra todas las tareas del array de tareas
//convertimos la tasklist de nuevo en un array vacío y volvemos a realizar los pasos de renderizar la lista de tareas, guardar en LS y verificar si se debe mostrar o no el botón de borrar

const removeAll = () => {
  taskList = [];
  renderTaskList();
  saveLocalStorage();
  toggleDeleteAllButton();
}

// const init = () => {
//   //ejecutar renderTaskList en el evento DOMContentLoaded
//   document.addEventListener('DOMContentLoaded', renderTaskList);
//   document.addEventListener('DOMContentLoaded', toggleDeleteAllButton);
//   addForm.addEventListener('submit', addTask);
//   tasksContainer.addEventListener('click', removeTask);
//   deleteAllBtn.addEventListener('click', removeAll);
// };



// //ejecutar la función init
// init();

const hola = () => {
  console.log('hola');
};

const chau = () => {
  console.log('chau');
};

const taLuego = () => {
  const nosVemos = () => {
    console.log('nosvemos');
  }
  nosVemos()
}


