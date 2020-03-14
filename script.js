let money = prompt("Ваш бюджет на месяц", 0);
let time = prompt("Введите дату в формате YYYY-MM-DD", new Date());

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let question1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let question2 = prompt("Во сколько обойдется?", 0);

appData[question1] = question2;

alert(money / 30);


console.log(appData);