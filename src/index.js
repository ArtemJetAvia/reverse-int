module.exports = function reverse (n) {

let num = String(Math.abs(n));

let result = num.split('').reverse().join('');

return result;

}
