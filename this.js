// this.js
// Understanding what "this" is
//
"use strict";

let box = document.querySelector(".box");

let myfunc = function() {
    console.log("1", this);
    setTimeout(() => {
        console.log("3", "timed out", this);
    }, 250);
};
let myfunc1 = () => {
    console.log("2", this);
    setTimeout(() => {
        console.log("3", "timed out", this);
    }, 250);
};
box.addEventListener("mousedown", myfunc);
box.addEventListener("mouseup", myfunc1);