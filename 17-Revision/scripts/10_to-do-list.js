"use strict";

const todoList = [
  {
    name: "Make dinner",
    dueDate: "2025-06-20",
  },
  {
    name: "Wash dishes",
    dueDate: "2025-06-21",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    // Generating the HTML using JS
    const html = `<div>${name}</div>
      <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i},1);
    renderTodoList();" class="delete-button">Delete</button>`;
    todoListHTML += html;
  }

  document.querySelector(".js-todoList").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name");
  const name = inputElement.value;

  const dueinputElement = document.querySelector(".js-due-date");
  const dueDate = dueinputElement.value;

  todoList.push({
    name,
    dueDate,
  });
  console.log(todoList);

  inputElement.value = "";

  renderTodoList();
}
