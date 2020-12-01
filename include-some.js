let movies=["godfather","goodfellas","scareface","serpico","once upon a time","sopranos"];
let search1="saw";
let search2 ="serpico";
let search3 ="goodfellas";

let test1 = movies.some(function(title , index){
    console.log(index,title);
    return title.indexOf(search1) > -1;
})
let test2 = movies.some(function(title , index){
    console.log(index,title);
    return title.indexOf(search2) > -1;
})
let test3 = movies.includes(search3);
document.getElementById('test').innerHTML;
document.write(test1);
document.write(test2);
document.write(test3);