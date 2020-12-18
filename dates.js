// Date objects in JavaScript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let log = console.log;
let d = new Date();
log(d);

let num = 1000 * 60 * 60 * 24 * 365.25 * 40;
// approx 40 yrs
// ms * sec * min * hr * day * year * x
let str = "20 July 2012";
let d1 = new Date(15000000000);
log(d1);
let d2 = new Date(num);
log(d2);
let d3 = new Date(str);
log(d3);
let d4 = new Date(1994, 12, 12);
log(d4);
d.setFullYear(2020);
log(d);