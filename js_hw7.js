/* 
Умови виконання ДЗ
Створити метод price(), який обчислює та повертає загальну вартість наданих послуг.
Створити метод minPrice(), який повертає мінімальну ціну.
Створити метод maxPrice(), який повертає максимальну ціну.
*/

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    sumPrice: function() {
        var sum = 0;
        for (let nameOfService in this) {
            var valueOfService = Number.parseFloat(this[nameOfService]);
            sum = !isNaN(valueOfService) ? sum += valueOfService : sum;
        };
        return (`Сума вартості послуг - ${sum} грн.`);
    },

    minPrice: function() {
        var minValue = Infinity;
        for (let nameOfService in this) {
            var valueOfService = Number.parseFloat(this[nameOfService]);
            minValue = !isNaN(valueOfService) && valueOfService < minValue ? valueOfService : minValue;
        }
        return (`Мінімальна вартість послуги - ${minValue} грн.`);
    },

    maxPrice: function() {
        var maxValue = 0;
        for (let nameOfService in this) {
            var valueOfService = Number.parseFloat(this[nameOfService]);
            maxValue = !isNaN(valueOfService) && valueOfService > maxValue ? valueOfService : maxValue;
        }
        return (`Максимальна вартість послуги - ${maxValue} грн.`);
    },

}

services['Стрижка бороди'] = "179.99 грн";
services['Розбити скло'] = "500.0 грн";

console.log(services.sumPrice())
console.log(services.minPrice())
console.log(services.maxPrice())
