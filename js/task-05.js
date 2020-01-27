let cost;
const userInput = prompt('Веедите страну доставки');
let normalizedUserInput = userInput !== null ? userInput.toLowerCase() : null;

switch (normalizedUserInput) {
    case 'китай':
        cost = 100;
        break;
    case 'чили':
        cost = 250;
        break;
    case 'австралия':
        cost = 170;
        break;
    case 'индия':
        cost = 80;
        break;
    case 'ямайка':
        cost = 120;
        break;
    case null:
        alert('Отменено пользователем');
        break;
    default :
        alert('В вашей стране доставка не доступна');
        normalizedUserInput = false;
}
    if (normalizedUserInput) {
        console.log(`Достава в ${normalizedUserInput} будет стоить ${cost} кредитов.`);
    }


