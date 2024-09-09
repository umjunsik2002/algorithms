// n = objects
// r = sample
// P(n, r) = n! / ((n - r)!)
function P(n, r) {
    return factorial(n) / factorial(n - r);
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

function getPermutations(array) {
    let ret = [];
    
    function permute(array, m = []) {
        if (m.length > 0) {
            ret.push(m);
        }
        for (let i = 0; i < array.length; i++) {
            let curr = array.slice();
            let next = curr.splice(i, 1);
            permute(curr, m.concat(next));
        }
    }
    
    permute(array);
    return ret;
}
console.log(getPermutations([1, 2, 3]));
/*
[
    [1],
    [1, 2],
    [1, 2, 3],
    [1, 3],
    [1, 3, 2],
    [2],
    [2, 1],
    [2, 1, 3],
    [2, 3],
    [2, 3, 1],
    [3],
    [3, 1],
    [3, 1, 2],
    [3, 2],
    [3, 2, 1]
]
*/

function getPermutationsWithSize(array, size) {
    let ret = [];

    function permute(array, m = []) {
        if (m.length === size) {
            ret.push(m);
            return;
        }
        for (let i = 0; i < array.length; i++) {
            let curr = array.slice();
            let next = curr.splice(i, 1);
            permute(curr, m.concat(next));
        }
    }

    permute(array);
    return ret;
}
console.log(getPermutationsWithSize([1, 2, 3], 2));
// [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
