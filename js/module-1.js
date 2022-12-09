// Модуль 1. Заняття 1. Змінні, типи та оператори
// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);



// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students = students + 50;
// console.log(students);
// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);
// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.5;
// const result = Math.floor(value);
// console.log(result);

// const result = Math.ceil(value);
// console.log(result);

// const result = Math.round(value);
// console.log(result)


// Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;

// const message = `${companyName} has ${repairBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';

// weight = Number.parseFloat(weight);
// height = Number.parseFloat(height);

// const bmi = weight / height ** 2;
// console.log(bmi); // 28.7

// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);
// Example 8 - Логічні оператори
// Яким буде результат виразів?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true && true);

// console.log(false && true);

// console.log(true && false);

// console.log(false && false);

// console.log(true || true);

// console.log(false || true);

// console.log(true || false);

// console.log(false || false);

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// Example 9 - Оператор % та методи рядків
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 1441;
// const minutes = totalMinutes % 60;
// const hours = Math.round(totalMinutes / 60);

// console.log(hours,":",minutes);


// Example 10 - Оператор % та методи рядків
// У змінній $year зберігається рік. Визначте, чи він високосний (у такому році є 29 лютого). Рік буде високосним у двох випадках: або він ділиться на 4, але при цьому не ділиться на 100, або ділиться на 400.

// const year = Number(prompt('Перевірь чи є рік високосним: '));
// if (year % 4 ===0 && year % 100 !== 0 || year % 400 === 0) {
//     console.log(`рік високосний`)
// } else {
//     console.log(`рік не високосний`)
// }

// Модуль 1. Заняття 2. Розгалуження. Цикли
// Завдання 1
// Напиши скрипт перевірки кількості товарів на складі. Є змінні total (кількість товарів на складі) і ordered (одиниць товару в замовленні).

// Порівняй ці значення і за результатами виведи:

// Якщо в замовленні вказано число, що перевищує кількість товарів на складі, то виведи повідомлення "На складі недостатньо товарів!".
// В іншому випадку виводь повідомлення "Замовлення оформлено, з вами зв'яжеться менеджер".
// Перевір працездатність коду з різними значеннями змінної ordered, наприклад 20, 80 і 130.

// const total = 100;
// const ordered = 10;
// if(ordered > total) {
//     console.log("На складі недостатньо товарів!")
// }else {
//     console.log("Замовлення оформлено, з вами зв'яжеться менеджер")
// }


// Завдання 2
// Напиши скрипт, який імітує авторизацію адміністратора в панелі управління.

// Є змінна message в яку буде записано повідомлення про результат. При завантаженні сторінки у відвідувача запитується пароль через prompt:

// Якщо відвідувач вводить "ADMIN", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:

// Якщо введено пароль "jqueryismyjam", то вивести рядок "Здрастуйте!"
// Інакше виводити рядок "Невірний пароль"
// console.log(prompt("Введіть ваш пароль"))

// const user = prompt("Введи пароль");
// const ADMIN_LOGIN = 'ADMIN';
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// if (user == "" || user === null) {
//     console.log(message = `Скасовано`);

// } else if(user === 'jqueryismyjam') {
//     console.log(message = `Здрастуйте!`);

// } else if(user !== 'jqueryismyjam') {
//     console.log(message = `Я вас не знаю`);
        
    
// }  else {
// console.log(message = `Невірний пароль`);
// }

// Завдання 3
// На рахунку користувача є 23580 кредитів, значення зберігається в змінній credits (створи і привласни). Користувач вирішує купити ремонтних дроїд, які коштують по 3000 кредитів за штуку. Ціна одного дроїда зберігається в змінній pricePerDroid (створи і привласни).

// При відвідуванні сторінки, використовуючи prompt, необхідно запитати кількість дроїдів, які користувач хоче купити і зберегти в змінну.

// Напиши скрипт який:

// Якщо в prompt була натиснута кнопка Cancel, виводить в консоль повідомлення 'Скасовано користувачем!'.
// В іншому випадку, розраховує загальну ціну замовлення і зберігає в змінній totalPrice.
// Перевіряє чи зможе користувач оплатити замовлення:
// якщо сума до оплати перевищує кількість кредитів на рахунку, виводь в консоль повідомлення 'Недостатньо коштів на рахунку!'.
// в іншому випадку необхідно порахувати залишок кредитів на рахунку і вивести повідомлення 'Ви купили [число] дроїдів, на рахунку залишилося [число] кредитів.'.
// 
// const sale = prompt("Скільки дроїдів ви бажаєте купити?");
// const credits = 23580;
// const pricePerDroid = 3000;

// const totalPrice = pricePerDroid * sale;
// const left = totalPrice - credits;

// if (sale === "" || sale === null) {
//     console.log('Скасовано користувачем!');
// }else if(sale < credits); {
//     console.log('Недостатньо коштів на рахунку!');
// }else {
//     console.log('Ви купили число дроїдів, на рахунку залишилося ${left} кредитів.')
// }

// Завдання 4
// Користувач може оформити доставку товару до себе в країну, вказавши її при відвідуванні сторінки в prompt. Врахуй, користувач може ввести ім'я країни не тільки буквами нижнього регістра, а наприклад 'кИтАЙ'.

// Напиши скрипт який виводить повідомлення про вартість доставки в зазначену країну. Обов'язково використовуй switch. Формат повідомлення: 'Доставка в [країна] буде коштувати [ціна] кредитів'.

// Але доставка є не скрізь, якщо зазначеної країни немає в списку, то виводь в alert повідомлення 'У вашій країні доставка недоступна'.

// Нижче наведено список країн і вартість доставки.

// Китай - 100 кредитів
// Чилі - 250 кредитів
// Австралія - 170 кредитів
// Індія - 80 кредитів
// Ямайка - 120 кредитів

// const country = prompt("Введи назву країни");
// switch (country) {
//   case "":
//   case null:
//     console.log(`Введи назву країни`);
//     break;

//   case "китай":
//     console.log('Доставка в ${country} буде коштувати 100 кредитів');
//     break;

//   case "чилі":
//     console.log("Доставка в ${country} буде коштувати 250 кредитів");
//     break;

//   case "Австралія":
//     console.log("Доставка в ${country} буде коштувати 170 кредитів");
//     break;

//   case "Індія":
//     console.log("Доставка в ${country} буде коштувати 80 кредитів");
//     break;

//   case "Ямайка":
//     console.log("Доставка в ${country} буде коштувати 120 кредитів");
//     break;

//   default:
//     console.log("У вашій країні доставка недоступна");
// }

// country === "китай"
// ? console.log("Доставка в ${country} буде коштувати 100 кредитів");
// ! console.log("У вашій країні доставка недоступна");

// country === "китай" && console.log("Доставка в ${country} буде коштувати 100 кредитів");

// const country = prompt("Введи назву країни");
// console.log(country);
// if (country == "" || country ===null) {
// console.log(`Введи назву країни`)
// }
// else if (country.toLowerCase() === "китай") {
// console.log('Доставка в ${country} буде коштувати 100 кредитів');
// }
// else if (country.toLowerCase() === "чилі") {
// console.log('Доставка в ${country} буде коштувати 250 кредитів');
//     }
// else if (country.toLowerCase() === "Австралія") {
// console.log('Доставка в ${country} буде коштувати 170 кредитів');
//         }
// else if (country.toLowerCase() === "Індія") {
// console.log('Доставка в ${country} буде коштувати 80 кредитів');
//             }
// else if (country.toLowerCase() === "Ямайка") {
// console.log('Доставка в ${country} буде коштувати 120 кредитів');
//                 }
// else {
// console.log('У вашій країні доставка недоступна');
// }

// Завдання 5
// Напиши скрипт який просить відвідувача ввести число в prompt до тих пір, поки відвідувач не натисне Cancel і кожен раз додає введене значення до загальної суми.

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення додається до значення змінної total.
// Операція введення числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач припинив введення натиснувши кнопку Cancel, показати alert з рядком 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не потрібно. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було написано не число, спробуйте ще раз', при цьому результат prompt плюсувати до загальної суми не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

// let input;
// let total = 0;
// const num = prompt("Введи число");
// const message = "Загальна сума чисел дорівнює ${total}";
// alert(message);

// Example 6 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної monthNumber.

// Якщо значення змінної monthNumber:

// 12, 1, 2, виводь рядок "Це зима"
// 3, 4, 5, виводь рядок "Це весна"
// 6, 7, 8, виводь рядок "Це літо"
// 9, 10, 11, виводь рядок "Це осінь"

// const Number = prompt(`Введи число від 1 до 12 включно`);
// // const monthNumber = Math.random() * (12 - 1) + 1;
// if(Number === 12 || Number === 1 || Number === 2) {
//     console.log("Це зима")
    
// } else if (Number === 3 || Number ===4 || Number === 5) {
//     console.log("Це весна")
   
// } else if (Number === 6 || Number === 7 || Number === 8) {
//     console.log("Це літо")

// } else (Number === 9 || Number === 10 || Number === 11); {
//     console.log("Це осінь")
// }


// Example 7 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;
// for (let i = min; i <= max; i += 1 ) 
// if(i % 5 === 0) {
//     console.log(i)
// } 


// Example 8 - Цикл for
// Напишіть консольну функцію, на яку користувач вводить суму зп і кількість місяців з допомогою prompt() не забуваємо, що промпт повертає рядок. А податкова обчислює кінцеву суму зп без податків протягом року, Суму податків всього і чистий дохід розробника за кожен місяць. Для обчислення суми з урахуванням відсотків використовуйте цикл for.

// const salary = Number(prompt("add your salary"));
// const month = Number(prompt("enter your working month"));

// let tax = 0;
// for (let i = 1; i < month; i += 1) {
//     tax += salary * 0.05;
// }
// console.log(tax)

// const clearSalary = salary * month - tax;
// console.log(clearSalary)

// const userBrowser = navigator.userAgent
// console.log(userBrowser)
  
// let num = 3;
// while (num <= 10) {
//     console.log(num);
//     num += 2;
// }

// let iterationNumber = 1;
// let sum = 0;
// while (iterationNumber <= 100) {
//     sum += iterationNumber;
//     iterationNumber += 1;
   
// }

// console.log (`Sum is ${sum}`);

// let num = 1000;
// let counter = 0;
// while (num >= 50) {
//     counter += 1;
//     num /=2;
// }

// console.log(num);
// console.log(counter)
// let num;

// do {
// num = Number(prompt(`write bigger 100`));
// } while (num < 100)
