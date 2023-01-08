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
// const animal = 'cat'

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//     animal

//   };

// user['mood'] = 'happy';
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = 'false';
// console.log(user);

// const userKeys = Object.keys(user);
// const userValues = Object.values(user)

// console.log(userKeys);
// console.log(userValues)

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
//     console.log(obj);
//     return Object.keys(obj).length
// }

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// Example 3 - метод Object.values()
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Якщо об'єкт employees порожній, то результат має бути 0.

// Код
// const countTotalSalary = function (employees) {
//   let totalSalary = 0;
//   const allSalary = Object.values(employees)
// //  for (const salary of allSalary) {
// //     totalSalary += salary
// //  }

// // for (const employee in employees) {
// //  totalSalary += employees[employee]
// // }
//  return totalSalary
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

// const findBestEmployee = function (employees) {
//   let bestEmployee = 0;
//   let bestEmployeeName = "";

//   for (const employee in employees) {
//     console.log(employees[employee]);

//     if (bestEmployee < employees[employee]) {
//       bestEmployee = employees[employee];
//       bestEmployeeName = employee;
//     }
//   }
//   return `Найкращий працівник ${bestEmployeeName} виконав ${bestEmployee} задач`
// };

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

// const calculateTotalPrice = function (stones, stoneName) {
//   let totalPrice = 0;

//   for (const stone of stones) {
//     // console.log(stone);
//     if (stoneName === stone.name) {
//         totalPrice = stone.price * stone.quantity;
//     }
//   }
//   return totalPrice
// };

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(stones, "Смарагд"));
// console.log(calculateTotalPrice(stones, "Діамант"));

// Example 6 - IsEmpty
// Напишіть метод, який робить поверхневу перевірку, чи об’єкт порожній

// Очікуваний результат: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false
// Порожні значення: "", null, NaN, undefined
// const isEmpty = (object) => {
//   let full = [];
//   let objectValues = Object.values(object);
//   for (const element of objectValues) {
//     if (element) {
//       full.push(element);
//     }
//   }
//   if (full.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const data = { a: 1, b: undefined };
// const data2 = { a: undefined };

// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true

// ?????Example 7 - getAllPropValues
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів та ім'я ключа. Повертає масив значень певного поля prop кожного об'єкта в масиві.

// Виклики функцій для перевірки працездатності твоєї реалізації.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   let newProp = [];
//   for (const product of products) {
//     // console.log(product);
//     if (prop) {
//       newProp.push(Object.values(product));
//     }
//   } return newProp
// };

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

// Example 8 - Комплексні завдання
// Отримати список моделей задопомогою функції getModels:

// Замінити назву моделі задопомогою функції changeModel

// Отримати загальну ціну всіх машин за допомогою функції getTotalPrice

// const vehicles = [
//   { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//   { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//   { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//   { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//   { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
//   { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
//   { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//   { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//   { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
// ];
// function getModels(vehicles) {
//   const models = [];
//   for (const vehicle of vehicles) {
//     models.push(vehicle.model);
//   }
//   return models;
// }

// function changeModel(vehicles, oldModel, newModel) {
//   const models = [];
//   for (const vehicle of vehicles) {
//     if (vehicle.model === oldModel) {
//       vehicle.model = newModel;
//     }
//   }
// }

// function getTotalPrice() {
//   let totalPrice = 0;
//   for (const vehicle of vehicles) {
//     totalPrice += vehicle.price;
//   }
//   return totalPrice;
// }

// console.log(getModels(vehicles));

// changeModel(vehicles, "Mazda 6", "Hello world");
// changeModel(vehicles, "Fusion", "AAAAAA");
// changeModel(vehicles, "F-150", "BBBBBB");
// console.log(vehicles);

// console.log(getTotalPrice(vehicles));

// Модуль 3 Заняття 6. Деструктуризація та rest/spread
// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({name, weight, height}) {
// //   console.log(name, weight, height);
//   const BMI = Number.parseFloat(weight) / Number.parseFloat(height) ** 2;
//   return `${name} has ${BMI.toFixed(1)}`
// }

// або

// function calcBMI(object) {
//     const { name, weight, height } = object
//       const BMI = Number.parseFloat(weight) / Number.parseFloat(height) ** 2;
//       return `${name} has ${BMI.toFixed(1)}`
//     }

// // Було
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Очікується
// console.log(
//   calcBMI({
//     name: "Sofia",
//     weight: "88,3",
//     height: "1.75",
//   })
// );
// console.log(
//   calcBMI({
//     name: "Kate",
//     weight: "68,3",
//     height: "1.65",
//   })
// );
// console.log(
//   calcBMI({
//     name: "Alex",
//     weight: "118,3",
//     height: "1.95",
//   })
// );

// ?????Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo( {names, phones} ) {
//     // console.log(names, phones)
//     return `${names} has ${phones}`
// }

// // // Було
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Очікується
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Example 3 - Деструктуризація
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport( {companyName, stock: {repairBots, defenceBots, shoes, skirts, hats}}) {
// if (repairBots && defenceBots) {
//     return `${companyName} has ${repairBots + defenceBots} item in stock`
// } return `${companyName} has ${shoes + skirts + hats} item in stock`
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

// Example 4 - Операція spread
// У нас є об'єкт salaries із зарплатами.

// Створіть функцію topSalary (salaries), яка повертає ім'я найвищого працівника.

// Якщо об'єкт salaries порожній, потрібно повернути null. Якщо кілька високооплачуваних співробітників можна повернути будь-якого з них.

// P.S. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(salaries) {
//   console.log(Object.entries(salaries));
//   let topName = -Infinity;
//   let nameTopName;
//   for (const [name, salary] of Object.entries(salaries)) {
//     console.log(name, salary);
//     if (topName < salary) {
//       topName = salary;
//       nameTopName = name;
//     }
//   }
//   return `name ${nameTopName} is salary ${topName}`;
// }
// console.log(topSalary(salaries));

// Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// function createContact(contactInfo) {
//   // console.log(contactInfo)

//   if (contactInfo.list) {
//     const updateInfo = {
//       ...contactInfo,
//       id: generateId(),
//       createdAt: new Date(),
//     };
//     return updateInfo;
//   }
//   const updateInfo = {
//     ...contactInfo,
//     id: generateId(),
//     createdAt: new Date(),
//     list: "default",
//   };
//   return updateInfo;
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }

// Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({ id, email, friendCount, ...fullName }) {
//   const updateName = Object.values(fullName).join(" ");
//   console.log(updateName);
//   const newUserData = { fullName: updateName, id, email, friendCount };
//   console.log(newUserData);
//   return newUserData;
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

// Example 7 - mergeObjects
// У нас є об'єкт foo i bar, об'єднайте їх в 1 об'єкт і додайте ще 2 властивості в новостворений об'єкт:

//   esperanto: 'saluton',
//   korean: 'annyeong'
// Очікуваний результат => const newArr = { english: 'howdy', french: 'bonjour', japanese: 'konnichiwa', german: 'gutentag', esperanto: 'saluton', korean: 'annyeong' }

// Пояснити що буде з властивістю english в новому об'єкті і як це можна зробити без spreed

// const foo = {
//   english: 'hello',
//   french: 'bonjour',
//   japanese: 'konnichiwa',
// };
// const bar = {
//   english: 'howdy',
//   german: 'gutentag',
// };

// const newObject = {esperanto: 'saluton', korean: 'annyeong', ...foo, ...bar}
// console.log(newObject)

// Example 8 - Пошук max i min елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше і найменше число в масиві, використай spread оператор.

// function findLargestNumber(numbers) {
//   return `Найбільше число  ${Math.max(...numbers)}, найменше число ${Math.min(...numbers)}`;
  
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// ???Example 9 - Updates the values of the properties
// const user = {};

// const createProfile = data => {};

// const updateLoginData = () => {};

// const deleteProfile = () => {};

// console.log(createProfile({ email: 'sofia@gmail.com', password: 'sofia1111' }));

// console.log(updateLoginData({ email: 'new@gmail.com' }));
// console.log(updateLoginData({ password: '1111' }));

// console.log(deleteProfile());


// ???Example 10 - Order, online shop
// You need to use the object with an order to solve the next tasks:

// Calculate the cost of products by specific type of product (type will be passed as a parameter).
// Calculate the original order amount (without discounts).
// Calculate the final cost of the order after all discounts have been applied.
// Find out the number of different products that have the word “Nike” in the middle of the name (regular expression should be used for it).
// Write a function, which will check that a product with some id exists or not in order (id will be passed as a parameter).
// Also, the following conditions should be met:

// If the order amount is more than $100, free shipping applies.
// If the total number of products is greater than or equal to 20, a 13% discount is applied to the order.
// Discount and free shipping can be combined together.
// const order = {
//   items: [
//     {
//       id: 248,
//       type: 'shoes',
//       name: 'Puma RS-X',
//       quantity: '3',
//       originalPrice: '120.00',
//     },
//     {
//       id: 220,
//       type: 'shoes',
//       name: 'The Nike Monarch',
//       quantity: '1',
//       originalPrice: '87.50',
//       salePrice: '51.99',
//     },
//     {
//       id: 231,
//       type: 'shoes',
//       name: 'Nike Air Max Plus',
//       quantity: '4',
//       originalPrice: '187.50',
//       salePrice: '151.99',
//     },
//     {
//       id: 389,
//       type: 'clothing',
//       name: 'Puma T-shirt',
//       quantity: '1',
//       originalPrice: '15.99',
//     },
//     {
//       id: 389,
//       type: 'accessories',
//       name: 'Watches TISSOT',
//       quantity: '5',
//       originalPrice: '99.50',
//       salePrice: '89.99',
//     },
//   ],
//   shipping: {
//     id: 'shipping1',
//     name: 'US Delivery',
//     originalPrice: '11.00',
//   },
// };

// /**
//  * Calculate the cost of products by category type of product
//  * @param {Array} items - items of order
//  * @param {String} productType  - product category
//  * @returns Total price by product category
//  */
// function calculateProductsAmoutByType() {}

// function calculateTotalOrderPrice() {}

// /**
//  * Calculate the final cost of the order after all discounts have been applied.
//  * @param {Array} items - items of order
//  * @param {Object} shipping - shipping method
//  * @returns Total cost
//  */
// function calculateTotalOrderPriceAfterDiscout() {
//   const orderAmount = calculateTotalOrderPrice();
// }

// /**
//  * Find out the number of different products that have the word {search word} in product name
//  * @param {Array} items - items of order
//  * @param {String} searchWord - search word
//  * @returns Number of orders which exist with search word
//  */
// function findSearchWordInItemName() {}

// /**
//  * Check that a product with some id exists or not in order.
//  * @param {Array} items - items of order
//  * @param {Number} searchId - product id
//  * @returns Boolean
//  */
// function isIdIncludesInOrder() {}

// console.log(
//   'calculateOfProduct',
//   calculateProductsAmoutByType(order, 'clothing')
// ); // 15.99
// console.log('calculateTotalOrderPrice', calculateTotalOrderPrice(order)); // 510.49
// console.log(
//   'calculateTotalOrderPriceAfterDiscout',
//   calculateTotalOrderPriceAfterDiscout(order)
// ); // 429.96
// console.log(
//   'findSearchWordInItemName',
//   findSearchWordInItemName(order, 'Nike')
// ); // 2
// console.log('isIdIncludesInOrder', isIdIncludesInOrder(order, 389)); // true
