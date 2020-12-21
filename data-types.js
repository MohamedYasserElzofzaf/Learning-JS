let log = console.log;
let name = "";
let x = 0;
let y = null;
let z = undefined;
let w = false;
let q = NaN;

if (name || x || y || z || w || q) {
    log("this is the true part");
} else {
    log("this is the false part");
}