// n = objects
// r = sample
// C(n, r) = n! / (r! * (n - r)!)
function C(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}
 
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    let ret = 1;
    for (let i = 1; i <= n; i++) {
        ret = ret * i;
    }
    return ret;
}

function getCombinations(array) {
    let result = [];

    function combine(start = 0, comb = []) {
        if (comb.length > 0) {
            result.push([...comb]);
        }

        for (let i = start; i < array.length; i++) {
            comb.push(array[i]);
            combine(i + 1, comb);
            comb.pop();
        }
    }

    combine();
    return result;
}
console.log(getCombinations([1, 2, 3]));
// [[1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]

function getCombinationsWithSize(array, size) {
    let result = [];

    function combine(start = 0, comb = []) {
        if (comb.length === size) {
            result.push([...comb]);
        }

        for (let i = start; i < array.length; i++) {
            comb.push(array[i]);
            combine(i + 1, comb);
            comb.pop();
        }
    }

    combine();
    return result;
}
console.log(getCombinationsWithSize([1, 2, 3], 2));
// [[1, 2], [1, 3], [2, 3]]
