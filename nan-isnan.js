//NaN and isNaN()
//
// NaN is a property of the global object
// it represents a value which is Not A Number
// it will be unequal !== to ANYTHING inside if( )
//
// isNaN() first converts the value to a Number
// next the coerced number is tested for NaN

let log = console.log;
let t = isNaN(true);
let f = isNaN(false);
let g = isNaN(null);
let h = isNaN(undefined);
let j = isNaN(45);
let k = isNaN("45");
let l = isNaN("54.78");
let m = isNaN(new Date());
let n = isNaN("  ");
let a = Number(true);
let b = isNaN(new Date("28 August, 2017"));

log(a);
log(t);
log(f);
log(g);
log(h);
log(j);
log(k);
log(l);
log(m);
log(n);
log(b);