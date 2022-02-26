export function addTask(addTaskBtn, inputText, priority) {
   addTaskBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (inputText.value !== '') {
         let addTask = document.createElement('div');
         addTask.className = 'task_list';
         addTask.innerHTML = `<input type="checkbox" class="checkbox" name="" id="">
      <p class="task_text">${inputText.value}</p>
      <button type="button" class="remove_btn" onclick="parentElement.remove()"></button>`;
         priority.append(addTask);
         inputText.value = '';

         const checkbox = document.querySelectorAll('.checkbox'),
            text = document.querySelectorAll('.task_text');

         checkbox.forEach(item => {
           item.addEventListener('click', () => {
            text.forEach(item => {
              item.classList.toggle('through');
            });
           });
         });
      }
   });

}