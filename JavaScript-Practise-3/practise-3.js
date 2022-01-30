// -------leap year---------
function itsLeapYear(year){
if(((year % 4==0) && year %100 !=0) || year % 400 == 0 ){
      return "Its a leap year";
}
  return "Its not a leap year";
}
let yourYear = itsLeapYear(2024);
console.log(yourYear);
// -----my age odd or even----------
function isOddorEven(age){
     if (age % 2==0){
         return "Your age even number";
        }
        return "Your age odd number";
}
let getAge = isOddorEven(23);
console.log(getAge);
// ---------get minute -----
function getMinutes(minutes){
  let timeParts = minutes.split(":")
  return Number (timeParts[0])*60 + Number (timeParts[1]);
}
let hours = getMinutes("2:30");
console.log("Total Minutes",hours);
// ------oltarnative-------
function olterNative (getMinutes){
    return parseFloat(getMinutes*60);
}
let putHour=olterNative(12.10);
console.log("Total Minute",putHour);