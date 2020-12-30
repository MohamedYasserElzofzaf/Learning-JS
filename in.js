//  in.js
// Using the in operator to test for properties
//
let log = console.log;

if ("toString" in {}) {
    //window has a property named document
    log("toString exists in Object");
}

let obj = {
    prop1: 1,
    prop2: 2,
    prop3: undefined,
    prop4: null,
};

delete obj.prop2;

if ("prop1" in obj) {
    log("obj.prop1 - 1");
} else {
    log("NO obj.prop1");
}
if ("prop2" in obj) {
    log("obj.prop2");
} else {
    log("NO obj.prop2 - deleted");
}
if ("prop3" in obj) {
    log("obj.prop3 - undefined");
} else {
    log("NO obj.prop3");
}
if ("prop4" in obj) {
    log("obj.prop4 - null");
} else {
    log("NO obj.prop4");
}

let obj2 = Object.create(obj, { prop5: { value: 5 } });
//obj2 will have prop1, prop3, prop4, and prop5
if ("prop1" in obj2) {
    log("obj2.prop1 - on the prototype chain");
} else {
    log("NO obj2.prop1");
}
if ("prop5" in obj2) {
    log("obj2.prop5 - 5");
} else {
    log("NO obj2.prop5");
}

let arr = ["a", "b", "c"];
if (0 in arr) {
    log("arr has index 0");
}
if (3 in arr) {
    log("arr has index 3");
} else {
    log("arr has NO index 3 - array only has indicies 0, 1, 2");
}

//add a property that is NOT enumerable to obj
Object.defineProperty(obj2, "prop6", {
    value: 6,
    writable: false,
    configurable: false,
    enumerable: false,
});
if ("prop6" in obj2) {
    log("obj2.prop6 even though it is not enumerable, configurable or writable");
} else {
    log("NO obj2.prop6");
}
if ("prop5" in obj2) {
    log("you bet");
}
for (let prop in obj2) {
    log(prop);
}