// JavaScript Event Listeners
// Event-driven programming: your program waits for events and uses them as triggers to run the next function(s)

// myDiv.addEventListener('click', doSomething )
// function doSomething(ev){
//     console.log(ev.type);
//     console.log(ev.target);
// }

let btn = document.getElementById('btn');
let link = document.getElementById('link');
let txt = document.getElementById('txt');

btn.addEventListener('click' , buttonclicked)
function buttonclicked(ev){
    console.log(ev.type , ev.target , ev.currentTarget);
}
link.addEventListener('click' , linkclicked)
function linkclicked(ev){
    ev.preventDefault();
    console.log(ev.type , ev.target , ev.currentTarget);
}
txt.addEventListener('input', ev=>{
    console.log(ev.type , ev.target.value);
})
txt.addEventListener('change', ev=>{
    console.log(ev.type , ev.target.value);
})
txt.addEventListener('blur', ev=>{
    console.log(ev.type , ev.target.value);
})