const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");

const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restart");

const box = 20;

let snake = [
    {x:200,y:200}
];

let direction = "RIGHT";

let food = randomFood();

let score = 0;

document.addEventListener("keydown",changeDirection);

restartBtn.addEventListener("click",restartGame);

function randomFood(){

    return{

        x:Math.floor(Math.random()*20)*box,

        y:Math.floor(Math.random()*20)*box

    };

}

function draw(){

    ctx.fillStyle="white";
    ctx.fillRect(0,0,400,400);

    // Food
    ctx.fillStyle="#e74c3c";
    ctx.fillRect(food.x,food.y,box,box);

    // Snake
    ctx.fillStyle="#A14A76";

    snake.forEach(part=>{

        ctx.fillRect(part.x,part.y,box,box);

    });

    let head={...snake[0]};

    if(direction==="LEFT") head.x-=box;
    if(direction==="RIGHT") head.x+=box;
    if(direction==="UP") head.y-=box;
    if(direction==="DOWN") head.y+=box;

    // Eat food
    if(head.x===food.x && head.y===food.y){

        score++;

        scoreText.textContent=score;

        food=randomFood();

    }

    else{

        snake.pop();

    }

    // Game Over
    if(

        head.x<0 ||

        head.x>=400 ||

        head.y<0 ||

        head.y>=400 ||

        snake.some(part=>part.x===head.x && part.y===head.y)

    ){

        alert("Game Over!");

        restartGame();

        return;

    }

    snake.unshift(head);

}

function changeDirection(e){

    if(e.key==="ArrowLeft" && direction!=="RIGHT")
        direction="LEFT";

    if(e.key==="ArrowRight" && direction!=="LEFT")
        direction="RIGHT";

    if(e.key==="ArrowUp" && direction!=="DOWN")
        direction="UP";

    if(e.key==="ArrowDown" && direction!=="UP")
        direction="DOWN";

}

function restartGame(){

    snake=[{x:200,y:200}];

    direction="RIGHT";

    food=randomFood();

    score=0;

    scoreText.textContent=0;

}

setInterval(draw,120);