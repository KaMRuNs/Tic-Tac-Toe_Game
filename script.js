let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let menu= document.querySelector(".menu");

let turnX = true;

let startBtn = document.querySelector("#start");
const start =() =>{
    menu.classList.remove("hide");
    startBtn.classList.add("hide");
}
let winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const resetGame = () =>{
    msgContainer.classList.add("hide");
    enableBoxes();
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        }
        else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    });
})
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled= true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(pattern of winningPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!= "" && pos3Val!="" && pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("Winner", pos1Val);
            showWinner(pos1Val);
        }
    }
    
}
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
startBtn.addEventListener("click", start)