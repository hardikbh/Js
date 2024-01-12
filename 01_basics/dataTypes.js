//"use strict" // treat all Js code as newer version

//alert(3 +3) // we are using nodejs, not browser

let name = "hardik"
let age = 16
let isLoggedIn = false
let state = null
/*
  name =>2 to power 53
  bigint
  string =>""
  boolean  => true/false
  null =>standalone value
  undefined =>
  symbol=> unique
  object
*/
console.log(typeof undefined) //undefined
console.log(typeof null) // object
// primite 
// string number boolean bigint null undefined symbol

let score = 200
//let myNumber = 300n
// console.log(typeof(score))
// console.log(typeof(myNumber))

// non- primite

let myArray=["hello","people","here"];

let myObject = {
  name : "Hardik",
  id:17,
  age:24
}
console.log(myArray)
console.log(myObject)

const myFunction = function(){
  console.log("hello world")
}
console.log(myFunction)