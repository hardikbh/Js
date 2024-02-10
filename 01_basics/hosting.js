function scope()
{
    let a ="hi";
    {
        let test=true;
    //   let a ="hello";
       console.log(a);
       // here block over shawdow the above one 
       // var can be overshowdow by let but vice-versa is not possible
    }
    console.log(test);
}

scope();


//hosting 

message = "hi"
console.log(message); // it will work
var message;

var message1;
console.log(message1); // code run here here but provide null value
message1 = "hi"


// let are hoisted in temporal deadzone
mymessage="any";
console.log(mymessage); // here code will not work it will throw error
let mymessage;


let justsee="if it will work";
{
    console.log(justsee);
 }