let n1 = parseInt(prompt("Enter number 1:"));
let n2 = parseInt(prompt("Enter number 2:"));
let start = n1 > n2 ? n2 : n1;
let end = n1 > n2 ? n1 : n2;
var primenumbers = [];
let index = 0;
for (let i = start; i <= end; i++) {
    var k = 0;
    for (let j = 1; j < i; j++) {
        if (i % j !== 0) (k++);
    }
    if (i - 2 == k) {
        primenumbers[index] = i;
        index++;
    }
}
let min = primenumbers[0];
let max = primenumbers[primenumbers.length-1];
if (min == max && min == null) {
    console.log("There is no prime number in the range of [" + n1 + ", " + n2 + "]");
}
if (min == max && min > null) {
    console.log("There is only one prime number in the range of [" + n1 + ", " + n2 + "]: " + min);
}
if (min !== max) {
    console.log("Minimum prime number in the range of [" + n1 + ", " + n2 + "] is: " + min);
    console.log("Maximum prime number in the range of [" + n1 + ", " + n2 + "] is: " + max);
}