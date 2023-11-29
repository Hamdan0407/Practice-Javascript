let btn = document.getElementById('addButton')
let input = document.getElementById('taskInput')
let cont = document.getElementsByClassName('todo-container')
let tasks = document.getElementById('taskList')

btn.addEventListener("click", ()=>{
  let p = document.createElement('li')
  p.innerHTML=`${input.value}<i class="fa-solid fa-trash delete"></i>`

  p.classList.add('task-item');
  input.value=''
  tasks.appendChild(p)
})

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    let taskItem = e.target.closest('.task-item');
    if (taskItem) {
      taskItem.classList.add('line')
      // tasks.removeChild(taskItem);
    }
  }
});

