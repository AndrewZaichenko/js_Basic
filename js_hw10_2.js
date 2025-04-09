/*
Напишіть регулярний вираз, який знайде послідовність з шести або більше символів, які не містять літери «А» (великої або малої)
Приклад виконання:
Повинен знаходити: Wonderful, Joyful
Не повинен знаходити: Happiness, Time, Task, Apple
*/

let initialString = "Wonderful, Joyful, Happiness, Time, Task, Apple" 
let re = /\b[b-z]{6,}/gi;

let withoutA = initialString.match(re);
console.log(withoutA)
