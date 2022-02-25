const newHighTaskText = document.querySelector('.new_task_input_high'),
   btnHigh = document.querySelector('.new_task_btn_high'),
   taskList = document.querySelector('.task_list_high'),
   formHigh = document.querySelector('.form__high');


btnHigh.addEventListener('click', (e) => {
   e.preventDefault();
   if (newHighTaskText.value !== '') {
      let addHighTask = document.createElement('div');
      addHighTask.className = 'task_list task_list_high';
      addHighTask.innerHTML = `<input type="checkbox" class="checkbox" name="" id="">
   <p class="task_text">${newHighTaskText.value}</p>
   <button class="remove_btn"></button>`;
      formHigh.append(addHighTask);
      newHighTaskText.value = '';
   }
});

function addTask () {
   
}