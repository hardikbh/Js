// closure : gives access to the outer function and variables from the inner function

let a=0,b=6;

function fn(num)
{
    let fruit="apple";
    let cost=num;
    function displayCost(b)
    {
        console.log("cost of "+fruit+" is "+(cost*b));
       // return num*num;
    }
    return displayCost;

}

// var func = fn(5);

// func(8);

fn(5)(8);

let count=0;
(function print()
{
    function printCount()
    {
    if(count===0)
    {
        let count=1;
        //output 1 overshadow the above count value
        console.log(count);

    }
    // output 0
    console.log(count);
   }
 return printCount;
})()();