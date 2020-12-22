//Object.assign(target, sources... ) method
// used to copy objects OR

const objectAssign = require("object-assign");

// to merge objects
let obj1 = { arms: true, armCount: 2 };
let obj2 = { weapons: ["missle launcher", "reciprocating saw"] };
let obj3 = { canMove: true, legs: 0, treads: 2 };

let arms = objectAssign({}, obj1);
console.log(arms);