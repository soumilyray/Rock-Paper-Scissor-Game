let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    msg.innerText = "Game Draw! Play again";
    msg.style.backgroundColor = "aliceblue";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "lightgreen";
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "lightcoral";
    }
};
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
        return;
    }

    let userWin = true;
    if (userChoice === "rock") {
        userWin = compChoice === "scissor";
    } else if (userChoice === "paper") {
        userWin = compChoice === "rock";
    } else {
        userWin = compChoice === "paper";
    }

    showWinner(userWin, userChoice, compChoice);
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
