//prob-1

//  function cubeNumber(number) {
//     if(typeof number !== 'number'){
//         return " This is invalid";
//     }
//      return Math.pow(number, 3);
//    }

//  const inputNumber = -4;
//  const result = cubeNumber(inputNumber);
//  console.log(result)

//prob-2

// function matchFinder(string1, string2) {   
//     if (typeof string1 !== 'string' || typeof string2 !== 'string') {
//         return "This is not string";
//     }
//     else if(string1.includes(string2)) {
//         return true;
//     } 
//     else{
//         return false;
//     }
// }    

// console.log(matchFinder('John Doe', 'ohn'));

//prob-3

// function sortMaker(arr) {
//     if(arr[0]<0 || arr[1]<0){
//         return "Invalid Input";
//     }
//     if (arr[0] === arr[1]) {
//         return "equal";
//     } 
//     else if (arr[0] < arr[1]) {
//         [arr[0], arr[1]] = [arr[1], arr[0]];
//     }
//     return arr;
// }

//  const inputNumber = [4,-2];
//  const result = sortMaker(inputNumber);
//  console.log(result)


//prob-4

// function findAddress(obj) {
//     if(typeof obj !== "object"){
//         return "Please enter a valid value";
//     }
//     else{
//         const street = obj.street || '__';
//         const house = obj.house || '__';
//         const society = obj.society || '__';

//         return street+','+house+','+society;
//     }
// }

// var bj = {street:10}

// const result=findAddress(bj);
// console.log(result)


//prob-5

// function canPay(changeArray, totalDue) {
//     if(changeArray.length == 0){
//         return "Input array";
//     }

//     let sum = 0;
//     for(i = 0; i < changeArray.length; i++){
//         const index = i;
//         const element = changeArray[index];
//         sum = sum + element;
//     }
//     return sum >= totalDue;

//     /* if(sum >= totalDue){
//         return true;
//     }
//     else{
//         return false;
//     }
//     */
// }

// const carry=[];
// const taka=10;

// const result=canPay(carry,taka);
// console.log(result)

