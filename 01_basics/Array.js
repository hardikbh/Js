// map , reduce , filter

// What is Map: return a new array by appling function to the each elememt of previous Array

// it takes three parameters currentArrayElement,currentArrayIndex,currentArray

const nums = [10,20,25];

const multiplyArray = nums.map((currentArrayElement,currentArrayIndex,currentArray)=>{
     return 3*currentArrayElement;
});

console.log(multiplyArray);

// What is filter : takes current element of Array applies a condition to it if it return true it will push into the output Array

// it takes three parameters currentArrayElement,currentArrayIndex,currentArray

const filteredArray = nums.filter((currentArrayElement,currentarrayIndex,currentArray)=>{
    return currentArrayElement>10;
});

console.log(filteredArray);

// What is Reduce : reduce array of values down to one value.

// if i do not pass intial value it will return first value of array as a result

const sum = nums.reduce((accumulator,currentArrayElement,currentArrayIndex,currentArray)=>{
    return accumulator+currentArrayElement;
},0);

console.log(sum);

// polyfill for Map()

// nums.map((currentArrayElement,currentIndex,currentArray)=>{});

Array.prototype.myMap = function(cb)
{
    let temp=[];
    for(let i=0;i<this.length;i++)
    {
        temp.push(cb(this[i],i,this));
    }
    return temp;

};
const arr=[1,2,3,4];
let newArr= arr.myMap((currentArrayElement,currentArrayIndex,currentArray)=>{
    return 3*currentArrayElement;
});
console.log(newArr);

