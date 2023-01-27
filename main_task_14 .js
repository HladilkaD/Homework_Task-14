let sum = (function() {
    let x = 0;
    return function (inner) {
        return x = x + inner;
    }
})();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));