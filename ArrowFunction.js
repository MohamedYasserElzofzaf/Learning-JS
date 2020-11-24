let numbers = [7,13,4,18,8];
let names = ['Hazard', 'courtua','ramos','loka','kroos'];

let planA = numbers.filter(function(item){
    return item < 20 ;
})
let planB = numbers.filter(item => item <20);

console.log(planA);
console.log(planB);

names.forEach(function(item, index){
    console.log(item , index);
})

names.forEach((item ,index) => console.log(index , item));
