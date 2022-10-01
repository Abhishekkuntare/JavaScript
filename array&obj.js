// let arr = [12,22,3445,66];
// let arr1 =["A","B","C"]
// let arr2 = [1,"#","323",true,3.3,[1,3,5]]

// let ar=[]
// ar[0]=1;
// ar[2]=2;
// ar[3]=3;
// console.log(ar.length) //4 

// console.log(arr2)
// console.log(arr1)
// console.log(arr)
// console.log(arr[0])


// //constructor array
// let a = new Array(2);
// console.log(a)

// array methods 
let arr = [1,2,3,4,5,6];
arr.push(10) //last add
arr.pop()//last delete
arr.shift()//remove 1st element
arr.unshift(12);//add 0'th position
arr.splice(0,2);
arr.reverse()
let new_arr = arr.slice(1,4);
console.log(new_arr)
console.log(arr)


const myObj = {
    name:"Abhishek",
    surname:"Kuntare",
    age:19,
    male:true
}
console.log(myObj)
console.log(myObj.name)
