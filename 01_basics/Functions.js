// first class function : when a function pass as a function

function square(num)
{
     return num*num;
}

function displaySquare(fn)
{
    console.log("sqaure is :" + fn(4));
}

displaySquare(square);

//IIFE : Immediately Invoked Function Expression
// it is immdiately called after declared 
(function square(num)
{
    console.log(num*num)
})(5);

// closures : the ability of a function to access the function and variable that are lexically out of its scope.

// function scope

var num1=5,
num2=3;
var name="pen"

function multiply()
{
    console.log(num1*num2);
}
multiply();

function multiply1()
{
    num1=4,
    num2=2;
    console.log(" cost of "+name+" is: "+(num1+num2));
}
multiply1();

// for(let i=0;i<5;i++)
// {
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; ++i) {
  setTimeout(() => console.log(b[i]), 1);
}

for (var i = 0; i < 10; ++i) {
   // console.log(b[i]);
  setTimeout(() => console.log(b[i]), 1);
}
//callback functions : when function pass function as a arguments

function greeting(name,callback)
{
     console.log("hello,"+name+callback());
}
function mygreeting()
{
    return " how are you??";
}
greeting("alice",mygreeting)

// arrow function and regular function 
// 1 declartion

function add(num1,num2)
{
    return num1+num2;
}

const addition = (num1,num2) => {
    return num1+num2;
}

//2 Implict Return keyword

const square = (num1,num2)=>num1*num2

// 3 arguments

function fn()
{
    console.log(arguments);
}
fn(1,2,3);

const fn1=()=>{
    console.log(arguments)// throw error 
}
fn1(2,3,4);

// this keyword



