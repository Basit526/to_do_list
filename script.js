let taskList = document.getElementById("taskList");
let newTask = document.getElementById("newTask");

function addTask() {
  if (newTask.value !== "") {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = newTask.value;
    let button = document.createElement("button");
    button.innerText = "Delete";
    button.onclick = function() {
      li.remove();
    };
    li.appendChild(span);
    li.appendChild(button);
    taskList.appendChild(li);
    newTask.value = "";
  }
}
