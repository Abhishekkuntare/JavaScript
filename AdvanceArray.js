
// arraow function 
// const myFunc = (a,b)=>{
//     console.log(a + b )
// }

// myFunc(1,2)

const arr = [1,3,4,6,10];

// // const myFunc = (value,index)=>{
// //     if(value ==3){
// //         console.log("Exits!")
// //     }
// // }
// // arr.find(myFunc)


// //return's only single value rather than all values
// const res= arr.find((value,index)=>{
// if(value >10){
//     return value;
// }
// })
// console.log(res)

// //use here filter and it will be return the array
// const ans = arr.filter((val,inx)=>{
//     if(val >10){
//         return val;
//     }
// })
// console.log(ans);


// const ress = arr.every((val,indx)=>{
// return val > 1;
// })
// console.log(ress)

// const ress = arr.some((val,indx)=>{
// return val > 1;
// })
// console.log(ress)

// for (let i of arr){
//     i +=1
//     console.log(i)
// }

// let total = 0;

// arr.forEach((val,idx)=>{
//     console.log(val)
//     // console.log(idx)
//     total+=val;
// })

// console.log(total)


// //map function returns the new array but cannt change the original array IMPORTANT

// const res = arr.map((val,indx)=>{
//     return val+1;
// })
// console.log(res);
console.log(arr)

const result = arr.reduce((preVal, val,indx)=>{
console.log(preVal)
return preVal+=val;

})
console.log(result)