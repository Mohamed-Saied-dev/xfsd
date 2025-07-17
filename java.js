let form = document.querySelector("form");
let textInput = document.querySelector(".input");
let addButton = document.querySelector(".add");
let tasksContainer = document.querySelector(".tasks");
let arrayOfTasks = [];
let tempArray = [];
let uniqueId = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (textInput.value.trim() !== ""){
    addTask(textInput.value);
    console.log("hi");
    textInput.value = "";
    }
})
window.onload = function() {
    tempArray = JSON.parse(localStorage.getItem("tasks")) || [];
    localStorage.removeItem("tasks");
    tempArray.forEach((ele) => {
        addTask(ele.title);
    })
}
// function for add new Task
function addTask(text) {
    let task = document.createElement("div");
    let taskText = document.createElement("span");
    let deleteButton = document.createElement("button");
    taskText.append(text);
    taskText.setAttribute("class", "task-text");
    deleteButton.setAttribute("class", "delete");
    deleteButton.append("delete");
    task.appendChild(taskText);
    task.appendChild(deleteButton);
    task.setAttribute("class", "task");
    tasksContainer.appendChild(task);
    let id = Date.now() + uniqueId;
    arrayOfTasks.push({
        id: Date.now() + uniqueId,
        title: text,
    })
    uniqueId++;
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
    deleteButton.addEventListener("click", () => {
        arrayOfTasks = arrayOfTasks.filter((ele) => {      
            return ele.id !== id;
        })
        window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
        task.remove();
        
    });
  
}