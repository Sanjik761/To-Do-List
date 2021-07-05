const task = [];

// -----------------------------------------------------
// Tasks constructor                                    |   
class Tasks {          
  constructor(today, inbox, label, priority){
  this.today = today;                                  
  this.inbox = inbox;
  this.label = label;
  this.priority = priority;
}
// toggleRead() {
//   this.priority = !this.priority;
// }
}

//-------------------------------------------------------
function addTableHeading() {
  const body = document.querySelector('body');
  if (document.querySelector('table')) {
    body.removeChild(document.querySelector('table'));
  }

  const table = document.createElement('table');
  const rowHead = document.createElement('tr');
  const colHeadToday = document.createElement('th');
  colHeadToday.textContent = 'Today';
  rowHead.appendChild(colHeadToday);
  const colHeadInbox = document.createElement('th');
  colHeadInbox.textContent = 'Inbox';
  rowHead.appendChild(colHeadInbox);
  const colHeadLabel = document.createElement('th');
  colHeadLabel.textContent = 'Label';
  rowHead.appendChild(colHeadLabel);
  const colHeadPriority = document.createElement('th');
  colHeadPriority.textContent = 'Priority';
  rowHead.appendChild(colHeadPriority);
  body.appendChild(table);
}

function addTask(list, index) {
  const table = document.querySelector('table');
  const row = document.createElement('tr');

  const today = document.createElement('td');
  today.textContent = list.today;
  row.appendChild(today);

  const inbox = document.createElement('td');
  inbox.textContent = list.inbox;
  row.appendChild(inbox);

  const label = document.createElement('td');
  label.textContent = list.label;
  row.appendChild(label);

  const priority = document.createElement('td');
  priority.textContent = list.priority;
  row.appendChild(priority);

  const deleteCol = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('data-index', index);
  deleteBtn.textContent = 'Delete';
  deleteCol.appendChild(deleteBtn);
  deleteBtn.onclick = (event) => {
    task.splice(event.target.dataset.index, 1);
    table.removeChild(row);
  };
  row.appendChild(deleteCol);

  // const toggleReadCol = document.createElement('td');
  const toggleAddBtn = document.createElement('button');
  toggleAddBtn.setAttribute('class', 'set');
  // function check(list) {
  //   if (list.priority) {
  //     // toggleAddBtn.textContent = 'UnRead';
  //   } else {
  //     // toggleAddBtn.textContent = 'Read';
  //   }
  // }
  // check(list);
  toggleAddBtn.onclick = () => {
    // list.toggleRead();
    // check(list);
    addTableHeading();
    for (let i = 0; i < task.length; i += 1) {
      addTask(task[i], i);
    }
  };
  table.appendChild(row);
  // row.appendChild(toggleReadCol);
  // toggleReadCol.appendChild(toggleAddBtn);
}


function displayTasks() {
  addTableHeading();
  for (let i = 0; i < task.length; i += 1) {
    addTask(task[i], i);
  }
}


function addTasksToDoList(today, inbox, label, priority) {
  task.push(new Tasks(today, inbox, label, priority)); //constructor
  displayTasks();
}

displayTasks();

const newBook = document.querySelector('.btn');

newBook.onclick = () => {
  const body = document.querySelector('body');
  const form = document.createElement('form');
  const labelForToday = document.createElement('label');
  labelForToday.setAttribute('for', 'today');
  labelForToday.textContent = 'Today';
  labelForToday.style.cssText = 'font-size: 22px; margin-right: 15px;'
  const todayForTask = document.createElement('input');
  todayForTask.setAttribute('type', 'text');
  todayForTask.setAttribute('id', 'today');
  todayForTask.style.cssText = 'margin: 25px 5px 5px 5px; height: 20px; border: 1px solid rgb(252, 18, 18)'
  labelForToday.appendChild(todayForTask);
  form.appendChild(labelForToday);

  const labelForInbox = document.createElement('label');
  labelForInbox.setAttribute('for', 'inbox');
  labelForInbox.textContent = 'Inbox';
  labelForInbox.style.cssText = 'font-size: 22px; margin-right: 15px;'
  const inboxForTask = document.createElement('input');
  inboxForTask.setAttribute('type', 'text');
  inboxForTask.setAttribute('id', 'inbox');
  inboxForTask.style.cssText = 'margin: 25px 5px 5px 5px; height: 20px; border: 1px solid rgb(252, 18, 18)'
  labelForInbox.appendChild(inboxForTask);
  form.appendChild(labelForInbox);
  
  const labelForAddLabel = document.createElement('label');
  labelForAddLabel.setAttribute('for', 'label');
  labelForAddLabel.textContent = 'Add Label';
  labelForAddLabel.style.cssText = 'font-size: 22px; margin-right: 15px;'
  const labelForTask = document.createElement('input');
  labelForTask.setAttribute('type', 'text');
  labelForTask.setAttribute('id', 'label');
  labelForTask.style.cssText = 'margin: 25px 5px 5px 5px; height: 20px; border: 1px solid rgb(252, 18, 18)'
  labelForAddLabel.appendChild(labelForTask);
  form.appendChild(labelForAddLabel);
  
  const labelForPriority = document.createElement('label');
  labelForPriority.setAttribute('for', 'priority');
  labelForPriority.textContent = 'Set Priority';
  labelForPriority.style.cssText = 'font-size: 22px; margin-right: 15px;'
  const priorityForTask = document.createElement('input');
  priorityForTask.setAttribute('type', 'text');
  priorityForTask.setAttribute('id', 'priority');
  priorityForTask.style.cssText = 'margin: 25px 5px 5px 5px; height: 20px; border: 1px solid rgb(252, 18, 18)'
  labelForPriority.appendChild(priorityForTask);
  form.appendChild(labelForPriority);

  const submit = document.createElement('input');
  submit.setAttribute('type', 'button');
  submit.setAttribute('value', 'Add Task');
  submit.style.cssText = 'padding: 5px 12px; color: white; background-color: rgb(252, 18, 18); border: none; border-radius: 5px; font-size: large;'
  form.appendChild(submit);
  submit.onclick = () => {
    addTasksToDoList(todayForTask.value, inboxForTask.value,
      labelForTask.value, priorityForTask.checked);
    body.removeChild(form);
  };
  body.appendChild(form);
};