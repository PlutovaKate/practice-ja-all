// Модуль 2. Заняття 3. Масиви
// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// const genres = ["Jazz", "Blues"];
// genres.push("Рок-н-рол");
// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length-1]);
// console.log(genres.slice(0,1));
// genres.splice(0, 0, "Country", "Reggae");
// console.log(genres)

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = `8 11`;
// const total = values.split(" ");
// const sum = Number(total[0] * Number(total[1]))


// console.log(total);
// console.log(sum);



// Example 3 - Перебір масиву
// Виведіть рандомний елемент масиву, використовуй Math.random()

// const months = ['лютий','січень','березень','квітень','травень','червень', 'липень','серпень','вересень','жовтень','листопад','грудень'
// ];
// let randomMonth = Math.floor(Math.random() * (months.length));
// console.log(months[randomMonth]);



// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArray = names.split(",");
// const phonesArray = phones.split(",");
// console.log(namesArray);
// console.log(phonesArray);
// for(let i=0; i<=namesArray.length; i +=1) {
//     console.log(`${namesArray[i]}:${phonesArray[i]}`);
// }

// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';
// const array = string.split(" ");
// const newArray = array.shift() + array.pop();
// console.log(array.join(" "))


// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';
// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// Example 9 - Reverse
// Розгорни масив у зворотному порядку. Будь ласка, не використовуйте array.reverse(), щоб зробити завдання більш цікавим.

// const numbers = [2, 17, 94, 1, 23, 37];
// Example 10 - Fill
// Напишіть код, який заповнює новий масив наданим значенням.

// Очікуваний результат: (3, 'a') => ['a', 'a', 'a']
// const arraySize = 3;
// const valueToFill = 'a';
// Example 11 - Compact
// Напишіть код, який очищає масив від небажаних значень, таких як false, undefined, пусті рядки, нуль, null.

// Очікуваний результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
// const data = [0, 1, false, 2, undefined, '', 3, null];
// Example 12 - Without
// Напишіть код, який повертає новий масив без наданих значень. Використовуйте примітивні типи.

// Очікуваний результат: [1, 2, 3, 1, 2] без 1 => [2, 3, 2]
// const data = [1, 2, 3, 1, 2];
// const charToDelete = 1;
// Example 13 - Sum
// Напишіть код, який поверне суму рядка

// Очікуваний результат: 4367 => 20
// Очікуваний результат: 56349 => 27
// const digitSum1 = 4367;
// const digitSum2 = 56349;

// Модуль 2. Заняття 4. Функції
// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8
// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {}

// console.log(getRectArea('8 11'));
// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

// function logItems(items) {}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {}

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );
// Example 6 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage() {}

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
// Example 7 - Форматування часу
// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// function formatTime(minutes) {}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// Example 8 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Ви вже маєте такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// Example 9
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

// const calculateEngravingPrice = function (message, pricePerWord) {
//   // твій код
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)
// ); // 120
// Example 10
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

// const findLongestWord = function (string) {
//   // твій код
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'
// Example 11
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді. Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію

// const formatString = function (string) {
//   // твій код
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // повернеться оригінальний рядок

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // повернеться форматований рядок

// console.log(formatString('Curabitur ligula sapien.'));
// // повернеться оригінальний рядок

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
//   )
// );
// // повернеться форматований рядок
// Example 12
// Є масив logins з логінами користувачів. Напиши скрипт додавання логіна в масив logins. Логін, який додається повинен:

// проходити перевірку на довжину від 4 до 16-ти символів включно бути унікальним, тобто бути відсутнім в масиві logins Розбий завдання на підзадачі за допомогою функцій.

// Напиши функцію isLoginValid(login), в якій перевір кількість символів параметра login і поверни true або false в залежності від того, чи потрапляє довжина параметра в заданий діапазон від 4-х до 16-ти символів включно.

// Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх логінів і логін, який додається, як параметри і перевіряє наявність login в массиве allLogins, повертає true якщо такого логіна ще немає і false якщо логін вже використовується.

// Напиши функцію addLogin(allLogins, login) яка:

// Приймає новий логін і масив всіх логінів як параметри Перевіряє валідністьлогіна використовуючи допоміжну функцію isLoginValid Якщо логін не валідний, припинити виконання функції addLogin і повернути радок 'Помилка! Логін повинен бути від 4 до 16 символів' Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique Якщо isLoginUnique поверне false, тоді addLogin Не додає логін в массив масив і повертає рядок 'Такий логін уже використовується!' Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і повертає рядок 'Логін успішно доданий!'

// 🔔 Принцип єдиної відповідальності функції - кожна функція робить щось одне. Це дозволяє перевикористати код і змінювати логіку роботи функції тільки в одному місці, не зачіпаючи роботу програми в цілому.

// Предикатні функції повертають тільки true або false. Такі функції прийнято називати починаючи з is: isLoginUnique і isLoginValid в нашому випадку.

// isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true або false. isLoginValid тільки перевіряє чи валідний логін і повертає true або false. addLogin додають чи не додають логін в масив. При цьому для перевірок умови додавання використовує результати викликів інших функцій - isLoginUnique і isLoginValid.

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   // твій код
// };

// const isLoginUnique = function (allLogins, login) {
//   // твій код
// };

// const addLogin = function (allLogins, login) {
//   // твій код
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
// console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'