// коллбэк функции
//  const fnA = (message, callback) => {
// console.log(message)

// // console.log(callback)
// callback(100)
// }

// const fnB = (number) => {
//     console.log('Вызов функции fnB', number)
// }

// fnA('Вызов ф-ции fnA', fnB)
// fnB(200)

//////////////////////////

// const doMath = (a, b, callback) => {
//   const result = callback(a, b);
//   console.log(result);
// };

// const add = (x, y) => {
//   return x + y;
// };

// const sub = (x, y) => {
//   return x - y;
// };

// doMath(100, 20, add);
// doMath(120, 30, sub);

// или аналогичная запись:
// const doMath = (a, b, callback) => {
//     const result = callback(a, b);
//     console.log(result);
//   };

//   doMath(100, 20, function (x, y) {
//     return x + y;
//   });
//   doMath(120, 30, function (x, y) {
//     return x - y;
//   });

//////////////////////////
// замыкания:

// const fnA = function (parameter) {
//   const innerVariable = "значение внутренней переменной функции fnA";

//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log("вызов внутренней функции innerfunction");
//   };
//   return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

// ////////////////////////

// 1. Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній
// const letMeSeeYourName = (callback) => {
//   const yourName = prompt(`Введи своє імя`);

//   //   if (yourName !== "") {
//   //     callback(yourName);
//   //   }
//   yourName.trim() && callback(yourName);
// };
// const greet = (name) => {
//   console.log(`Привіт ${name}`);
// };

// letMeSeeYourName(greet);

///////////////////////////

// 2. Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль
//++++++++++++++++++++++++++++++++++++++++++++

// const makeProduct = (name, price, callback) => {
//   const obj = {
//     name,
//     price,
//     id: Date.now(),
//   };
//   callback(obj);
// };

// const showProduct = (product) => {
//   console.log(product);
// };

// makeProduct("Mango", 200, showProduct);

//////////////////////////////////

// 3. Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), що пам'ятає ім'я шефа під час її виклику
//Функція makeDish повинна логувати "<shef> is cooking <dish>"
//++++++++++++++++++++++++++++++++++++++++++++

// const makeShef = (shefName) => {
//   return (dish) => {
//     return `${shefName} is cooking ${dish}`;
//   };
// };

// const makeDish = makeShef("Poly");
// console.log(makeDish("sup"));

////////////////////////////////////////

// 5. Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//Яка застосовується до кожного елементу масиву.
//Функція each повинна повернути новий масив, елементами
//якого будуть результати виклику callback
//callback функція повинна множити елементи на 2

// const each = (array, callback) => {
//   const newArr = [];
//   array.forEach((element) => {
//     newArr.push(callback(element));
//   });
//   return newArr;
// };

// const doubleValues = (element) => element * 2;

// const array = [3, 5, 6, 34, 8, 83, 12, 34];
// console.log(each(array, doubleValues));

////////////////////////////////////////

// 4. Виправте помилки, щоб код працював

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

/////////////////////////////////////////

// 6. Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка вважає та логує кількість своїх викликів
// const makeCounter = () => {
//   let count = 0;
//   return () => {
//     count += 1;
//     return count;
//   };

// };

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

//////////////////////////////////////////

// 7. Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає буль true, якщо рядок збігається зі збереженим
//паролем і false - якщо не збігається

// const savePassword = (password) => {
//   return (userPassword) => {
//     return password === userPassword;
//   };
// };

// const userPassword = savePassword("jmjytbnj");
// console.log(userPassword('loj')) // false
// console.log(userPassword('jmjytbnj')) // true

////////////////////////////////////////

// Напишіть функцію propertyValue(array, key), яка приймає як аргументи масив об'єктів та
//ім'я властивості, а потім повертає всі значення даної властивості з масиву об'єктів.

// var litmir = [
//   { author: "Хэленка", title: "Улетела сказка" },
//   { author: "Коул Кресли", title: "Восстание Аркан" },
//   { author: "Райчел Мид", title: "Золотая лилия" },
// ];

// const propertyValue = (array, key) => {
//   let propArray = [];
//   array.forEach((element) => {
//     propArray.push(element[key]);
//   });
//   return propArray;
// };

// console.log(propertyValue(litmir, "title")); // Улетела сказка,Восстание Аркан,Золотая лилия
// console.log(propertyValue(litmir, "author")); // Хэленка,Коул Кресли,Райчел Мид

/////////////////////map() вернуть масив с удвоенными числами

// const numbers = [5, 10, 15, 20, 25];

// const doubleNums = numbers.map((number) => {
//   console.log(number);
//   return number * 2;
// });
// console.log(doubleNums)

////////////////////////// получить значения всех name

// const players = [
//   { id: "player-1", name: "mango", points: 54, online: false },
//   { id: "player-2", name: "poly", points: 24, online: true },
//   { id: "player-3", name: "kiwi", points: 45, online: false },
//   { id: "player-4", name: "ajax", points: 66, online: true },
// ];

// const playerNames = players.map((player) => {
//   console.log(player);
//   return player.name;
// });
// console.log(playerNames);

//или///
// const playerNames = players.map((player) => player.name);
// console.log(playerNames);

//////////////////////////filter() найти кто он-лайн и кто не он-лайн

// const players = [
//   { id: "player-1", name: "mango", points: 54, online: false },
//   { id: "player-2", name: "poly", points: 24, online: true },
//   { id: "player-3", name: "kiwi", points: 45, online: false },
//   { id: "player-4", name: "ajax", points: 66, online: true },
// ];

// const onlinePlayers = players.filter((player) => player.online);
// console.table(onlinePlayers);

// const onlinePlayers = players.filter((player) => !player.online);
// console.table(onlinePlayers);

// const pointPlayer = players.filter((player) => player.points > 40);
// console.table(pointPlayer);

///////////////////////////////////find()

// const numbers = [5, 10, 15, 20, 25];
// const number = numbers.find((number) => number > 15);
// console.log(number);

///////////////////////////////////find()

// const players = [
//   { id: "player-1", name: "mango", points: 54, online: false },
//   { id: "player-2", name: "poly", points: 24, online: true },
//   { id: "player-3", name: "kiwi", points: 45, online: false },
//   { id: "player-4", name: "ajax", points: 66, online: true },
// ];

// const playerToFind = "kiwi";
// const playerWithName = players.find(player => player.name === playerToFind);
// console.log(playerWithName);

///////////////////////////////////////////

//2 (filter()) Припустимо, що ми маємо той самий набір даних, що й вище, але цього разу ми хочемо
//отримати детальну інформацію про студентів, які набрали більше 50 балів.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// const newArr = studentRecords.filter(student > student.marks > 50);
// console.log(newArr);

///////////////////////////////////////////////

//3  (reduce()) Необхідно одержати загальну суму балів студентів.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const totalMarks = studentRecords.reduce((total, el) => {
//   return (total += el.marks);
// }, 0);

// console.log(totalMarks);

//////////////////////////////////

//4 (map(), filter()) Необхідно отримати лише імена студентів, які набрали більше 50 балів із того ж набору
//даних.
// let studentRecords = [
//     { name: "John", id: 123, marks: 98 },
//     { name: "Baba", id: 101, marks: 23 },
//     { name: "yaga", id: 200, marks: 45 },
//     { name: "Wick", id: 115, marks: 75 },
//   ];

//   const nameStudents = studentRecords.filter(student => student.marks > 50).map(student => student.name)
//   console.log(nameStudents)

/////////////////////////////////////

//5 (filter(), reduce()) Необхідно отримати загальну суму балів студентів із id більше 120.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const studentName = studentRecords.filter((record) => record.id > 120);
// або
// const studentName = studentRecords
//   .filter(({ id }) => id > 120)
//   .reduce((total, record) => record.marks + total, 0);

// console.log(studentName);

////////////////////////////////

// Використовуючи метод map(), напишіть код, який отримує з масиву рядків новий масив,
//що містить їх довжини.
// const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

// const vegetableLength = vegetables.map((vegetable) => vegetable.length);

// console.log(vegetableLength);

///////////////////////////////////

// Перед вами змінна, що містить рядок. Напишіть код, який створює масив, який
//складатиметься з перших літер слів рядка str.

// const str = "Каждый охотник желает знать, где сидит фазан.";

// const firstLetter = str.split(" ").map((letter) => letter[0]);

// console.log(firstLetter); // [К,о,ж,з,г,с,ф]

/////////////////////////////////////

// (map(), filter(), reduce()) Необхідно вивести загальну кількість студентів із балами
//більше 50, отриманими після нарахування заохочення до 15 балів.
//Використовуючи map(), додається заохочення до 15 балів студентам, які набрали менше 50 балів.
// Потім використовуємо filter() для масиву студентів, що повертається функцією map().
// Так ми знайдемо всіх студентів із відмітками понад 50.
// Нарешті ми використовували функцію reduce() для повертаного функцією filter()
// масиву студентів, щоб повернути суму оцінок.

// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const allStudents = studentRecords
//   .map((student) => {
//     if (student.marks < 50) {
//       student.marks += 15;
//     }
//     return student;
//   })
//   .filter((student) => student.marks > 50)
//   .reduce((total, student) => total + student.marks, 0);
// або
// const allStudents = studentRecords
//   .map((student) => {
//     if (student.marks < 50) {
//       student.marks += 15;
//     }
//     return student;
//   })
//   .filter(({ marks }) => marks > 50)
//   .reduce((total, { marks }) => total + marks, 0);

// console.log(allStudents);

///////////////////////////////////////////////

// Аналог map
// Напишіть функцію myMap(array, callback), яка першим параметром приймає масив, а другим - функцію, яка застосовується до кожного елемента масиву.
// Функція myMap повинна повернути новий масив, елементами якого будуть результати виклику колббека.
// Вирішуємо за допомогою for of.
// */

// const numbers = [64, 49, 36, 25, 16];

// // const result = numbers.map((number) => number * 2);
// // console.log(result);

// // логика map:

// const myMap = (array, callback) => {
//   const newArr = [];
//   array.forEach((element) => {
//     newArr.push(callback(element));
//   });
//   return newArr;
// };

// function icreament(value) {
//   return value * 2;
// }

// console.log(myMap(numbers, icreament));

///////////////////////////////////////

// Сортування складних типів
// Виконати сортування масиву об'єктів, не змінюючи вихідний масив:
// - за зростанням та зменшенням значення якості price.
// - на ім'я в алфавітному та зворотному алфавітному порядку.
// */

// const items = [
//   { name: "Samsung", price: 2000 },
//   { name: "Asus", price: 2500 },
//   { name: "LG", price: 1900 },
//   { name: "Dell", price: 1200 },
//   { name: "BenQ", price: 900 },
// ];

// const bigPrice = [...items].sort((a, b) => a.price - b.price);
// const lawPrice = [...items].sort((a, b) => b.price - a.price);
// const inAlfabet = [...items].sort((a, b) => a.name.localeCompare(b.name));
// const outAlfabet = [...items].sort((a, b) => b.name.localeCompare(a.name));

// console.log(bigPrice);
// console.log(lawPrice);
// console.log(inAlfabet);
// console.log(outAlfabet);

///////////////////////////////////////

/*
  Знайти перше число, кратне п'яти, та його індекс
  Вирішуємо за допомогою for спочатку
*/

// const numbers = [1, 10, 3, 25, 5, 60, 1000, 7, 12, 9];

// // for (let i = 0; i <= numbers.length; i += 1) {
// //   if (numbers[i] % 5 === 0) {
// //     console.log(`Перше число, яке кратне 5: ${numbers[i]} індекс якого ${i}`);
// //     break;
// //   }
// // }

// const firstNumbers = numbers.find((number) => number % 5 === 0);
// const indexFirstElement = numbers.findIndex((number) => number % 5 === 0);
// console.log(
//   `Перше число, яке кратне 5: ${firstNumbers} індекс якого ${indexFirstElement}`
// );
//////////////////////////////////////////

// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// // Рішення
// function createProduct(obj, callback) {
//   const newObj = { ...obj, id: 123 };
//   callback(newObj);
// }

// function logProduct(newObj) {
//   console.log(newObj);
// }

// function logTotalPrice({ price, quantity }) {
//   const totalPrice = price * quantity;
//   console.log(totalPrice);
//   return totalPrice;
// }

// console.log(createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct));
// console.log(
//   createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice)
// );

////////////////////////////////////////////////////////
// Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// // Рішення
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not excced ${TRANSACTION_LIMIT} limits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can not excced ${this.balance} limits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not excced ${TRANSACTION_LIMIT} limits`);
//     } else if (amount <= 0) {
//       onError(`Amount can not excced ${this.balance} limits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`Succes ${message}`);
// }
// function handleError(message) {
//   console.log(`Error ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

////////////////////////////////////////

// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека. Використай forEach() для перебору масива

// // // Рішення
// function each(array, callback) {
//   const newArr = [];
//   array.forEach((element) => {
//     newArr.push(callback(element));
//   });
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

/////////////////////////////////////////////////

// Example 4 - Метод forEach
// Створи стрілочну функцію logItems(), яка виводить в консоль елементи масива, зроби перебір за допомогою методу forEach().

// const logItems = (array) => {
//   array.forEach((element, index) => {
//     console.log(element, index);
//   });
// };

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

////////////////////////////////////////////

// Example 5 - Iterate an object
// За допомогою методу forEach() виведи всі name з об'єкта employees капслоком. Потім виведи у кого зарплата більше 12000 А в кінці підрахуй скільки компанія виплачує працівникам, скільки працівників є у компанії та виведи імена працівників, до прикладу Company pay 23000 for 2 employeers: Alex,Clark

// const employees = [
//   {
//     id: 101,
//     name: "Alex",
//     sal: 10000,
//   },
//   {
//     id: 102,
//     name: "Clark",
//     sal: 13000,
//   },
//   {
//     id: 103,
//     name: "John",
//     sal: 12000,
//   },
//   {
//     id: 104,
//     name: "Tony",
//     sal: 20000,
//   },
// ];

// let totalSal = 0;
// const names = [];

// const employeesName = employees.forEach(({ name, sal }) => {
//     console.log(name.toUpperCase());
//     if (sal > 12000) {
//       console.log(`${name} has salary ${sal}`);
//     }

//   totalSal += sal;
//   names.push(name);
// });
// console.log(
//   ` Company pay sal: ${totalSal} for ${employees.length} employeers: ${names}`
// );
// console.log(employees.length);

//////////////////////////////////

// Example 6 - Count products **
// Підрахуй і виведи новий об'єкт в якому буде підпраховано скільки яких продуктів в масиві products

// // Oчікуваний результат
// {
//   apple: 2,
//   banana: 2,
//   avocado: 1,
//   cherry:1
// }

// const products = ["apple", "apple", "banana", "banana", "avocado", "cherry"];

// const countProducts = (products) => {
//   let sumProducts = {};
//   products.forEach((product) => {
//     // console.log(sumProducts.hasOwnProperty(product));
//     sumProducts[product] = (sumProducts[product] || 0) + 1;
//   });
//   console.log(sumProducts);
// };
// countProducts(products);

////////////////////////////////

// ??????Example 7 - Count vowel
// Напишіть функцію під назвою vowelCount, яка приймає рядок і повертає об’єкт із ключами як голосною та значеннями як кількість разів, коли голосна з’являється в рядку. Ця функція має бути нечутливою до регістру, тому мають враховуватися малі та великі літери

// console.log(vowelCount('Elie')); // {e:2,i:1};
// console.log(vowelCount('Tim')); // {i:1};
// console.log(vowelCount('Matt')); // {a:1})
// console.log(vowelCount('hmmm')); // {};
// console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};

/////////////////////////////////

// ????????????Example 8 - Add Key And Value
// Напишіть функцію під назвою addKeyAndValue, яка приймає масив об’єктів, та обєкт ключ,значення в результаті повертає масив, переданий у функцію з новим ключем і значенням, доданим для кожного об’єкта

// console.log(
//   addKeyAndValue(
//     [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }],
//     { key: 'title', value: 'instructor' }
//   )
// ); // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
// ????????????Example 9 - groupBy()
// Напишіть функцію groupBy(), яка групує елементи з масиву за значенням, що повертається зворотним викликом, коли елемент із масиву передається як аргумент.

// const input = [
//   {
//     name: 'John',
//     yearOfBirth: 1988,
//     placeOfBirth: 'New York',
//   },
//   {
//     name: 'Nancy',
//     yearOfBirth: 1963,
//     placeOfBirth: 'New York',
//   },
//   {
//     name: 'John',
//     yearOfBirth: 1980,
//     placeOfBirth: 'Toronto',
//   },
// ];

// console.log(groupBy(input, objectEl => objectEl.name));
// //Очікуваний резульат:
// // {
// //   ❗️John: [
// //     {
// //       name: 'John',
// //       yearOfBirth: 1988,
// //       placeOfBirth: 'New York',
// //     },
// //     {
// //       name: 'John',
// //       yearOfBirth: 1980,
// //       placeOfBirth: 'Toronto',
// //     }
// //   ],
// //   ❗️Nancy: [
// //     {
// //       name: 'Nancy',
// //       yearOfBirth: 1963,
// //       placeOfBirth: 'New York',
// //     }
// //   ]
// // }

// console.log(groupBy(input, objectEl => isOdd(objectEl.yearOfBirth)));
// //Очікуваний резульат:
// // {
// //   ❗️false: [
// //     {
// //       name: 'John',
// //       yearOfBirth: 1988,
// //       placeOfBirth: 'New York',
// //     },
// //     {
// //       name: 'John',
// //       yearOfBirth: 1980,
// //       placeOfBirth: 'Toronto',
// //     }
// //   ],
// //   ❗️true: [
// //     {
// //       name: 'Nancy',
// //       yearOfBirth: 1963,
// //       placeOfBirth: 'New York',
// //     }
// //   ]
// // }

// Модуль 4. Заняття 8. Перебираючі методи масиву
// Practice 1 - CARS
// Напиши функції які за допомогою методів масиву, що перебирають (жодних for, splice і т. д.) виконують такі операції над масивом об'єктів користувачів із файлу cars.js.

// Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = cars => {};

// console.table(getModels(cars));
// Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) => {};

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
// Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) => {};

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));
// Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = cars => {};

// console.table(getCarsWithDiscount(cars));
// Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) => {};

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// Example 6 - Метод find
// const getCarByModel = (cars, model) => {};

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));
// Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

// const sortByAscendingAmount = cars => {};

// console.table(sortByAscendingAmount(cars));
// Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => {};

// console.table(sortByDescendingPrice(cars));
// Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

// const sortByModel = (cars, order) => {};

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
// Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = cars => {};

// console.log(getTotalAmount(cars));
// Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = cars => {};

// console.table(getModelsOnSale(cars));
// Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = cars => {};

// console.table(getSortedCarsOnSale(cars));
// Practice 2 - USERS
// Напиши функції які за допомогою методів масиву, що перебирають (жодних for, splice і т. д.) виконують такі операції над масивом об'єктів користувачів із файлу users.js.

/////////////////////////////////////////////

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

///////////////////////////////////////////////
// Example 1
// Отримати масив імен всіх користувачів (поле name).

// const getUserNames = users => users.map(({name}) => name);

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//////////////////////////////

// Example 2
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

// const getUsersWithEyeColor = (users, color) =>
//   users.filter(({ eyeColor }) => eyeColor === color);

// console.log(getUsersWithEyeColor(users, "blue")); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

///////////////////////////////////

// Example 3
// Отримати масив імен користувачів за статтю (поле gender).

// const getUsersWithGender = (users, gender) => {
//  return users.filter((user) => user.gender === gender).map(({name}) => name);
// };

// console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Example 4
// Отримати масив лише неактивних користувачів (поле isActive).

// const getInactiveUsers = users => {
//   return users.filter(({isActive}) => !isActive).map(({name}) => name)
// };

// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

// Example 5
// Отримати користувача (не масив) по email (поле email, він унікальний).

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {об'єкт користувача Elma Head}

// Example 6
// Отримати масив користувачів які у вікову категорію від min до max років (поле age).

// const getUsersWithAge = (users, min, max) => {
//   return users
//     .filter(({ age }) => age > min && age < max)
//     .map(({ name }) => name);
// };

// console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

// Example 7
// Отримати загальну суму балансу (поле balance) всіх користувачів.

// const calculateTotalBalance = (users) => {
//   return users.reduce(
//     (totalBalance, { balance }) => (totalBalance += balance),
//     0
//   );
// };

// console.log(calculateTotalBalance(users)); // 20916

// Example 8
// Масив імен всіх користувачів, у яких є один із зазначеним ім'ям.

// const getUsersWithFriend = (users, friendName) =>
//   users
//     .filter(({ friends }) => friends.some((friend) => friend === friendName))
//     .map(({ name }) => name);

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// Example 9
// Масив імен (поле name) людей, відсортованих залежно від кількості їх друзів (поле friends)

// const getNamesSortedByFriendsCount = (users) =>
//   users.sort((a, b) => a.friends.length - b.friends.length).map(({ name }) => name);

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Example 10
// Отримати масив усіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

// const getSortedUniqueSkills = (users) => {
//   return users
//     .reduce((allSkills, { skills }) => {
//       allSkills.push(...skills);
//       return allSkills;
//     }, [])
//     .filter((friends, index, arr) => arr.indexOf(friends) === index);
// };

// console.log(getSortedUniqueSkills(users));
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit' , 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam'

// Practice 3 - CHARACTERS
// Напиши функції які за допомогою методів масиву, що перебирають (жодних for, splice і т. д.) виконують такі операції над масивом об'єктів героїв із файлу characters.js.

// MAP
// Get an array of all names
// Get an array of all heights
// Get an array of objects with just name and height properties
// Get an array of all first names
// REDUCE
// Get the total mass of all characters
// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color (hint. a map of eye color to count)
// FILTER
// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters Get all female characters
// SORT
// Sort by name
// Sort by mass
// Sort by height
// Sort by gender
// EVERY
// Does every character have blue eyes?
// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?
// SOME
// Is there at least one male character?
// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?
// Practive 4 - ORDER
// Напиши функції які за допомогою методів масиву, що перебирають (жодних for, splice і т. д.) виконують такі операції над масивом об'єктів героїв із файлу order.js.

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
