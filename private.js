//  private.js
// creating private variables in JS with functions
//IIFE - immediately invoked function expr.

let obj = (function() {
    let _prop1 = "starman";
    return {
        prop2: 1981,
        get prop1() {
            return "Movie:" + _prop1;
        },
        set prop1(_val) {
            _prop1 = _val;
        },
    };
})();
for (let prop in obj) {
    console.log(prop);
}
console.log(obj.prop2); //1981
console.log(obj.prop1); //Starman
obj.prop1 = "The Big Lebowski";
console.log(obj.prop1);
console.log(obj._prop1);