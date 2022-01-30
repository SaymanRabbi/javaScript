// ------feet to inchi------

function feetMachine(num){
  return num *12;
}

let feet = feetMachine(23);
console.log(feet);

// -------mile to kelometer-----
function mileMechine(num1){
return num1 * 1.609344;
}
let mile = mileMechine(50);
console.log(mile);

// -------odd number--------
function evenOddMachine(num3){
    if(num3 % 2 ==0){
        return "Its a Even Number";
    }
    else if(num3 %2 != 0){
        return "its A Odd number";
    }
}

let GiverNum = evenOddMachine(5000);
console.log(GiverNum);
// -------its leep year or not------------
function leapYear(year){
 if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
       return "This Year Is a Leap Year";
 }
 return "This is Not a Leap Year";
}
let giveYear = leapYear(400);
console.log(giveYear);
// ------factorial number-------

function factorialCounter(number){
    let factorial = 1;
    for(let i = 1; i<=number;i++){
         factorial = factorial*i;
    }
    return factorial;
}
let giveFactorial = factorialCounter(7);
console.log("Your Factorial Number is",giveFactorial);
// ----reverse way while loop------
function reverseFactorail (number2){
    let factorial = 1;
    let i = number2;
    while(i>=1){
        factorial = factorial *i;
        i--
    }
    return factorial;

}
var myFactorail = reverseFactorail(6);
console.log("Your Factorail Number Is",myFactorail);
// --------reverse way for loop------
function forFactorail (number3){
    let factorails = 1;
    for (i=number3; i>=1;i--){
        factorails =factorails*i;
    }
    return factorails;
}
var ourFactorail = forFactorail(7);
console.log("Your Factorail Number Is",ourFactorail);
for(let i = 0; i<10;i++){ 
    console.log(i);
 }