// Модуль 7. Заняття 13. Events
// Example 1 - Color Palete
// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');
// const bodyRef = document.querySelector('body');

// colorPalette.addEventListener('click', selectColor);

// createPaletteItems();

// function selectColor(event) {
// if (event.target.tagName !== "button") {
//     return
// }

//     const selectedColor = event.target.dataset.color;
//     bodyRef.style.backgroundColor = selectColor;

//     console.log(event.target)
// }

// function createPaletteItems() {

//     const arrayPalette = [];
//     let numberOfColors = getRandomInt(2,15);
//     let randomColor = getRandomColor();

//     for(let i=0; i <=numberOfColors; i +=1) {

//         const newEl =document.createElement('button');
//         newEl.style.background = randomColor();
//         newEl.type = 'button';
//         newEl.classList.add('item');

//         newEl.dataset.color = randomColor();
//         arrayPalette.push(newEl);
        

//     }
// return arrayPalette
// }

// colorPalette.append(...createPaletteItems)

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, '0');
// }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; 
// }  


// Example 2 - Todo List
// This todo list design is pure css. The css and html are ready, but we need to code the Javascript part of the application. Use html from file todo_list.html.

// As you can see, when you initially run, the ability to delete or add items to the to-do list does not yet exist!

// 📝 Instructions: Please add the "delete task" and "add task" functionality. 💡 Hints: Analize the HTML code, how the list is designed and built, what do you have to add into the HTML if you want a new item appear inside the list?

// If we were to delete any particular element, we would have to add a listener to the click handler on the trash icon and then delete the entire li in which the icon.

// You don't have to edit anything from the HTML nor the CSS, only the javascript!

// const taskInput = document.getElementById('new-task'); //input to create new task.
// const addButton = document.querySelector('button.add'); //add button
// const tasksHolder = document.getElementById('tasks-list'); //ul of todos
// // const editButton = document.querySelector('button.edit'); //first button
// // const deleteButton = document.querySelectorAll('button.delete'); //first button
// const createNewTaskElement = newTodo => {
//   const markUp = ` <li>
//       <input type="checkbox" />
//       <label>${newTodo}</label>
//       <input type="text" value="${newTodo}" />
//       <button class="edit">Edit</button>
//       <button class="delete">Delete</button>
//     </li>`;
//   tasksHolder.insertAdjacentHTML('afterbegin', markUp);
// };
// const addTask = () => {
//   const taskString = taskInput.value;
//   createNewTaskElement(taskString);
//   taskInput.value = '';
// };
// const editTask = event => {
//   const liEl = event.target.parentNode;
//   if (event.target.classList.contains('edit')) {
//     const inputToDo = liEl.querySelector('input[type="text"]');
//     const toDoLabel = liEl.querySelector('label');
//     const toDoEditButton = liEl.querySelector('button.edit');
//     if (!liEl.classList.contains('editMode')) {
//       inputToDo.value = toDoLabel.textContent;
//       toDoEditButton.textContent = 'Save';
//     } else {
//       toDoEditButton.textContent = 'Edit';
//       toDoLabel.textContent = inputToDo.value;
//     }
//     liEl.classList.toggle('editMode');
//   }
// };
// const deleteTask = () => {};
// addButton.addEventListener('click', addTask);
// tasksHolder.addEventListener('click', editTask);
// tasksHolder.addEventListener('click', deleteTask);const taskInput = document.getElementById('new-task'); //input to create new task.
// const addButton = document.querySelector('button.add'); //add button
// const tasksHolder = document.getElementById('tasks-list'); //ul of todos
// // const editButton = document.querySelector('button.edit'); //first button
// // const deleteButton = document.querySelectorAll('button.delete'); //first button
// const createNewTaskElement = newTodo => {
//   const markUp = ` <li>
//       <input type="checkbox" />
//       <label>${newTodo}</label>
//       <input type="text" value="${newTodo}" />
//       <button class="edit">Edit</button>
//       <button class="delete">Delete</button>
//     </li>`;
//   tasksHolder.insertAdjacentHTML('afterbegin', markUp);
// };
// const addTask = () => {
//   const taskString = taskInput.value;
//   createNewTaskElement(taskString);
//   taskInput.value = '';
// };
// const editTask = event => {
//   const liEl = event.target.parentNode;
//   if (event.target.classList.contains('edit')) {
//     const inputToDo = liEl.querySelector('input[type="text"]');
//     const toDoLabel = liEl.querySelector('label');
//     const toDoEditButton = liEl.querySelector('button.edit');
//     if (!liEl.classList.contains('editMode')) {
//       inputToDo.value = toDoLabel.textContent;
//       toDoEditButton.textContent = 'Save';
//     } else {
//       toDoEditButton.textContent = 'Edit';
//       toDoLabel.textContent = inputToDo.value;
//     }
//     liEl.classList.toggle('editMode');
//   }
// };
// const deleteTask = (event) => {
//     if(event.target.classList.contains("delete")) {
//     const liEl = event.target.parentNode;
//     liEl.remove()
// }
// };
// addButton.addEventListener('click', addTask);
// tasksHolder.addEventListener('click', editTask);
// tasksHolder.addEventListener('click', deleteTask);


// Example 3 - Quiz
// Створи форму опитувальника з можливістю пройти тест. Кожне питання – це секція форми, де відповіді представлені групою радіокнопок.

// Заголовок тесту та набір питань знаходяться в об'єкті, що експортується з файлу quiz-data.js. Кожен питання представлений об'єктом з наступними властивостями.

// question - текст питання
// choices - масив відповідей
// answer - індекс правильної відповіді з масиву choices
// Необхідно динамічно створити розмітку форми за цими даними.

// При сабмите форми перевір на скільки запитань користувач відповів правильно і виведи (можна під формою) повідомлення про успіх чи невдачу. Успішним проходження тесту вважається при 80% або більше вірних відповідей.

// HTML-розмітка
// Початкова розмітка у HTML-документі тут quiz.html

// Кожне питання представлене наступною HTML-розміткою. Текст питання та кількість Варіантів відповідей залежить від даних питання. Подумай, що підставити в атрибути name та value радіокнопок.

// ``html

// 1. Текст питання
// Відповідь 1
// Відповідь 2
// ````
// const form = document.querySelector('#form');
// const button = document.querySelector('#btn');

// form.addEventListener('submit', checkAnswers);

// function createQuizeMarkup({ title, questions }) {}

// function markupForChoise(choices, i) {}

// //тут у форму нам потрібно вставити нашу створену розмітку, результат функції createQuizeMarkup(quiz)

// function checkAnswers(event) {
//   //витягуємо всі дані з форми

//   //витягуємо з нашого quiz правильні відповіді і порівнюємо їх з відповідями користувача, дізнаємося довжину масива, для розрахунку результату теста у %

//   // обчислення резульату теста
//   const result = Math.round((total / correctAnswers.length) * 100);

//   let message;
//   if (result >= 80) {
//     message = `Молодець! Ты набрав ${result} %`;
//   } else {
//     message = `Вчи ще! Ты набрав ${result} %`;
//   }

//   //зроби кнопку після відправки неактивною і виведи користувачу його рультат теста під кнопкою у текстовому вигляді (message)
// }