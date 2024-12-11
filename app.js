const wrapper = document.getElementById("container")
const text = document.querySelector(".num")
const button1 = document.querySelector(".btn1")
const button2 = document.querySelector(".btn2")
const button3 = document.querySelector(".btn3")

let counting1 = 0
function addCount(){
    counting3 = counting1 + 1
    counting2 = counting1
    counting1++
    text.innerHTML = counting1
}

button1.addEventListener('click', addCount)

let counting2 = 0
function Reseting(){
    counting2 = 0
    counting1 = counting2
    counting3 = counting2
    text.innerHTML = counting2
}

button2.addEventListener('click', Reseting)

let counting3 = 0
function subCount(){
    counting1 = counting3 - 1
    counting2 = counting3
    counting3--
    text.innerHTML = counting3
}

button3.addEventListener("click", subCount)