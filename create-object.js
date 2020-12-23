// Object.create(prototype, propertiesObject ) method
// propertiesObject same as 2nd argument from Object.defineProperties()

let obj = {
    name: "The Dude",
};
let obj1 = Object.create(obj, {});
console.log(obj1);
console.log(obj1.name);

let obj2 = Object.create(obj, {
    fullName: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: "Jeff Lebowski",
    },
    canBowl: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: true,
    },
});
console.log(obj2);
console.log(obj2.name);