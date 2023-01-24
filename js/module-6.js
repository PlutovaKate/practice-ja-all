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

// const elP = document.createElement(`p`);
// elP.innerText = text;
// document.querySelector(`body`).append(elP);


// elP.innerHTML = elP.innerText.split(" ").map((word) => {
//     if (word.length > 8) {
//         const spanEl = document.createElement(`span`)
//         spanEl.style.backgroundColor = "red"
//         return spanEl
//     } else {
//         return word
//     }

// }).join(" ")
// console.log(elP.textContent.split(" "))

// Example 3 - Plans
// Use template from file plans.html.

// A new feature has been added to the Pro plan: '24/7 Phone support'. Add this using JavaScript to the list features of the Pro plan.

// To make the ordering of the plans more logical, using JavaScript, move the basic plan to be before (to the left) of the pro plan.

// To make the Pro plan have a stronger call to action, update the current 'Get started' button to be blue (#007bff) with white text and have the text 'Buy Now'

// There is a special offer on at the moment offering 50% more storage on the Basic plan and 25% more on the Pro plan. Update the basic and pro plan cards to reflect the new storage amount being offered.

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
//   monthly: { basic: '10 / month', pro: '30 / month' },
//   annual: { basic: '100 / year', pro: '300 / year' },
// };

// const changePricing = event => {};

// // console.log('NodeList', document.querySelectorAll('input[type="radio"]'));
// Array.from(document.querySelectorAll('input[type="radio"]')).forEach(radio =>
//   radio.addEventListener('change', changePricing)
// );


///////////////////////////////////

