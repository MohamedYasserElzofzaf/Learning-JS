let numbers = [24 ,3 ,86,45, 9, 5 ,13];
let breakpoint = 20;

let smallnum = numbers.filter(function(num){
    return num < breakpoint;
});
let bignum = numbers.filter(function(num){
    return num > breakpoint;
});
let oddnum = numbers.filter(function(num){
    return num & 1;
})

console.log(bignum);
console.log(smallnum);
console.log(oddnum);

document.getElementById('test').innerHTML;
document.write(bignum);
document.write(smallnum);
document.write(oddnum);
