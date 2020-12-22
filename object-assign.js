//Object.assign(target, sources... ) method
// used to copy objects OR
// to merge objects
let obj1 = { arms: true, armCount: 2 };
let obj2 = { weapons: ["missle launcher", "reciprocating saw"] };
let obj3 = { canMove: true, legs: 0, treads: 2 };

let arms = Object.assign({ hashand: true }, obj1);
console.log(arms);

let braveheart = Object.assign({}, obj1, obj2, obj3);
console.log(braveheart);