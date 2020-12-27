// es6-object-methods.js
// New ways of declaring methods for objects
// getters and setters for object properties

let obj = {
    prop1: 1979,
    prop2: "Alien",
    prop3() {
        console.log("called prop3");
    },
    get prop4() {
        return this.prop1;
    },
    set prop5(_val) {
        this.prop1 = _val;
    },
};
obj.prop3();
console.log(obj.prop4);
obj.prop5 = 1994;
console.log(obj.prop4);