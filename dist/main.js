/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBLGE7QUFDQTtBQUNBLHFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsb0JBQW9CO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxjQUFjO0FBQ3ZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG9CQUFvQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxvQkFBb0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsb0JBQW9CO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxjQUFjO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGNBQWMsb0NBQW9DLGNBQWMsb0JBQW9CLGtCQUFrQjtBQUNsSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhc2sgPSBbXTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFRhc2tzIGNvbnN0cnVjdG9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIFxyXG5jbGFzcyBUYXNrcyB7ICAgICAgICAgIFxyXG4gIGNvbnN0cnVjdG9yKHRvZGF5LCBpbmJveCwgbGFiZWwsIHByaW9yaXR5KXtcclxuICB0aGlzLnRvZGF5ID0gdG9kYXk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gIHRoaXMuaW5ib3ggPSBpbmJveDtcclxuICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG59XHJcbi8vIHRvZ2dsZVJlYWQoKSB7XHJcbi8vICAgdGhpcy5wcmlvcml0eSA9ICF0aGlzLnByaW9yaXR5O1xyXG4vLyB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBhZGRUYWJsZUhlYWRpbmcoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKSkge1xyXG4gICAgYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICBjb25zdCByb3dIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICBjb25zdCBjb2xIZWFkVG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gIGNvbEhlYWRUb2RheS50ZXh0Q29udGVudCA9ICdUb2RheSc7XHJcbiAgcm93SGVhZC5hcHBlbmRDaGlsZChjb2xIZWFkVG9kYXkpO1xyXG4gIGNvbnN0IGNvbEhlYWRJbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgY29sSGVhZEluYm94LnRleHRDb250ZW50ID0gJ0luYm94JztcclxuICByb3dIZWFkLmFwcGVuZENoaWxkKGNvbEhlYWRJbmJveCk7XHJcbiAgY29uc3QgY29sSGVhZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICBjb2xIZWFkTGFiZWwudGV4dENvbnRlbnQgPSAnTGFiZWwnO1xyXG4gIHJvd0hlYWQuYXBwZW5kQ2hpbGQoY29sSGVhZExhYmVsKTtcclxuICBjb25zdCBjb2xIZWFkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gIGNvbEhlYWRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XHJcbiAgcm93SGVhZC5hcHBlbmRDaGlsZChjb2xIZWFkUHJpb3JpdHkpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrKGxpc3QsIGluZGV4KSB7XHJcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblxyXG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICB0b2RheS50ZXh0Q29udGVudCA9IGxpc3QudG9kYXk7XHJcbiAgcm93LmFwcGVuZENoaWxkKHRvZGF5KTtcclxuXHJcbiAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gIGluYm94LnRleHRDb250ZW50ID0gbGlzdC5pbmJveDtcclxuICByb3cuYXBwZW5kQ2hpbGQoaW5ib3gpO1xyXG5cclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBsaXN0LmxhYmVsO1xyXG4gIHJvdy5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGxpc3QucHJpb3JpdHk7XHJcbiAgcm93LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xyXG4gIGRlbGV0ZUNvbC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG4gIGRlbGV0ZUJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0YXNrLnNwbGljZShldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCwgMSk7XHJcbiAgICB0YWJsZS5yZW1vdmVDaGlsZChyb3cpO1xyXG4gIH07XHJcbiAgcm93LmFwcGVuZENoaWxkKGRlbGV0ZUNvbCk7XHJcblxyXG4gIC8vIGNvbnN0IHRvZ2dsZVJlYWRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gIGNvbnN0IHRvZ2dsZUFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHRvZ2dsZUFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NldCcpO1xyXG4gIC8vIGZ1bmN0aW9uIGNoZWNrKGxpc3QpIHtcclxuICAvLyAgIGlmIChsaXN0LnByaW9yaXR5KSB7XHJcbiAgLy8gICAgIC8vIHRvZ2dsZUFkZEJ0bi50ZXh0Q29udGVudCA9ICdVblJlYWQnO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgLy8gdG9nZ2xlQWRkQnRuLnRleHRDb250ZW50ID0gJ1JlYWQnO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICAvLyBjaGVjayhsaXN0KTtcclxuICB0b2dnbGVBZGRCdG4ub25jbGljayA9ICgpID0+IHtcclxuICAgIC8vIGxpc3QudG9nZ2xlUmVhZCgpO1xyXG4gICAgLy8gY2hlY2sobGlzdCk7XHJcbiAgICBhZGRUYWJsZUhlYWRpbmcoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFzay5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBhZGRUYXNrKHRhc2tbaV0sIGkpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICAvLyByb3cuYXBwZW5kQ2hpbGQodG9nZ2xlUmVhZENvbCk7XHJcbiAgLy8gdG9nZ2xlUmVhZENvbC5hcHBlbmRDaGlsZCh0b2dnbGVBZGRCdG4pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKCkge1xyXG4gIGFkZFRhYmxlSGVhZGluZygpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFzay5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgYWRkVGFzayh0YXNrW2ldLCBpKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrc1RvRG9MaXN0KHRvZGF5LCBpbmJveCwgbGFiZWwsIHByaW9yaXR5KSB7XHJcbiAgdGFzay5wdXNoKG5ldyBUYXNrcyh0b2RheSwgaW5ib3gsIGxhYmVsLCBwcmlvcml0eSkpOyAvL2NvbnN0cnVjdG9yXHJcbiAgZGlzcGxheVRhc2tzKCk7XHJcbn1cclxuXHJcbmRpc3BsYXlUYXNrcygpO1xyXG5cclxuY29uc3QgbmV3Qm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcclxuXHJcbm5ld0Jvb2sub25jbGljayA9ICgpID0+IHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29uc3QgbGFiZWxGb3JUb2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWxGb3JUb2RheS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RheScpO1xyXG4gIGxhYmVsRm9yVG9kYXkudGV4dENvbnRlbnQgPSAnVG9kYXknO1xyXG4gIGxhYmVsRm9yVG9kYXkuc3R5bGUuY3NzVGV4dCA9ICdmb250LXNpemU6IDIycHg7IG1hcmdpbi1yaWdodDogMTVweDsnXHJcbiAgY29uc3QgdG9kYXlGb3JUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0b2RheUZvclRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICB0b2RheUZvclRhc2suc2V0QXR0cmlidXRlKCdpZCcsICd0b2RheScpO1xyXG4gIHRvZGF5Rm9yVGFzay5zdHlsZS5jc3NUZXh0ID0gJ21hcmdpbjogMjVweCA1cHggNXB4IDVweDsgaGVpZ2h0OiAyMHB4OyBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjUyLCAxOCwgMTgpJ1xyXG4gIGxhYmVsRm9yVG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlGb3JUYXNrKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsRm9yVG9kYXkpO1xyXG5cclxuICBjb25zdCBsYWJlbEZvckluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbEZvckluYm94LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2luYm94Jyk7XHJcbiAgbGFiZWxGb3JJbmJveC50ZXh0Q29udGVudCA9ICdJbmJveCc7XHJcbiAgbGFiZWxGb3JJbmJveC5zdHlsZS5jc3NUZXh0ID0gJ2ZvbnQtc2l6ZTogMjJweDsgbWFyZ2luLXJpZ2h0OiAxNXB4OydcclxuICBjb25zdCBpbmJveEZvclRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGluYm94Rm9yVGFzay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIGluYm94Rm9yVGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luYm94Jyk7XHJcbiAgaW5ib3hGb3JUYXNrLnN0eWxlLmNzc1RleHQgPSAnbWFyZ2luOiAyNXB4IDVweCA1cHggNXB4OyBoZWlnaHQ6IDIwcHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTIsIDE4LCAxOCknXHJcbiAgbGFiZWxGb3JJbmJveC5hcHBlbmRDaGlsZChpbmJveEZvclRhc2spO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWxGb3JJbmJveCk7XHJcbiAgXHJcbiAgY29uc3QgbGFiZWxGb3JBZGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWxGb3JBZGRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsYWJlbCcpO1xyXG4gIGxhYmVsRm9yQWRkTGFiZWwudGV4dENvbnRlbnQgPSAnQWRkIExhYmVsJztcclxuICBsYWJlbEZvckFkZExhYmVsLnN0eWxlLmNzc1RleHQgPSAnZm9udC1zaXplOiAyMnB4OyBtYXJnaW4tcmlnaHQ6IDE1cHg7J1xyXG4gIGNvbnN0IGxhYmVsRm9yVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgbGFiZWxGb3JUYXNrLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgbGFiZWxGb3JUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGFiZWwnKTtcclxuICBsYWJlbEZvclRhc2suc3R5bGUuY3NzVGV4dCA9ICdtYXJnaW46IDI1cHggNXB4IDVweCA1cHg7IGhlaWdodDogMjBweDsgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1MiwgMTgsIDE4KSdcclxuICBsYWJlbEZvckFkZExhYmVsLmFwcGVuZENoaWxkKGxhYmVsRm9yVGFzayk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbEZvckFkZExhYmVsKTtcclxuICBcclxuICBjb25zdCBsYWJlbEZvclByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbEZvclByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XHJcbiAgbGFiZWxGb3JQcmlvcml0eS50ZXh0Q29udGVudCA9ICdTZXQgUHJpb3JpdHknO1xyXG4gIGxhYmVsRm9yUHJpb3JpdHkuc3R5bGUuY3NzVGV4dCA9ICdmb250LXNpemU6IDIycHg7IG1hcmdpbi1yaWdodDogMTVweDsnXHJcbiAgY29uc3QgcHJpb3JpdHlGb3JUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBwcmlvcml0eUZvclRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBwcmlvcml0eUZvclRhc2suc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xyXG4gIHByaW9yaXR5Rm9yVGFzay5zdHlsZS5jc3NUZXh0ID0gJ21hcmdpbjogMjVweCA1cHggNXB4IDVweDsgaGVpZ2h0OiAyMHB4OyBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjUyLCAxOCwgMTgpJ1xyXG4gIGxhYmVsRm9yUHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlGb3JUYXNrKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsRm9yUHJpb3JpdHkpO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgc3VibWl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkIFRhc2snKTtcclxuICBzdWJtaXQuc3R5bGUuY3NzVGV4dCA9ICdwYWRkaW5nOiA1cHggMTJweDsgY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAxOCwgMTgpOyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDVweDsgZm9udC1zaXplOiBsYXJnZTsnXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xyXG4gIHN1Ym1pdC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgYWRkVGFza3NUb0RvTGlzdCh0b2RheUZvclRhc2sudmFsdWUsIGluYm94Rm9yVGFzay52YWx1ZSxcclxuICAgICAgbGFiZWxGb3JUYXNrLnZhbHVlLCBwcmlvcml0eUZvclRhc2suY2hlY2tlZCk7XHJcbiAgICBib2R5LnJlbW92ZUNoaWxkKGZvcm0pO1xyXG4gIH07XHJcbiAgYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9