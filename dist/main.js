/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// const { stat } = require("fs");

// const { runInContext } = require("vm");

const myLibrary = [];

// Book constructor
// function Book(title, author, pages, status) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.status = status;
// }

// Factory function start
// function Book(title, author, pages, status) {
//   const newBookObject = Object.create(Book.proto);
//   newBookObject.title = title;
//   newBookObject.author = author;
//   newBookObject.pages = pages;
//   newBookObject.status = status;
//   return newBookObject;
// }
// Factory function end

// Class
class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  toggleRead() {
    this.status = !this.status;
  }
}

// constructor type
// Book.prototype.toggleRead = toggle
// function toggle() {
//   this.status = !this.status;
// }

// constructor

// factory function start
// Book.proto = {
//   toggleRead: toggle,
// };

// factory function end

function addTableHeading() {
  const body = document.querySelector('body');
  if (document.querySelector('table')) {
    body.removeChild(document.querySelector('table'));
  }

  const table = document.createElement('table');
  const rowHead = document.createElement('tr');
  const colHeadTitle = document.createElement('th');
  colHeadTitle.textContent = 'Title';
  rowHead.appendChild(colHeadTitle);
  const colHeadAuthor = document.createElement('th');
  colHeadAuthor.textContent = 'Author';
  rowHead.appendChild(colHeadAuthor);
  const colHeadPages = document.createElement('th');
  colHeadPages.textContent = 'Pages';
  rowHead.appendChild(colHeadPages);
  const colHeadStatus = document.createElement('th');
  colHeadStatus.textContent = 'Read Status';
  rowHead.appendChild(colHeadStatus);

  body.appendChild(table);
}

function addBookRecord(book, index) {
  const table = document.querySelector('table');
  const row = document.createElement('tr');

  const title = document.createElement('td');
  title.textContent = book.title;
  row.appendChild(title);

  const author = document.createElement('td');
  author.textContent = book.author;
  row.appendChild(author);

  const pages = document.createElement('td');
  pages.textContent = book.pages;
  row.appendChild(pages);

  const status = document.createElement('td');
  status.textContent = book.status;
  row.appendChild(status);

  const deleteCol = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('data-index', index);
  deleteBtn.textContent = 'Delete';
  deleteCol.appendChild(deleteBtn);
  deleteBtn.onclick = (event) => {
    myLibrary.splice(event.target.dataset.index, 1);
    table.removeChild(row);
  };
  row.appendChild(deleteCol);

  const toggleReadCol = document.createElement('td');
  const toggleReadBtn = document.createElement('button');
  toggleReadBtn.setAttribute('class', 'set');
  function check(book) {
    if (book.status) {
      toggleReadBtn.textContent = 'UnRead';
    } else {
      toggleReadBtn.textContent = 'Read';
    }
  }
  check(book);
  toggleReadBtn.onclick = () => {
    book.toggleRead();
    check(book);
    addTableHeading();
    for (let i = 0; i < myLibrary.length; i += 1) {
      addBookRecord(myLibrary[i], i);
    }
  };
  table.appendChild(row);
  row.appendChild(toggleReadCol);
  toggleReadCol.appendChild(toggleReadBtn);
}


function displayBooks() {
  addTableHeading();
  for (let i = 0; i < myLibrary.length; i += 1) {
    addBookRecord(myLibrary[i], i);
  }
}


function addBookToLibrary(title, author, pages, status) {
  // myLibrary.push(new Book(title, author, pages, status)); constructor
  const createBook = new Book(title, author, pages, status); // factory function
  myLibrary.push(createBook);
  displayBooks();
}

displayBooks();

const newBook = document.querySelector('.btn');

newBook.onclick = () => {
  const body = document.querySelector('body');
  const form = document.createElement('form');
  const labelForTitle = document.createElement('label');
  labelForTitle.setAttribute('for', 'title');
  labelForTitle.textContent = 'Title';
  const titleForBook = document.createElement('input');
  titleForBook.setAttribute('type', 'text');
  titleForBook.setAttribute('id', 'title');
  labelForTitle.appendChild(titleForBook);
  form.appendChild(labelForTitle);

  const labelForAuthor = document.createElement('label');
  labelForAuthor.setAttribute('for', 'author');
  labelForAuthor.textContent = 'Author';
  const authorForBook = document.createElement('input');
  authorForBook.setAttribute('type', 'text');
  authorForBook.setAttribute('id', 'author');
  labelForAuthor.appendChild(authorForBook);
  form.appendChild(labelForAuthor);

  const labelForPages = document.createElement('label');
  labelForPages.setAttribute('for', 'pages');
  labelForPages.textContent = 'Number of pages';
  const pagesForBook = document.createElement('input');
  pagesForBook.setAttribute('type', 'text');
  pagesForBook.setAttribute('id', 'pages');
  labelForPages.appendChild(pagesForBook);
  form.appendChild(labelForPages);

  const labelForReadStatus = document.createElement('label');
  labelForReadStatus.setAttribute('for', 'status');
  labelForReadStatus.textContent = 'Click if you have finished the book';
  const statusForBook = document.createElement('input');
  statusForBook.setAttribute('type', 'checkbox');
  statusForBook.setAttribute('id', 'status');
  labelForReadStatus.appendChild(statusForBook);
  form.appendChild(labelForReadStatus);

  const submit = document.createElement('input');
  submit.setAttribute('type', 'button');
  submit.setAttribute('value', 'Add to the Library');
  form.appendChild(submit);
  submit.onclick = () => {
    addBookToLibrary(titleForBook.value, authorForBook.value,
      pagesForBook.value, statusForBook.checked);
    body.removeChild(form);
  };
  body.appendChild(form);
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uby1Eby1MaXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsVUFBVSxPQUFPOztBQUVqQixVQUFVLGVBQWU7O0FBRXpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDREQUE0RDtBQUM1RCw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgeyBzdGF0IH0gPSByZXF1aXJlKFwiZnNcIik7XHJcblxyXG4vLyBjb25zdCB7IHJ1bkluQ29udGV4dCB9ID0gcmVxdWlyZShcInZtXCIpO1xyXG5cclxuY29uc3QgbXlMaWJyYXJ5ID0gW107XHJcblxyXG4vLyBCb29rIGNvbnN0cnVjdG9yXHJcbi8vIGZ1bmN0aW9uIEJvb2sodGl0bGUsIGF1dGhvciwgcGFnZXMsIHN0YXR1cykge1xyXG4vLyAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuLy8gICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcclxuLy8gICB0aGlzLnBhZ2VzID0gcGFnZXM7XHJcbi8vICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbi8vIH1cclxuXHJcbi8vIEZhY3RvcnkgZnVuY3Rpb24gc3RhcnRcclxuLy8gZnVuY3Rpb24gQm9vayh0aXRsZSwgYXV0aG9yLCBwYWdlcywgc3RhdHVzKSB7XHJcbi8vICAgY29uc3QgbmV3Qm9va09iamVjdCA9IE9iamVjdC5jcmVhdGUoQm9vay5wcm90byk7XHJcbi8vICAgbmV3Qm9va09iamVjdC50aXRsZSA9IHRpdGxlO1xyXG4vLyAgIG5ld0Jvb2tPYmplY3QuYXV0aG9yID0gYXV0aG9yO1xyXG4vLyAgIG5ld0Jvb2tPYmplY3QucGFnZXMgPSBwYWdlcztcclxuLy8gICBuZXdCb29rT2JqZWN0LnN0YXR1cyA9IHN0YXR1cztcclxuLy8gICByZXR1cm4gbmV3Qm9va09iamVjdDtcclxuLy8gfVxyXG4vLyBGYWN0b3J5IGZ1bmN0aW9uIGVuZFxyXG5cclxuLy8gQ2xhc3NcclxuY2xhc3MgQm9vayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGF1dGhvciwgcGFnZXMsIHN0YXR1cykge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XHJcbiAgICB0aGlzLnBhZ2VzID0gcGFnZXM7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICB9XHJcblxyXG4gIHRvZ2dsZVJlYWQoKSB7XHJcbiAgICB0aGlzLnN0YXR1cyA9ICF0aGlzLnN0YXR1cztcclxuICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0cnVjdG9yIHR5cGVcclxuLy8gQm9vay5wcm90b3R5cGUudG9nZ2xlUmVhZCA9IHRvZ2dsZVxyXG4vLyBmdW5jdGlvbiB0b2dnbGUoKSB7XHJcbi8vICAgdGhpcy5zdGF0dXMgPSAhdGhpcy5zdGF0dXM7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0cnVjdG9yXHJcblxyXG4vLyBmYWN0b3J5IGZ1bmN0aW9uIHN0YXJ0XHJcbi8vIEJvb2sucHJvdG8gPSB7XHJcbi8vICAgdG9nZ2xlUmVhZDogdG9nZ2xlLFxyXG4vLyB9O1xyXG5cclxuLy8gZmFjdG9yeSBmdW5jdGlvbiBlbmRcclxuXHJcbmZ1bmN0aW9uIGFkZFRhYmxlSGVhZGluZygpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpKSB7XHJcbiAgICBib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJykpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gIGNvbnN0IHJvd0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gIGNvbnN0IGNvbEhlYWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgY29sSGVhZFRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlJztcclxuICByb3dIZWFkLmFwcGVuZENoaWxkKGNvbEhlYWRUaXRsZSk7XHJcbiAgY29uc3QgY29sSGVhZEF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgY29sSGVhZEF1dGhvci50ZXh0Q29udGVudCA9ICdBdXRob3InO1xyXG4gIHJvd0hlYWQuYXBwZW5kQ2hpbGQoY29sSGVhZEF1dGhvcik7XHJcbiAgY29uc3QgY29sSGVhZFBhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICBjb2xIZWFkUGFnZXMudGV4dENvbnRlbnQgPSAnUGFnZXMnO1xyXG4gIHJvd0hlYWQuYXBwZW5kQ2hpbGQoY29sSGVhZFBhZ2VzKTtcclxuICBjb25zdCBjb2xIZWFkU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICBjb2xIZWFkU3RhdHVzLnRleHRDb250ZW50ID0gJ1JlYWQgU3RhdHVzJztcclxuICByb3dIZWFkLmFwcGVuZENoaWxkKGNvbEhlYWRTdGF0dXMpO1xyXG5cclxuICBib2R5LmFwcGVuZENoaWxkKHRhYmxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQm9va1JlY29yZChib29rLCBpbmRleCkge1xyXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcclxuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBib29rLnRpdGxlO1xyXG4gIHJvdy5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgYXV0aG9yLnRleHRDb250ZW50ID0gYm9vay5hdXRob3I7XHJcbiAgcm93LmFwcGVuZENoaWxkKGF1dGhvcik7XHJcblxyXG4gIGNvbnN0IHBhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICBwYWdlcy50ZXh0Q29udGVudCA9IGJvb2sucGFnZXM7XHJcbiAgcm93LmFwcGVuZENoaWxkKHBhZ2VzKTtcclxuXHJcbiAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICBzdGF0dXMudGV4dENvbnRlbnQgPSBib29rLnN0YXR1cztcclxuICByb3cuYXBwZW5kQ2hpbGQoc3RhdHVzKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xyXG4gIGRlbGV0ZUNvbC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG4gIGRlbGV0ZUJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBteUxpYnJhcnkuc3BsaWNlKGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4LCAxKTtcclxuICAgIHRhYmxlLnJlbW92ZUNoaWxkKHJvdyk7XHJcbiAgfTtcclxuICByb3cuYXBwZW5kQ2hpbGQoZGVsZXRlQ29sKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlUmVhZENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgY29uc3QgdG9nZ2xlUmVhZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHRvZ2dsZVJlYWRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZXQnKTtcclxuICBmdW5jdGlvbiBjaGVjayhib29rKSB7XHJcbiAgICBpZiAoYm9vay5zdGF0dXMpIHtcclxuICAgICAgdG9nZ2xlUmVhZEJ0bi50ZXh0Q29udGVudCA9ICdVblJlYWQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9nZ2xlUmVhZEJ0bi50ZXh0Q29udGVudCA9ICdSZWFkJztcclxuICAgIH1cclxuICB9XHJcbiAgY2hlY2soYm9vayk7XHJcbiAgdG9nZ2xlUmVhZEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgYm9vay50b2dnbGVSZWFkKCk7XHJcbiAgICBjaGVjayhib29rKTtcclxuICAgIGFkZFRhYmxlSGVhZGluZygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUxpYnJhcnkubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgYWRkQm9va1JlY29yZChteUxpYnJhcnlbaV0sIGkpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICByb3cuYXBwZW5kQ2hpbGQodG9nZ2xlUmVhZENvbCk7XHJcbiAgdG9nZ2xlUmVhZENvbC5hcHBlbmRDaGlsZCh0b2dnbGVSZWFkQnRuKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlCb29rcygpIHtcclxuICBhZGRUYWJsZUhlYWRpbmcoKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG15TGlicmFyeS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgYWRkQm9va1JlY29yZChteUxpYnJhcnlbaV0sIGkpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEJvb2tUb0xpYnJhcnkodGl0bGUsIGF1dGhvciwgcGFnZXMsIHN0YXR1cykge1xyXG4gIC8vIG15TGlicmFyeS5wdXNoKG5ldyBCb29rKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCBzdGF0dXMpKTsgY29uc3RydWN0b3JcclxuICBjb25zdCBjcmVhdGVCb29rID0gbmV3IEJvb2sodGl0bGUsIGF1dGhvciwgcGFnZXMsIHN0YXR1cyk7IC8vIGZhY3RvcnkgZnVuY3Rpb25cclxuICBteUxpYnJhcnkucHVzaChjcmVhdGVCb29rKTtcclxuICBkaXNwbGF5Qm9va3MoKTtcclxufVxyXG5cclxuZGlzcGxheUJvb2tzKCk7XHJcblxyXG5jb25zdCBuZXdCb29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xyXG5cclxubmV3Qm9vay5vbmNsaWNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBjb25zdCBsYWJlbEZvclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbEZvclRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XHJcbiAgbGFiZWxGb3JUaXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZSc7XHJcbiAgY29uc3QgdGl0bGVGb3JCb29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0aXRsZUZvckJvb2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICB0aXRsZUZvckJvb2suc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xyXG4gIGxhYmVsRm9yVGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVGb3JCb29rKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsRm9yVGl0bGUpO1xyXG5cclxuICBjb25zdCBsYWJlbEZvckF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWxGb3JBdXRob3Iuc2V0QXR0cmlidXRlKCdmb3InLCAnYXV0aG9yJyk7XHJcbiAgbGFiZWxGb3JBdXRob3IudGV4dENvbnRlbnQgPSAnQXV0aG9yJztcclxuICBjb25zdCBhdXRob3JGb3JCb29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBhdXRob3JGb3JCb29rLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgYXV0aG9yRm9yQm9vay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2F1dGhvcicpO1xyXG4gIGxhYmVsRm9yQXV0aG9yLmFwcGVuZENoaWxkKGF1dGhvckZvckJvb2spO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWxGb3JBdXRob3IpO1xyXG5cclxuICBjb25zdCBsYWJlbEZvclBhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbEZvclBhZ2VzLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3BhZ2VzJyk7XHJcbiAgbGFiZWxGb3JQYWdlcy50ZXh0Q29udGVudCA9ICdOdW1iZXIgb2YgcGFnZXMnO1xyXG4gIGNvbnN0IHBhZ2VzRm9yQm9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgcGFnZXNGb3JCb29rLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgcGFnZXNGb3JCb29rLnNldEF0dHJpYnV0ZSgnaWQnLCAncGFnZXMnKTtcclxuICBsYWJlbEZvclBhZ2VzLmFwcGVuZENoaWxkKHBhZ2VzRm9yQm9vayk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbEZvclBhZ2VzKTtcclxuXHJcbiAgY29uc3QgbGFiZWxGb3JSZWFkU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbEZvclJlYWRTdGF0dXMuc2V0QXR0cmlidXRlKCdmb3InLCAnc3RhdHVzJyk7XHJcbiAgbGFiZWxGb3JSZWFkU3RhdHVzLnRleHRDb250ZW50ID0gJ0NsaWNrIGlmIHlvdSBoYXZlIGZpbmlzaGVkIHRoZSBib29rJztcclxuICBjb25zdCBzdGF0dXNGb3JCb29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBzdGF0dXNGb3JCb29rLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gIHN0YXR1c0ZvckJvb2suc2V0QXR0cmlidXRlKCdpZCcsICdzdGF0dXMnKTtcclxuICBsYWJlbEZvclJlYWRTdGF0dXMuYXBwZW5kQ2hpbGQoc3RhdHVzRm9yQm9vayk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbEZvclJlYWRTdGF0dXMpO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgc3VibWl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkIHRvIHRoZSBMaWJyYXJ5Jyk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xyXG4gIHN1Ym1pdC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgYWRkQm9va1RvTGlicmFyeSh0aXRsZUZvckJvb2sudmFsdWUsIGF1dGhvckZvckJvb2sudmFsdWUsXHJcbiAgICAgIHBhZ2VzRm9yQm9vay52YWx1ZSwgc3RhdHVzRm9yQm9vay5jaGVja2VkKTtcclxuICAgIGJvZHkucmVtb3ZlQ2hpbGQoZm9ybSk7XHJcbiAgfTtcclxuICBib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9