const credits = 23580;
const pricePerDroid = 3000;
let value = prompt('Сколько дроидов хотите преобрести?');
let priceDroids = value * pricePerDroid;
if (value === null) {
    value = ('Отменено пользователем!');
    console.log(value);
} else if (priceDroids > credits) {
    value = ('Недостаточно средств на счету!');
    console.log(value);
} else {
    console.log(`Вы купили ${value} дроидов, на счету осталось ${credits - priceDroids} кредитов.`);
}