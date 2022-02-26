import {
   addTask
} from "./main.js";


const newHighInputText = document.querySelector('.new_task_input_high'), //Элементы для добавления задач в хай список
   addHighTaskBtn = document.querySelector('.new_task_btn_high'),
   highPriority = document.querySelector('.form__high');

const newLowInputText = document.querySelector('.new_task_input_low'), // Элементы для добавления задач в лоу список
   addLowTaskBtn = document.querySelector('.new_task_btn_low'),
   lowPriority = document.querySelector('.form__low');

addTask(addHighTaskBtn, newHighInputText, highPriority);

addTask(addLowTaskBtn, newLowInputText, lowPriority);

