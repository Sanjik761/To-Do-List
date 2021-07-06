const task = [];

class Tasks {          
  constructor(today, inbox, label, priority){
  this.today = today;                                  
  this.inbox = inbox;
  this.label = label;
  this.priority = priority;
}
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
  deleteCol.style.cssText = 'text-align: center'
  deleteBtn.textContent = 'Delete';
  deleteBtn.style.cssText = 'text-align: center; background-color: rgb(252, 18, 18); color: white; border: none; padding: 5px 10px; border-radius: 5px'
  deleteCol.appendChild(deleteBtn);
  deleteBtn.onclick = (event) => {
    task.splice(event.target.dataset.index, 1);
    table.removeChild(row);
  };
  row.appendChild(deleteCol);

  const toggleAddBtn = document.createElement('button');
  toggleAddBtn.setAttribute('class', 'set');
  table.appendChild(row);
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
  const body = document.querySelector('body');
  const form = document.createElement('form');
  const labelForToday = document.createElement('label');
  labelForToday.setAttribute('for', 'today');
  labelForToday.textContent = 'Weekdays';
  labelForToday.style.cssText = 'font-size: 22px; margin-right: 15px;'
  const todayForTask = document.querySelector('select');
  todayForTask.style.cssText = 'display: inline; margin: 25px 5px 5px 5px; height: 20px; border: 1px solid rgb(252, 18, 18)'
  labelForToday.appendChild(todayForTask);
  form.appendChild(labelForToday);

  const labelForInbox = document.createElement('label');
  labelForInbox.setAttribute('for', 'inbox');
  labelForInbox.textContent = 'Tasks';
  labelForInbox.style.cssText = 'font-size: 22px; margin-right: 15px;'
  const inboxForTask = document.createElement('input');
  inboxForTask.setAttribute('type', 'text');
  inboxForTask.setAttribute('id', 'inbox');
  inboxForTask.style.cssText = 'margin: 25px 5px 5px 5px; height: 20px; border: 1px solid rgb(252, 18, 18)'
  labelForInbox.appendChild(inboxForTask);
  form.appendChild(labelForInbox);
  
  const labelForAddLabel = document.createElement('label');
  labelForAddLabel.setAttribute('for', 'label');
  labelForAddLabel.textContent = 'Importance Level';
  labelForAddLabel.style.cssText = 'font-size: 22px; margin-right: 15px;'
  const labelForTask = document.querySelector('select');
  labelForTask.style.cssText = 'display: inline; margin: 25px 5px 5px 5px; height: 20px; border: 1px solid rgb(252, 18, 18)'
  labelForAddLabel.appendChild(labelForTask);
  form.appendChild(labelForAddLabel);
  
  const labelForCommit = document.createElement('label');
  labelForCommit.setAttribute('for', 'priority');
  labelForCommit.textContent = 'Commit';
  labelForCommit.style.cssText = 'font-size: 22px; margin-right: 15px;'
  const commitForTask = document.createElement('input');
  commitForTask.setAttribute('type', 'text');
  commitForTask.setAttribute('id', 'priority');
  commitForTask.style.cssText = 'margin: 25px 5px 5px 5px; height: 20px; border: 1px solid rgb(252, 18, 18)'
  labelForCommit.appendChild(commitForTask);
  form.appendChild(labelForCommit);

  const submit = document.createElement('input');
  submit.setAttribute('type', 'button');
  submit.setAttribute('value', 'Add +');
  submit.style.cssText = 'padding: 5px 12px; color: white; background-color: rgb(252, 18, 18); border: none; border-radius: 5px; font-size: large;'
  form.appendChild(submit);
  submit.onclick = () => {
    addTasksToDoList(todayForTask.value, inboxForTask.value,
      labelForTask.value, commitForTask.value);
  };
  body.appendChild(form);