// console.log(document.body)
// console.log(document.head)
// console.log(document.documentElement)

console.log(document.body.firstElementChild)
console.log(document.body.childNodes)
console.log(document.body.children)

const arr = document.body.children
const newArr = Array.from(arr)
console.log(arr)
console.log(newArr)

for(let i =0;i<newArr.length;i++){
    console.log(newArr[i])
}

//from id and class selecters
console.log(this_one) //direct select
console.log(document.getElementById("this_one"))

console.log(document.getElementsByClassName("ok"))

let input_name = document.getElementsByName("email")
console.log(input_name[0])

let get_tag = document.getElementsByTagName("span")
console.log(get_tag[0])

get_tag[0].innerText="New Text"
get_tag[0].style="color:gray"
get_tag[0].innerHTML=`<h1 class="newClass">this is h1</h1>`
get_tag[0].style.fontFamily="fantasy"
get_tag[0].style.fontWeight=100

const myBtn = document.getElementById("myBtn")
myBtn.style.border="1px solid black"
myBtn.style.borderRadius="10px"
myBtn.style.backgroundColor="green"
myBtn.style.color="white"
myBtn.style.outline="none"
myBtn.style.cursor="pointer"
myBtn.style.padding="10"

console.log( myBtn.getAttribute("id"))
console.log( myBtn.getAttribute("class"))
myBtn.setAttribute("class","thisisnewclassname")

const text = document.querySelector(".ok")
text.innerText="Abhi"

const myBtns = document.querySelectorAll("button")
console.log(myBtns[1])

myBtns[1].onclick = deleteMe
myBtn.onclick = bringMe
// myBtn.onclick = bringMe() don't call it only provoid refrence


function deleteMe(){
    const h1 = document.querySelector("h1");
    h1.remove()
    console.log(h1)
}

function bringMe(){
    const h1 = document.createElement("h1")
    h1.innerText = "Abhishek JS"
    // h1.textContent ="Abhishek JS"
    // document.body.append(h1); // put at the end
    document.body.prepend(h1) // put at the first
}



