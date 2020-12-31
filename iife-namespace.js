// iife-namespace.js
// Comparing Immediately Invoked Function Expressions (IIFE)
// and Namespaces as wrappers for your code
//
let objNS = {
    name: "Object Namespace",
    init: function() {
        //start the ball rolling
        objNS.name = "New value";
        objNS.action();
        this.action();
    },
    action: function() {
        //do some task
    },
};
objNS.init();

let objIIFE = (function() {
    let myPrivateVar = "hidden value";
    let myPrivateFunc = function() {
        console.log("Private function running");
    };
    let x = function() {
        //start the ball rolling
        console.log(myPrivateVar);
    };
    x();
    return {
        name: "Object IIFE",
        init: x,
        action: function() {
            //do some task
            myPrivateFunc();
        },
    };
})();
objIIFE.init();
objIIFE.action();
//myPrivateFunc();