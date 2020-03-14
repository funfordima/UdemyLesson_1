function calc(a) {
    return function (b) {
        return a * b;
    }
}

console.log(calc(2)(3)(2));