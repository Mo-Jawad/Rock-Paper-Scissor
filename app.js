let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const drawGame = () => {
    console.log("game is draw");
    msg.innerText = "Game was draw, Play again!";
    msg.style.backgroundColor = "#081b31"; 
}
const genCompChoice = () => {
    const ChoiceArr = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return ChoiceArr[ranIdx];
}

const showWinner = (userWin, userChoiceId, compChoice) => {
    if (userWin) {
        userScore++;
        console.log("Hurrah! we win");
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; 
    } else {
        CompScore++;
        console.log("we lose");
        compScorePara.innerText = CompScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoiceId}`;
        msg.style.backgroundColor = "red"; 
    }
}

const playGame = (userChoiceId) => {
    console.log("user choice =", userChoiceId);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);

    if(userChoiceId === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoiceId === "rock") {
            userWin = compChoice === "scissors" ? true : false;
        } else if(userChoiceId === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoiceId, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => { 
        const userChoiceId = choice.getAttribute("id");
        // console.log("choice clicked", userChoiceId);
        playGame(userChoiceId);
    })
})
