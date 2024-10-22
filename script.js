// DOM Elements
const addTaskBtn = document.getElementById('add-task-btn');
const taskTitleInput = document.getElementById('task-title');
const taskDaySelect = document.getElementById('task-day');
const taskCategoryInput = document.getElementById('task-category');
const taskTimeInput = document.getElementById('task-time');
const cycleTasksBtn = document.getElementById('cycle-tasks-btn');

// Task Display Sections
const yesterdayTasks = document.getElementById('yesterday-tasks');
const todayTasks = document.getElementById('today-tasks');
const tomorrowTasks = document.getElementById('tomorrow-tasks');

// Event Listener to Add Task
addTaskBtn.addEventListener('click', addTask);

// Event Listener to Cycle Tasks
cycleTasksBtn.addEventListener('click', cycleTasks);

// Add Task Function
function addTask() {
    const title = taskTitleInput.value;
    const day = taskDaySelect.value;
    const category = taskCategoryInput.value;
    const time = taskTimeInput.value;

    if (!title || !category || !time) {
        alert('Please fill all fields');
        return;
    }

    const taskRow = document.createElement('tr');
    taskRow.innerHTML = `
        <td>${title}</td>
        <td>${day}</td>
        <td>${category}</td>
        <td>${time}</td>
    `;

    if (day === 'today') {
        todayTasks.appendChild(taskRow);
    } else if (day === 'tomorrow') {
        tomorrowTasks.appendChild(taskRow);
    }

    clearFields();
}

// Clear Input Fields
function clearFields() {
    taskTitleInput.value = '';
    taskCategoryInput.value = '';
    taskTimeInput.value = '';
}

// Cycle Tasks Function
function cycleTasks() {
    // Move today's tasks to yesterday
    yesterdayTasks.innerHTML = todayTasks.innerHTML;

    // Move tomorrow's tasks to today
    todayTasks.innerHTML = tomorrowTasks.innerHTML;

    // Clear tomorrow's tasks
    tomorrowTasks.innerHTML = '';
}
