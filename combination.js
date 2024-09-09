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
