let numbers=[33,55,22,98,11,19,84];

let greaterthan20 = numbers.every(function(num){
    return num > 20;
});
let greaterthan10 = numbers.every(function(num){
    return num > 10;
});
console.log(greaterthan20);
console.log(greaterthan10);
document.getElementById('test').innerHTML;
document.write(greaterthan20);
document.write(greaterthan10);
