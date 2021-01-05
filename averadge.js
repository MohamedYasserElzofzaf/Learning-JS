/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...num) {
    let counter = 0;
    let total = 0;
    for (let n of num) {
        total += n;
        counter++;
    }
    if (counter === 0) counter = 1;
    const averge = total / counter;
    return averge;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());