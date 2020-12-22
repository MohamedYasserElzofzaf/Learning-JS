//  equality.js
// What is the difference between == and ===
// The negative versions are !=  and !==
//

let a, b, obj1, obj2, copy1, copy2, html1, html2;
a = 5;
b = 5;

if (a == b) {
    console.log("a b are double equal"); //yes
} else {
    console.log("a b are not double equal");
}

if (a === b) {
    console.log("a b are triple equal"); //yes
} else {
    console.log("a b are not triple equal");
}

obj1 = { prop: "value" };
obj2 = { prop: "value" };
if (obj1 == obj2) {
    console.log("obj1 obj2 are double equal");
} else {
    console.log("obj1 obj2 are not double equal"); //yes
}

if (obj1 === obj2) {
    console.log("obj1 obj2 are triple equal");
} else {
    console.log("obj1 obj2 are not triple equal"); //yes
}

copy1 = obj1;
copy2 = obj1;
if (copy1 == copy2) {
    console.log("copy1 copy2 are double equal"); //yes
} else {
    console.log("copy1 copy2 are not double equal"); //
}
if (copy1 === copy2) {
    console.log("copy1 copy2 are triple equal"); //yes
} else {
    console.log("copy1 copy2 are not triple equal"); //
}

html1 = document.querySelector("h1");
html2 = document.querySelector("h1");
if (html1 == html2) {
    console.log("html1 html2 are double equal"); //yes
} else {
    console.log("html1 html2 are not double equal"); //
}
if (html1 === html2) {
    console.log("html1 html2 are triple equal"); //yes
} else {
    console.log("html1 html2 are not triple equal"); //
}