// Модуль 6. Заняття 11. DOM i events
// Example 1 - Список фруктів
// Вам надано кілька назв різних фруктів і невпорядкований html-елемент списку; додати елемент списку для кожного до невпорядкованого списку. Потім видали 1 елемент списку і останній.

// const appendFruitList = ['apple🍎', 'banana🍌'];
// const prependFruitList = ['grapes🍇', 'orange🍊'];
// const beforeFruitList = ['strawberry🍓', 'cherry🍒'];
// const afterFruitList = ['peach🍑', 'kiwi🥝'];

// const ulElement = document.createElement(`ul`);
// document.querySelector(`.body`).append(ulElement)

// const listOfIngridients = array => {
//     return array.map(fruit => {
//     const li = document.createElement(`li`)
//     li.textContent = fruit;
//     li.classList.add(`item`)
//     return li;
// })};

// ulElement.append(...listOfIngridients(appendFruitList));
// ulElement.prepend(...listOfIngridients(prependFruitList));
// ulElement.after(...listOfIngridients(afterFruitList));
// ulElement.before(...listOfIngridients(beforeFruitList));

// console.log(Array.from(ulElement.children));
// const itemsChildren = Array.from(ulElement.querySelectorAll(`.item`));
// console.log(itemsChildren);

// // itemsChildren[0].remove();
// // itemsChildren[itemsChildren.length - 1].remove();

// ulElement.firstElementChild.remove()
// ulElement.lastElementChild.remove()

// Example 2 - Highlight
// Вставте даний текст в html документ, а потім виділіть усі слова, які мають більше 8 символів у тексті абзацу (наприклад, жовтим фоном).

// const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;

// const elP = document.createElement("p");
// elP.innerText = text;
// document.querySelector("body").prepend(elP);

// elP.innerHTML = elP.innerText.split(" ").map((word) => {
//   if (word.length > 8) {
//       const spanEl = document.createElement('span');
//       spanEl.textContent = word;
//       spanEl.style.backgroundColor = "red";
//       elP.append(spanEl)
//       return spanEl.outerHTML;
//       //або
//     // return '<span style = "background-color: yellow">' + word + "</span>";
//   } else {
//     return word;
//   }
// }).join(" ");
// console.log(elP.textContent.split(" "));

// Example 3 - Plans
// Use template from file plans.html.

// A new feature has been added to the Pro plan: '24/7 Phone support'. Add this using JavaScript to the list features of the Pro plan.

// To make the ordering of the plans more logical, using JavaScript, move the basic plan to be before (to the left) of the pro plan.

// To make the Pro plan have a stronger call to action, update the current 'Get started' button to be blue (#007bff) with white text and have the text 'Buy Now'

// There is a special offer on at the moment offering 50% more storage on the Basic plan and 25% more on the Pro plan. Update the basic and pro plan cards to reflect the new storage amount being offered.
// const proPlanBtn = document.querySelector("#pro-plan button");

// proPlanBtn.style.backgroundColor = "blue";
// proPlanBtn.style.color = "white";
// proPlanBtn.textContent = "Buy now";

// const listUnstyled = document.querySelector("#pro-plan .storage-amount");
// listUnstyled.innerText = listUnstyled.innerText * 1.5;

// ////////////////////////////////////////////////

// You have been asked to add ask a toggle / radio box for annual and monthly payments for the basic and pro plans. Add a radio button to toggle between monthly and annual payment options and adjust the prices shown for both plans. Use code below.

// const toggleTemplate = `
// <div class="select">
//     <label id="monthly" class="checked">
//         Monthly
//         <input id="monthlyPricing" type="radio" name="pricing"
//         value="monthly" checked>
//     </label>
//     <label id="annual">
//         Annual
//         <input
//         id="annualPricing"
//         type="radio"
//         name="pricing"
//         value="annual"
//         />
//     </label>
// </div>
// `;

// const pricing = {
//   monthly: { basic: "10 / month", pro: "30 / month" },
//   annual: { basic: "100 / year", pro: "300 / year" },
// };

// const changePricing = (event) => {};

// // console.log('NodeList', document.querySelectorAll('input[type="radio"]'));
// Array.from(document.querySelectorAll('input[type="radio"]')).forEach((radio) =>
//   radio.addEventListener("change", changePricing)
// );

///////////////////////////////////

// Модуль 6. Заняття 12. DOM i events
// Example 1 - Modal Form
// Use template from file modal_form.html.

// // refs
// const modal = document.getElementById("modal");
// const form = document.querySelector("form");
// const login_btn = document.querySelector("#login_btn");
// const cancle_btn = document.querySelector("#cancle_btn");
// const closeModal_btn = document.querySelector("#closeModal_btn");
// const remember_checkbox = document.querySelector('input[name="remember"]');

// // function which you should add to event listener as callback
// const handleFormOpen = (event) => {
//   modal.style.display = "block";
//   modal.classList.add("isOpen");
// };
// const handleFormClose = (event) => {
//   modal.style.display = "none";
//   modal.classList.remove("isOpen");
// };
// const handleRememberCheckbox = (event) => {};
// const handleRemoveRememberCheckbox = (event) => {};
// const handleFormSubmit = (event) => {
//   event.preventDefault();
//   //   const elements = Array.from(event.target.elements);
//   //   const FormData = elements.reduce((acc, { name, value }) => {
//   //     if (name) {
//   //       acc[name] = value;
//   //     }
//   //     return acc;
//   //   }, {});
//   //   console.log(FormData)
//   //або
//   const formData = {};
//   new FormData(event.currentTarget).forEach(
//     (value, name) => (formData[name] = value)
//   );
//   console.log(formData);
// };

// const handleEscape = (event) => {
//   if (event.code === "Escape") {
//     modal.style.display = "none";
//     return;
//   }
// };

// login_btn.addEventListener("click", handleFormOpen);
// closeModal_btn.addEventListener("click", handleFormClose);
// document.addEventListener("keydown", handleEscape);
// form.addEventListener("submit", handleFormSubmit);

// When the user clicks anywhere outside of the modal, close it, add new event listener
// add event listener for all refs
// Example 2 - Form Validation
// Use template from file form.html.

// const form = document.querySelector('#signup');

// const NAME_REQUIRED = 'Please enter your name';
// const EMAIL_REQUIRED = 'Please enter your email';
// const EMAIL_INVALID = 'Please enter a correct email format';

// // show a message with a type of the input
// function showMessage({ input, message, type }) {
//   // get the small element and set the message
//   ...
//   // update the class for the input: add "success" if type===true, add "error" if type===false
//   ...
//   // return type(true/false) to understand to show message or no
//   return type;
// }

// function showError(input, message) {
//   return showMessage({ input, message, type: false });
// }

// function showSuccess(input) {
//   return showMessage({ input, message: '', type: true });
// }

// function hasValue(input, message) {
//   // check if the value is not empty if empty show error message else show success message
//   ...
// }

// function validateEmail(input, requiredMsg, invalidMsg) {
//   // check if the value is not empty, if value is empty return error message
//   ...
//   // validate email format,  if format is wrong show "ivalid" error message
//     const emailRegex =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   const email = ...;

//   if (!emailRegex.test(email)) {
//    ...
//   }
// // if format validate ok and email input is not empty show success
// }

// function handleSubmit(event) {
//   // stop form submission
//   ...
//   // validate the form
//   ...
//   // if valid, submit the form and return { formData[name] = value }.
//   ...
// }

// form.addEventListener('submit', handleSubmit);
// Example - Style Body
// При кліку на кнопку з id="style" стилізуй body background рандомним кольором з масиву arr, для отримання рандомного кольору з масиву використай функцію arrayRandomElement. Use html from file styleBG.html.

// function styleBG() {}

// function arrayRandomElement(arr) {
//   const randomColor = Math.floor(Math.random() * arr.length);
//   return arr[randomColor];
// }
// const arr = [
//   'white',
//   'blue',
//   'red',
//   'green',
//   'yellow',
//   'orange',
//   'purple',
//   'pink',
//   'grey',
//   'tomato',
// ];
// Example - Clicker
// 📝 Instructions:
// Using the createElement function, add a new <li> element to the #myList whenever the #superDuperButton is clicked.
// 💡 Hint:
// Get the #superDuperButton button with the getElementById function.

// Add a click event listener to the #superDuperButton.

// Inside of that listener function, add the needed code to create the new li element and append to the list as a child.

// const isReady = confirm('Are you ready?');
// isReady &&
//   setTimeout(function () {
//     document.getElementById('superDuperButton').disabled = true;
//   }, 5000);
// Example - Todo List
// This todo list design is pure css. The css and html are ready, but we need to code the Javascript part of the application. Use html from file todo_list.html.

// As you can see, when you initially run, the ability to delete or add items to the to-do list does not yet exist!

// 📝 Instructions: Please add the "delete task" and "add task" functionality. 💡 Hints: Analize the HTML code, how the list is designed and built, what do you have to add into the HTML if you want a new item appear inside the list?

// If we were to delete any particular element, we would have to add a listener to the click handler on the trash icon and then delete the entire li in which the icon.

// You don't have to edit anything from the HTML nor the CSS, only the javascript!

// const taskInput = document.getElementById('new-task'); //input to create new task.
// const addButton = document.querySelector('button.add'); //add button
// const tasksHolder = document.getElementById('tasks-list'); //ul of todos

// const createNewTaskElement = newTodo => {};

// const addTask = () => {};

// const editTask = () => {};

// const deleteTask = () => {};

// addButton.addEventListener('click', addTask);
// tasksHolder.addEventListener('click', editTask);
// tasksHolder.addEventListener('click', deleteTask);
// Exapmle - Slider
// This todo list design is pure css. The css and html are ready, but we need to code the Javascript part of the application. Use html from file slider.html.

// const sliderDiv = ...;
// const buttonNext = ...;
// const buttonPrevious = ...;

// let prevImage = 0;

// function slideToNext() {}
// function slideToPrevious() {}
// function destroyPreviousMarkup() {}
// function createdMarkup() {}

// createdMarkup(sliderItems[0]);

// buttonNext.addEventListener('click', slideToNext);
// buttonPrevious.addEventListener('click', slideToPrevious);
// sliderDiv.addEventListener('click', event => {
//     console.log(event.target)
// })

// Example - keybord game
// Use template from file keybord_game.html.

// // object size
// const objectSize = {
//   width: 20,
//   height: 20,
// };

// // start object position
// const position = {
//   x: 10,
//   y: 10,
// };

// // how many px the object will move with each press of the arrows on the keyboard
// const moveRate = 10;

// // get object
// const object = document.getElementById('object');
// // style object
// object.style.width = objectSize.width + 'px';
// object.style.height = objectSize.height + 'px';
// object.style.background = 'black';

// // Update y-axis position at the edge.
// function updateYPosition(distance) {
//   // if y < 0 say that y = 499
//   // if y > 499 say that y = 0
// }

// // Update x-axis position at the edge.
// function updateXPosition(distance) {
//   // if y < 0 say that y = 499
//   // if y > 499 say that y = 0
// }

// function refreshPosition() {
//   // add new transform-style to object
// }

// window.addEventListener('keydown', function (event) {
//   // determine which arrow on the keyboard was pressed,
//   // if ArrowDown is pressed, call the updateYPosition(-moveRate) function;
//   // if ArrowUp is pressed, call the updateYPosition(moveRate) function;
//   // if ArrowLeft is pressed, call the updateXPosition(-moveRate)function;
//   // if ArrowRight is pressed, call the updateXPosition(moveRate) function;
//   // then call refreshPosition() function
// });

///////////////////////////////////

// const buttonEl = document.querySelector("#alertButton");
// const inputEl = document.querySelector("#alertInput");

// const handleClick = () => {
//   const value = inputEl.value.trim();
//   console.log(value);
//   if (!value) return;
//   alert(value);
// };

// buttonEl.addEventListener("click", handleClick);

//////////////////////////////////

const buttonEl = document.querySelector("#passwordButton");
const inputEl = document.querySelector("#passwordInput");
const showPassword = () => {
  if (inputEl.type === "text") {
    inputEl.setAttribute("type", "password");
    buttonEl.textContent = "ПОКАЗАТИ";
  } else {
    inputEl.setAttribute("type", "text");
    buttonEl.textContent = "ПРИХОВАТИ";
  }
};

buttonEl.addEventListener("click", showPassword);
