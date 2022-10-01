const input = document.getElementById("numOfwords")
const container = document.querySelector(".container")

const generateWord = (n)=>{
    let text=""
    const letters = "ABCDEFGHIJKLMNOQRSUVWXTYZ"

    for(let i =0;i<n;i++){
        const random = (Math.random()*letters.length-1).toFixed(0);
        text+=letters[random];
    }

    return text;
}
console.log(generateWord(10))

let numOfwords;
const generatePara =()=>{
    numOfwords=Number(input.value)

    const para = document.createElement("p")
    para.innerText = "This is basics"
    para.setAttribute("class","paras")
    container.append(para)
}
