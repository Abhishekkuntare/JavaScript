// let details = function printDetails(namee, email, password) {
//   console.log(`${namee} ${email} ${password}`);
// };

// function printDetails(namee, email, password) {
//   console.log(`${namee} ${email} ${password}`);
// }

// printDetails("Abhishek", "abhishek7@gmail.com", 219201);
// details("Ab", "Ds", 23);

// function getNum() {
//   let a = 10,
//     b = 10;
//   return a + b;
// }

// console.log(getNum());


// scope of let and var

//1: let 

//if we decalre out side of block and console it then it will prints 
// let b = 10; // global variable
// {
//     console.log(b);
// }

// //but we decalre inside the block and print out side the block then it will not prints
// {
//     let x = 100;
// }
// console.log(x);


//2: var

//if we declare global variable and print in block then it prints 
var c = 10;
{
    console.log(c);
}

//if we declare variable in block and print outside the block then it prints
{
    var x= 100;
}
console.log(x);

