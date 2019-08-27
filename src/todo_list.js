let todos = JSON.parse(localStorage.getItem("todotask")) || [];

console.log(JSON.parse(localStorage.getItem("todotask")));

let ulElement = document.querySelector(".todos");

let formElement = document.querySelector(".add-todo-form");



function addTodo(e) {
  e.preventDefault();
  let taskValue = document.getElementsByName("add-todo")[0].value;
  let todo = { done: false, task: taskValue };
  todos.push(todo);   
  console.log(todos);
  document.getElementsByName("add-todo")[0].value = "";
  ulElement = document.querySelector(".todos").innerHTML = "";

  localStorage.setItem("todotask", JSON.stringify(todos));

  populateList(todos);
}

function populateList(todos) {

  todos.forEach(el => {
    let label = document.createElement("label");
    label.innerHTML = el.task;
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    let litag = document.createElement("li");
    litag.appendChild(label);
    litag.appendChild(checkbox);
    ulElement = document.querySelector(".todos");
    ulElement.appendChild(litag);
  });

}


populateList(todos);
formElement.addEventListener("submit", addTodo);


function handlecheckbox(event) {
  event.preventDefault();
  todos.forEach( el => {
    
  })
}

ulElement.addEventListener("click", handlecheckbox);
