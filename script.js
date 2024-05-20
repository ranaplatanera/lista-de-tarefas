const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasksList) {
  const ulTasks = document.querySelector(".tasks__list");
  
  ulTasks.innerHTML = "";

  for (let i = 0; i < tasksList.length; i++) {
    const currentTask = tasksList[i];
    const listItem = createTaskItem(currentTask);
    
    ulTasks.appendChild(listItem);

  }
}

function createTaskItem (taskInfo) {
  const liTask = document.createElement("li");
  const divTask = document.createElement("div");
  const spanTask = document.createElement("span");
  const pTask = document.createElement("p");
  const btnTask = document.createElement("button");
  
  liTask.append(
    divTask,
    btnTask,
  );

  divTask.append(
    spanTask,
    pTask,
  ); 

  liTask.classList.add("task__item");  
  divTask.classList.add("task-info__container");
  btnTask.classList.add("task__button--remove-task");   
  
  spanTask.classList.add("task-type");
  
  if (taskInfo.type === "Urgente") {
    spanTask.classList.add("span-urgent");
  } else if (taskInfo.type === "Importante") {
    spanTask.classList.add("span-important");
  } else if (taskInfo.type === "Normal") {
    spanTask.classList.add("span-normal");
  }

  pTask.innerText = taskInfo.title;

  btnTask.addEventListener("click", function () {
    const index = tasks.indexOf(taskInfo);

    tasks.splice(index, 1);

    renderElements(tasks);
  });
  
  return liTask;
}

renderElements(tasks);

function createNewTask() {
  const form = document.querySelector(".form__container");
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputTitle = document.querySelector("#input_title");
    const selectType = document.querySelector("#input_type");
    
      const newTask = {
      title: inputTitle.value.toLowerCase(),
      type: selectType.value,
    };

    tasks.push(newTask);
    renderElements(tasks);
    inputTitle.value = "";
    selectType.value = "";
  });
}

createNewTask();
renderElements(tasksList);