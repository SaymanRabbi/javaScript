// ----problem 1 and solution-----
// function namota (a){
//     for ( var b=1; b<=10;b++){
//         console.log(a*b);
//     }
// }
// namota (13)
// -----problem 2 solution 2----------
//  function uppercase(name){
//      console.log("This word ",name.toLowerCase())
//  }
//  var word = "BANGLADESH"
//  var changes = uppercase(word)

// ------problem 3 and solution------

// function fullName (num1,num2){
//     console.log ("You Full Name Is", num1.toUpperCase() + " " + num2.toUpperCase())
// }
// fullName("Sayman","Rabbi")

// -------Squre number-------
function squareIt(number) {
    return number ** 2;
  }
  
  console.log(squareIt(10));
// ------shingarar mechin-------
// function shingara(taka){
//     console.log("Give me money" + taka)
//    var shingaraPrice = 5;
//     var shigaraQuantity = taka/shingaraPrice;
//     return shigaraQuantity;

// }
// var price = 200;
// var total= shingara(price);
// console.log(total);

// ----------viog---------
// function SubTraction(num1, num2){
//     console.log("First Number Is " + num1);
//     console.log("Second Number Is " + num2);
//     var neet = num1 - num2;
//     return neet;
// }
// var firstNum = 10002;
// var secondNum = 2345;
// var result = SubTraction(firstNum,secondNum);
// console.log('The Subtraction is '+ result );

// -------Divided-------
// function diviDed(num1, num2){
//     console.log("First Number Is " + num1);
//     console.log("Second Number Is " + num2);
//     var neet = num1 / num2;
//     return neet;
// }
// var firstNum = 1000;
// var secondNum = 10;
// var result = diviDed(firstNum,secondNum);
// console.log('The DiviDed is '+ result );

// Object----------
// var comPuter = {
//     matherBoar: "Inter CoreI-5",
//     Processor : "Intel",
//     ram : "120Gb",
//     core : 6,
//     price : 45000
// }
// console.log(comPuter);
// var processor= comPuter.Processor;
// console.log(processor);
// comPuter.Processor = "imd";
// console.log(comPuter);
// comPuter['ram'] = 12;
// console.log(comPuter);
// var newram = "ram";
// comPuter[newram]=16;
// console.log(comPuter);
// -------switch condition---------
// var day = "halarput";

// switch (day) {
//     case 'saturday':
//         case 'sunday':
//             case 'monday':
//                 console.log("Its Day to complete your task without any laziness bro!!!!");
//                break;
//                case "wednessday":
//                    console.log( "Play Footbal with my Friends");
//                    break;
//                    case "thursday":
//                     console.log( "Its day to coding");                    break;
//                     case "friday":
//                         console.log( "Nothing to Do");
//                         break;
//                         default:
//                             console.log("Nothing to Matching")
// }
// ____ loop break_______
// var i = 0;
// while (i<=10){
//     console.log("Its number "+ i)
//     i++;
//     if (i==6){
//         break;
//     }
// }
// var price = [51,52,60,22,33,58,68,73,105,110];

// for ( i = 0; i<price.length; i++){
   
//     if (price[i]<50){
//         continue;
//     }
//     console.log(price[i]);
  
// }
// -------array advanced------
var phone = ["samsung", "I-Phone", "Walton", "Oppo", "Nokia"];

// if ((phone.indexOf('hello') == -1)){
//     console.log("This Phone no Avialbel");
// }
// if ((phone[5])== undefined){
//     console.log("Sorry This Phone Is Not Avialbel")
// }