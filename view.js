const newHighInputText = document.querySelector('.new_task_input_high'),
   addHighTaskBtn = document.querySelector('.new_task_btn_high'),
   highPriority = document.querySelector('.form__high');

const newLowInputText = document.querySelector('.new_task_input_low'),
   addLowTaskBtn = document.querySelector('.new_task_btn_low'),
   lowPriority = document.querySelector('.form__low');



export function addTask(addTaskBtn, inputText, priority) {
   addTaskBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (inputText.value !== '') {
         let addTask = document.createElement('div');
         addTask.className = 'task_list';
         addTask.innerHTML = `<input type="checkbox" class="checkbox" name="" id="">
      <p class="task_text">${inputText.value}</p>
      <button class="remove_btn"></button>`;
         priority.append(addTask);
         inputText.value = '';
      }
   });
}

addTask(addHighTaskBtn, newHighInputText, highPriority);

addTask(addLowTaskBtn, newLowInputText,lowPriority);