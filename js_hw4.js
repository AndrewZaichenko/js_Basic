/*
Опис ДЗ: Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел 
в діапазоні від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. Обчислити відсоткове 
співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). 
Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

Умови виконання ДЗ
Функція виводить інформацію
Кількість згенерованих чисел: кількість чисел
Парних чисел: кількість парних чисел
Не парних чисел: кількість не парних чисел
Відсоток парних до не парних:
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
*/


function checkProbabilityTheory(count) {
    let oddCounter = 0;
    let evenCounter = 0;

    for (let randomDigit; count > 0; count--) {
        const minCeiled = Math.ceil(100);
        const maxFloored = Math.floor(1000);
        randomDigit = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        
        if (randomDigit % 2 === 0){
            evenCounter++; 
        } else {
            oddCounter++;
        }
    }

    let percentOfOdd = (oddCounter / (oddCounter + evenCounter)  * 100).toFixed(2);
    let percentOfEven = (evenCounter / (oddCounter + evenCounter) * 100).toFixed(2);
    let percentageRatio;

    if (percentOfOdd / percentOfEven === 1) {
        percentageRatio = 'Bingo! Percentage ratio is exactly Equal.'
    } else if (Math.round(percentOfOdd / percentOfEven) === 1) {
        percentageRatio = 'Percentage ratio is close to be Equal.'
    } else if (Math.round(percentOfOdd / percentOfEven) === 0) {
        percentageRatio = 'Percentage ratio is far from to be Equal.'
    } else {
        percentageRatio = 'Percentage ratio is too far from to be Equal.'
    }

    return `Overall quantity of generated digits = ${oddCounter + evenCounter}.\nODD digits = ${oddCounter}\nEVEN digits = ${evenCounter}\nPercentage ratio is ${percentOfOdd}% ODD to ${percentOfEven}% EVEN.\n${percentageRatio}`
}

result = checkProbabilityTheory(53)
console.log(result)
