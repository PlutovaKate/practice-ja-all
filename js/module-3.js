// const car = {
//     wheels: 6,
// }

// car.color = 'blue';

// const variable = 'mark';
// car[variable] = 'ford';

// console.log(car.color)

// const film = {
//     name: 'joker',
//     isAdult: true,
//     actors: ['andie', 'kateryna', 'alex']
// }
// console.log(film)

// const username = 'oleksiy';
// const email = 'test@gmail.com';
// const signup = {
//     username: username,
//     email: email,
//     actors: 'andi'
// }

// const signup = {
//     username,
//     email,
//     actors: 'andi'
// }
// signup.actors = 'hanna'
// signup.email = 'desk@gmail.com'
// console.log (signup)

// const obj = {
//     a:1,
//     b:2
// }

// // const obj2 = obj

// const obj2 = ({}, obj)
// console.log('obj1:' , obj)
// console.log('obj2:' , obj2)

// obj2.c = 3

// console.log('obj1:' , obj)
// console.log('obj2:' , obj2)

// const arr = [1,2,3,4]
// console.log(arr)
// console.log(arr[1])

// const obj = {
//     0:1,
//     1:2,
//     2:3,
// length: 3
// }

// console.log(obj)


// const filmDuna = {
//     title: 'duna',
//     isAdult: true,
//     actors: ['andie', 'kateryna', 'alex'],
//     isAdult: false,
// changeTitle: function (newTitle) {
//     filmDuna.title = newTitle
// }
  
// }
// filmTitanic = {
//     title: 'titanic',
//     changeTitle: filmDuna.changeTitle
// }

// filmDuna.changeTitle('joker')


// // filmDuna.title = 'joker'
// console.log(filmDuna)
// console.log(filmTitanic.changeTitle)


// const salaries = {
//     john: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = null
// for (let key in salaries) {
//     console.log(salaries[key])
//     sum += salaries[key]
// }

// console.log(sum)


// const keys = Object.keys(salaries);

// let sum = null;

// for (let key of keys) {
//     sum += salaries[key]
//     console.log(key)
// }

// console.log(sum)

// const values = Object.values(salaries)
// let sum = null

// for (let salaries of values) {
//     sum += salaries
// }
// console.log(sum)


// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
// Код
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';

// user.hobby = 'skydiving';
// user.premium = 'false';

// console.log(user);


// const userKeys = Object.keys(user);

// for (let key of userKeys) {
// console.log(key)
// }

// for (let key in userKeys) {
//     console.log(userKeys);
//     console.log(userKeys[key]);
// }

// console.log(user.hasOwnProperty('hobby'));

// console.log(Object.keys(user))







// Example 2 - метод Object.keys()
// Напиши функцію countProps(obj), що вираховує кількість властивостей в об'єкті. Функція повертає число – кількість властивостей.

// Виклики функцій для перевірки працездатності твоєї реалізації:

// function countProps (obj) {
//     // console.log(obj);
//     return Object.keys(obj).length
// }

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3



// Example 3 - метод Object.values()
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Якщо об'єкт employees порожній, то результат має бути 0.

// Код
// const countTotalSalary = function (employees) {
//   // твій код
// };

// // /*
// //  * Викличи функції для перевірки працездатності твоєї реалізації.
// //  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400


// Example 4 - for...in
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників та повертає ім'я найпродуктивнішого (який виконав найбільше завдань). Співробітники і кількість виконаних завдань містяться як властивості об'єкта у форматі "ім'я": "кількість завдань".

// Виклики функцій для перевірки працездатності твоєї реалізації.

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux
// Example 5 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// Код
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },

//   console.log(calculateTotalPrice(stones, "Смарагд"));
// console.log(calculateTotalPrice(stones, "Діамант"));
// ];
// Example 6 - IsEmpty
// Напишіть метод, який робить поверхневу перевірку, чи об’єкт порожній

// Очікуваний результат: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false
// Порожні значення: "", null, NaN, undefined
// const isEmpty = (object) => {
//       ...
// };
// const data = { a: 1, b: undefined };
// const data2 = { a: undefined };

// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true
// Example 7 - getAllPropValues
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів та ім'я ключа. Повертає масив значень певного поля prop кожного об'єкта в масиві.

// Виклики функцій для перевірки працездатності твоєї реалізації.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []
// Example 8 - Комплексні завдання
// Отримати список моделей задопомогою функції getModels:

// Замінити назву моделі задопомогою функції changeModel

// Отримати загальну ціну всіх машин за допомогою функції getTotalPrice

// const vehicles = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
//   { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
//   { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
//   { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
//   { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
// ];
// function getModels() {}
// function changeModel() {}

// function getTotalPrice() {}

// getModels(vehicles);

// changeModel(vehicles, 'Mazda 6', 'Hello world');
// changeModel(vehicles, 'Fusion', 'AAAAAA');
// changeModel(vehicles, 'F-150', 'BBBBBB');

// getTotalPrice(vehicles);

