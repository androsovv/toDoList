const list = [{
      name: 'finish to do list',
      status: 'In progress',
      priority: 'high'
   },
   {
      name: 'go to work',
      status: 'Done',
      priority: 'medium'
   },
   {
      name: 'walk the dog',
      status: 'Done',
      priority: 'high'
   },
];

let strToDo = 'To do:\n',
   strInProgress = 'In Progress:\n',
   strDone = 'Done:\n',
   countToDo = 0,
   countInProgress = 0,
   countDone = 0;


function changeStatus(task, progress) {
   let change = list.find(item => item.name == task);
   change.status = progress;
}

function addTask(task, priority) {
   let newTask = list.push({
      name: task,
      status: 'To Do',
      priority: priority
   });
}

function deleteTask(task) {
   let deleteTask = list.findIndex(item => item.name == task);
   list.splice(deleteTask, 1);
}

function showList(arr) {
   arr.forEach(item => {
      if (item.status === 'To Do') {
         strToDo += `"${item.name}"\n`;
         countToDo++;
      }
      if (item.status === 'In progress') {
         strInProgress += `"${item.name}"\n`;
         countInProgress++;
      }
      if (item.status === 'Done') {
         strDone += `"${item.name}"\n`;
         countDone++;
      }
   });
   if (countToDo === 0) {
      strToDo += '-\n';
   }
   if (countInProgress === 0) {
      strInProgress += '-\n';
   }
   if (countDone === 0) {
      strDone += '-\n';
   }
   console.log(strToDo, strInProgress, strDone);
}

changeStatus('go to work', 'To Do');

addTask('go to bank', 'low');
changeStatus('go to bank', 'Done');
deleteTask('go to work');

showList(list);