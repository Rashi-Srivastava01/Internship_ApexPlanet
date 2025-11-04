const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


window.onload = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => createTaskElement(task.text, task.completed));
};

//Add Task 
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  createTaskElement(taskText);
  saveTasks();
  taskInput.value = "";
});

//Create Task Element 
function createTaskElement(text, completed = false) {
  const li = document.createElement("li");
  li.classList.add("task");
  if (completed) li.classList.add("completed");
  li.textContent = text;

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("buttons");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("btn", "edit");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("btn", "delete");

  btnDiv.append(editBtn, deleteBtn);
  li.appendChild(btnDiv);
  taskList.appendChild(li);

  // Toggle complete
  li.addEventListener("click", (e) => {
    if (e.target !== editBtn && e.target !== deleteBtn) {
      li.classList.toggle("completed");
      saveTasks();
    }
  });

  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit your task:", text);
    if (newText !== null && newText.trim() !== "") {
      li.firstChild.textContent = newText.trim();
      saveTasks();
    }
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll(".task").forEach(task => {
    tasks.push({
      text: task.firstChild.textContent,
      completed: task.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
