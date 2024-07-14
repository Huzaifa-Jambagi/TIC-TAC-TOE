let btn = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let newBtn=document.querySelector(".new");
let messageContainer=document.querySelector(".msg-container");
let winMsg=document.querySelector("h2");
let gameOver=false;
let turn = true;
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];
newBtn.addEventListener("click",()=>{
    messageContainer.classList.add("hide");
    btn.forEach((rt) => {
        rt.innerText = "";
        rt.disabled = false;
    })
})
btn.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn === true) {
            box.innerText = 'X';
            turn = false;
        } else {
            box.innerText = 'O';
            turn = true;
        }
        turn!=turn;
        box.disabled = true;
        checkWinner();
    });

})
function checkWinner() {
    for (let w of win) {
        let first = btn[w[0]].innerText;
        let second = btn[w[1]].innerText;
        let third = btn[w[2]].innerText;
        if (first != "" && second != "" && third != "") {
            if (first === second && second === third) {
                setTimeout(() => {
                    winMsg.innerText=`CONGRATULATIONS "${first}" WON THE GAME`;
                    console.log(`winner ${first}`);
                    messageContainer.classList.remove("hide");
            }, 200);
                gameOver=true;
            }
            if(gameOver===true){
                disableAllButtons();
            }
        }
    }
    if ([...btn].every(button => button.innerText !== "")) {
        setTimeout(() => {
            winMsg.innerText = "THE GAME GOT TIED";
            messageContainer.classList.remove("hide");
        }, 200);
        gameOver = true;
        disableAllButtons();
    }
}
function disableAllButtons() {
    btn.forEach((button) => {
        button.disabled = true;
    });
}
reset.addEventListener("click", () => {
    btn.forEach((rt) => {
        rt.innerText = "";
        rt.disabled = false;
    })
})
turn = true;
