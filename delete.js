// delete.js
// How to remove properties from Objects
let log = console.log;

let obj = {
    prop1: 42,
    prop2: "Meaning of Life",
    prop3: function() {},
};

log(obj.prop1, obj.prop2, obj.prop3, obj.prop4);
delete obj.prop3;
for (let p in obj) {
    log(p);
}