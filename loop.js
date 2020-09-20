let n1 = parseInt(prompt("Enter number 1:"));
let n2 = parseInt(prompt("Enter number 2:"));
let min = n1 > n2 ? n2 : n1;
let max = n1 > n2 ? n1 : n2;
for (let i = min; i <= max; i++) {
    let k = 0;
    for (let j = 2; j < i; j++) {
        if (i % j !== 0) {
            k++;
        }
        if (i - 2 == k) {
            console.log(i);
        }
    }
}
