// 1. 網頁一載入，就先從 localStorage 讀取舊資料
window.onload = function() {
    const savedTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
    savedTasks.forEach(taskText => {
        createTaskElement(taskText);
    });
};

function addTask() {
    const input = document.getElementById('todoInput');
    const taskText = input.value.trim();

    if (taskText === "") return;

    createTaskElement(taskText); // 畫在畫面上
    saveToStorage();             // 存入抽屜
    input.value = "";
}

// 2. 專門負責把任務「畫」到 HTML 上的 function
function createTaskElement(taskText) {
    const ul = document.getElementById('todoList');
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">刪除</button>
    `;
    ul.appendChild(li);
}

function deleteTask(btn) {
    btn.parentElement.remove();
    saveToStorage(); // 刪除後也要同步更新抽屜
}

// 3. 核心：把目前畫面上所有的任務內容抓下來，存進 localStorage
function saveToStorage() {
    const tasks = [];
    const allTasks = document.querySelectorAll('#todoList li span');
    allTasks.forEach(span => {
        tasks.push(span.innerText);
    });
    // 將陣列轉成字串存進去
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}
