// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
const num1 = 5
const num2 = 5
const num3 = "5"


const result = num1 + num2 + num3
console.log(result);



// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.

const emeil = "pablo12314@gmail.com";
console.log(emeil.indexOf("@"));


// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
const my = "My"
const name = "name" 
const is = "is"

const fullName = `${my} ${name} ${is} viktor`
console.log(fullName);


// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»
const userName = prompt("enter your name")
const payment = prompt("enter the price")
console.log(`thank you, ${userName}! to pay is ${payment}`);
