const choices = document.querySelectorAll(".choice");

const userChoice = document.getElementById("user-choice");
const computerChoice = document.getElementById("computer-choice");

const winner = document.getElementById("winner");

const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

const resetBtn = document.getElementById("reset");

let playerScore = 0;
let cpuScore = 0;

const options = ["✊","✋","✌️"];

choices.forEach(choice=>{

    choice.addEventListener("click",()=>{

        const player = choice.innerHTML;

        const computer = options[Math.floor(Math.random()*3)];

        userChoice.innerHTML = player;
        computerChoice.innerHTML = computer;

        if(player===computer){

            winner.innerHTML="It's a Draw!";

        }

        else if(

            (player==="✊" && computer==="✌️") ||
            (player==="✋" && computer==="✊") ||
            (player==="✌️" && computer==="✋")

        ){

            winner.innerHTML="🎉 You Win!";

            playerScore++;

        }

        else{

            winner.innerHTML="💻 Computer Wins!";

            cpuScore++;

        }

        userScore.innerHTML = playerScore;
        computerScore.innerHTML = cpuScore;

    });

});

resetBtn.addEventListener("click",()=>{

    playerScore=0;
    cpuScore=0;

    userScore.innerHTML=0;
    computerScore.innerHTML=0;

    userChoice.innerHTML="-";
    computerChoice.innerHTML="-";

    winner.innerHTML="Let's Play!";

});