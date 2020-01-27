const ADMIN_PASSWARD = 'jqueryismyjam';
let message = prompt('Введите пароль');
if (message === ADMIN_PASSWARD) {
    message = ('Добро пожаловать!');
} else if (message === null) {
    message = ('Отменено пользователем!');
} else {
    message = ('Доступ запрещен, неверный пароль!');
}
console.log(message);
alert(message);