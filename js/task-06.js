let input;
let total = 0;
while (true) {
    input = prompt('Введи число');
    const value = Number(input);
    if (!isNaN(value)) {
        total += value;
    } else {
        alert('Было введено не число, попробуйте еще раз');
    }
    console.log(total);
    if (input === null) {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }
}
