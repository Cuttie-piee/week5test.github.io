var startingPage = document.querySelector("#startingPage");
var choose = document.querySelectorAll(".choose");
var mainPage = document.querySelector("#mainPage");
var showChange = document.querySelector("#showChange");
var boxes = document.querySelectorAll(".boxes");
var winner = document.querySelector("#winner");
var winnerName = document.querySelector("#winnerName");
var quit = document.querySelector("#quit");
var changeTurn = null;
choose.forEach(chooseNow => {
    chooseNow.addEventListener("click", () => {
        if (chooseNow.id === "playerX") {
            changeTurn = false;
            showChange.style.left = `0px`;
        } else {
            changeTurn = true;
            showChange.style.left = `160px`;
        }
        startingPage.style.display = "none";
        mainPage.style.display = "block";
    })
});
boxes.forEach(items => {
    items.addEventListener("click", () => {
        if (changeTurn == false) {
            items.innerHTML = `<i class="fas fa-times"></i>`;
            items.id = "X";
            items.style.pointerEvents = "none";
            showChange.style.left = `160px`;
            changeTurn = true;
        } else {
            items.innerHTML = `<i class="fas fa-circle-notch"></i>`;
            items.id = "O";
            items.style.pointerEvents = "none";
            showChange.style.left = `0px`;
            changeTurn = false;
        }
        winningFunc();
        drawFunc();
    })
})
var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
var winningFunc = () => {
    for (let a = 0; a <= 7; a++) {
        let b = winningCombinations[a];
        if (boxes[b[0]].id == "" || boxes[b[1]].id == "" || boxes[b[2]].id == "") {
            continue;
        } else if (boxes[b[0]].id == "X" && boxes[b[1]].id == "X" && boxes[b[2]].id == "X") {
            winnerName.innerText = `Player X Win The Game!`;
            mainPage.style.display = "none";
            winner.style.display = "block";
        } else if (boxes[b[0]].id == "O" && boxes[b[1]].id == "O" && boxes[b[2]].id == "O") {
            winnerName.innerText = `Player O Win The Game!`;
            mainPage.style.display = "none";
            winner.style.display = "block";
        } else {
            continue;
        }
    }
}
var drawFunc = () => {
    if (boxes[0].id != "" && boxes[1].id != "" &&
        boxes[2].id != "" && boxes[3].id != "" &&
        boxes[4].id != "" && boxes[5].id != "" &&
        boxes[6].id != "" && boxes[7].id != "" && boxes[8].id != "") {
        winnerName.innerText = `Match Draw!`;
        mainPage.style.display = "none";
        winner.style.display = "block";
    }
}
quit.addEventListener("click", () => {
    window.location.reload();
})