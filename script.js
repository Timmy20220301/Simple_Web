function addTask() {
    const input = document.getElementById('todoInput');
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("請輸入內容！");
        return;
    }

    const ul = document.getElementById('todoList');
    
    // 建立新的一列 (li)
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">刪除</button>
    `;

    ul.appendChild(li);
    input.value = ""; // 清空輸入框
}

function deleteTask(btn) {
    // 刪除該按鈕所在的 li
    btn.parentElement.remove();
}
