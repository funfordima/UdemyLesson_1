let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц", 0);
    time = prompt("Введите дату в формате YYYY-MM-DD", new Date());

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", 0);
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let b = prompt("Во сколько обойдется?", 0);

        if (typeof (a) === "string" && typeof (a) != null
            && typeof (b) === "string" && typeof (b) != null
            && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    };
}
chooseExpenses();

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let b = prompt("Во сколько обойдется?", 0);

//     if (typeof (a) === "string" && typeof (a) != null
//         && typeof (b) === "string" && typeof (b) != null
//         && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         i = i - 1;
//     }

//     i++;
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let b = prompt("Во сколько обойдется?", 0);

//     if (typeof (a) === "string" && typeof (a) != null
//         && typeof (b) === "string" && typeof (b) != null
//         && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         i = i - 1;
//     }

//     i++;
// } while (i < 2);

function detectDayBudget() {
    appData.moneyPerDay = +(appData.budget / 30).toFixed(2);

    alert(`Ежедневный бюджет ${appData.moneyPerDay}`);
}
detectDayBudget();

function detectLevel() {
    switch (true) {
        case (appData.moneyPerDay < 100):
            console.log("Минимальный уровень достатка");
            break;
        case (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000):
            console.log("Средний уровень достатка");
            break;
        case (appData.moneyPerDay > 2000):
            console.log("Средний уровень достатка");
            break;
        default:
            console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений", "");
        let percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Ваш доход в месяц с вашего депозита " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Введите название статьи необязательных расходов", "");
        appData.optionalExpenses[i] = a;
    }
}
chooseOptExpenses();