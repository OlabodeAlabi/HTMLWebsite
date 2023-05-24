// // const sym = Symbol();
// // console.log(typeof sym);

// let val;
// val = Number('5');
// val = String(4+4);
// val = String (new Date());
// //toString method;
// val = (5).toString();
// val = (true).toString();
// //type conversion
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = parseInt('100.31');
// val = parseFloat('100.3');
// //output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length)
// console.log(val.toFixed(5));


//strings method/concat;
// const firstName = 'Bode';
// const lastName = 'Moses';
// const age = 20;
// const text = 'Hey i\'m Bode'
// let val;
// //concatenation
// val = firstName + ' ' + lastName;
// val = firstName.concat(' ' + lastName)
// //Append
// val = 'Bode '
// val += 'Moses';
// //Escaping
// val = 'My name is firstName but that\'s not really my name';
// //length
// val = firstName.length;
// //change case()
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[3];
// //indexOf()
// val = lastName.indexOf('e');
// val = lastName.lastIndexOf('M');

// //charAt
// val = lastName.charAt(3)
// val = lastName.charAt(lastName.length -1)

// //substring
// val = lastName.substring(1)

// //slice
// val = lastName.slice(0,4)
// val = lastName.slice(-2)

// //split
// val = text.split(' ,')

// //output
// console.log(val)

//Template literals/strings
// const name = 'Bode';
// const age = 19;
// const job = 'web developer'
// const city = 'lagos'
// let html;

// html = `
// <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 +2}</li>
// </ul> 
// `;
// document.body.innerHTML = html;

//Arrays

const numbers = [22, 14, 65, 45,33,55,66];
const number2 = new Array(1, 3, 5, 3, 7, 5);
const fruits = ['Apple', 'Bannana', 'Orange', 'Lemon']
let val;
// //get array length
// val = numbers.length
// //check if its an array
// val = Array.isArray(number2)
// //getting single value
// val = numbers[2]
// //Inserting Arrays
// numbers[2] = 100;
// val = numbers.indexOf(14);
// //Mutating Arrays
// //Add to end
// numbers.push(120);
// //Add to beginning
// numbers.unshift(121);
// //take off from end
// numbers.pop();
// //Take off from beginning
// numbers.shift();
// //Reverse 
// numbers.reverse();
// //Splice
// numbers.splice(1,4);
// //concatenate
// val = numbers.concat(number2);

// SORTING ARRAYS.
// numbers.sort();
// val = fruits.sort();
// val = number2.sort();
//YOU CAN USE ANOTHER METHOD.
//ASCENDING ORDER
numbers.sort(function(x, y){
    return x - y;
})
//DESCENDING ORDER
numbers.sort(function(x, y){
    return y - x;
})

console.log(numbers);
console.log(val);
//Date

console.log(new Date());
// switch statement
let day;
switch(new Date().getDay()){
    case 0:
        day ='Sunday'
        break;
    case 1:
        day ='Monday'
        break;
    case 2:
        day ='Tuesday'
        break;
    case 3:
        day ='Wednesday'
        break;
    case 4:
        day ='Thursday'
        break;
    case 5:
        day ='Friday'
        break;
    case 6:
        day ='Saturday'
        break;
}
console.log(`Today is ${day}`)

//FUNCTIONS
//FUNCTION DECLARATION
function names(firstName, lastName ){
    return `My name is ${firstName}, or call me ${lastName}`;
}
console.log(names('Bode', 'Moses'));
//FUNCTION EXPRESSION
const math = function(x){
    return x*x;
}
console.log(math(8))
//IMMEDIATE INVOKABLE FUNCTION EXPRESSION(IIFE...)
// (function(name){
//     console.log(`Hello  + ${name}`);
// })('Fathia');

//PROPERTY METHOD;
const myFruits = {
    add: function(apples, oranges){
        console.log(`I've ${apples} apples and ${oranges} oranges`);
    },
    edit: function(lemons){
        console.log(`And also ${lemons} lemons`);
    }
}
myFruits.delete = function(guava){
    console.log(`But returned ${guava} guava`);
}
myFruits.add(5, 4);
myFruits.edit(3);
myFruits.delete('a');

//LOOPS;
// FOR LOOPS
for(let i = 0; i < 10; i++){
    if(i == 2){
        console.log('2 is an even number')
    }
console.log('number ' + i)
}

