// food price
var coca_cost = 5;
var burger_cost = 35;
var fries_cost = 12 ;
// user's budget
var account_balance = 500 ;

function check_balance(amount){
    if( account_balance - amount >= 0){
            return true;
    }else{
            console.log("your balance is empty");
            return false;
    }
}

function eat_burger(){
    if(check_balance(burger_cost)){
        account_balance = account_balance - burger_cost ;
        console.log("Enjoy your burger");
    }
    console.log("\t Balance : ", account_balance);
}
function eat_fries(){
    if(check_balance(fries_cost)){
        account_balance = account_balance - fries_cost ;
        console.log("Enjoy your fries");
    }
    console.log("\t Balance : ",account_balance);
}
function drink_coca(){
    if(check_balance(coca_cost)){
        account_balance = account_balance - coca_cost ;
        console.log("Enjoy your coca ");
    }    
    console.log("\t Balance : ", account_balance);
}

//eat_burger();
//eat_fries();
//drink_coca();
//document.getElementById('test').innerHTML=eat_fries();

var MealList = [eat_burger , eat_fries , drink_coca ];
function visit(mlist){
    for(var i=0 , num = mlist.length ; i< num ; i++){
       // mlist[i]();
        mlist[i].call();
    }
}
visit(MealList);
//document.getElementById('test').innerHTML=visit(MealList);