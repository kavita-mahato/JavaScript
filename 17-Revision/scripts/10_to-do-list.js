"use strict";

const todoList = ["make dinner", "wash dishes"];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    // Generating the HTML using JS
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector(".js-todoList").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name");
  const name = inputElement.value;
  console.log(name);

  todoList.push(name);
  console.log(todoList);

  inputElement.value = "";

  renderTodoList();
}
