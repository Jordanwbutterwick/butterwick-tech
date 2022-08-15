let colorSquare = document.getElementById("colorSquare")

let inputBox = document.getElementById("inputBox")

let scoreBoard = document.getElementById("scoreBoard")

let responseBox = document.getElementById("responseBox")

let score = 0

function loop(){

    let newColor = Math.floor(Math.random()*16777215).toString(16);

    colorSquare.style.backgroundColor = newColor

    let input = inputBox.value
}


function exit(){
    responseBox.value = "Goodbye!"
}
