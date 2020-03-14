let money = +prompt("Ваш бюджет на месяц", 0);
let time = prompt("Введите дату в формате YYYY-MM-DD", new Date());

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = prompt("Во сколько обойдется?", 0);

    if (typeof (a) === "string" && typeof (a) != null
        && typeof (b) === "string" && typeof (b) != null
        && a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        a = prompt("Введите обязательную статью расходов в этом месяце", "");
        b = prompt("Во сколько обойдется?", 0);
    }
};

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
//         a = prompt("Введите обязательную статью расходов в этом месяце", "");
//         b = prompt("Во сколько обойдется?", 0);
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
//         a = prompt("Введите обязательную статью расходов в этом месяце", "");
//         b = prompt("Во сколько обойдется?", 0);
//     }

//     i++;
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert(`Ежедневный бюджет ${appData.moneyPerDay}`);

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