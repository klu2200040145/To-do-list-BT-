// Array to store tasks
var tasks = [];

// Function to add a new task
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        displayTasks();
        taskInput.value = '';
    }
}

// Function to display tasks
function displayTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(function(task, index) {
        var li = document.createElement('li');
        li.innerHTML = '<span class="task">' + task + '</span>' +
                        '<div class="actions">' +
                        '<button class="edit" onclick="editTask(' + index + ')">Edit</button>' +
                        '<button class="delete" onclick="deleteTask(' + index + ')">Delete</button>' +
                        '</div>';
        taskList.appendChild(li);
    });
}

// Function to edit a task
function editTask(index) {
    var newTaskText = prompt('Edit Task:', tasks[index]);
    if (newTaskText !== null) {
        tasks[index] = newTaskText.trim();
        displayTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        displayTasks();
    }
}
