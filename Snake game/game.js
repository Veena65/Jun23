let gameboard = document.getElementById('gameboard');
let context = gameboard.getContext("2d");
let scorev = document.getElementById('scorevalue');

let bwidth = gameboard.width;
let bheight = gameboard.height;
let size = 20;//size(width,height) of each box  of snake and food

let x,y;//(x,y) initial coordinates of food

let xVel = 20, yVel = 0;

let score = 0;
let active = true;
let start = false;
//for initial start xVel = size , y=0 because it moves form left to right

let snake = [
    { x : size*3 , y : 0},
    { x : size*2 , y : 0},
    { x : size*1 , y : 0},
    { x : 0 , y : 0}
];//first four blocks for snake with index[0] ie.,x=size*3;y=0 as head of snake
startGame();

function startGame()
{
    context.fillStyle = "bisque";
    context.fillRect(0,0,bwidth,bheight);
    // context.fillRext(initial_x , initial_y , final_x(or)width , final_y(or)height)
    createFood();
    displayFood();
    drawSnake();
    moveSnake();
    // nextTick();
}

function createFood()
{
    x = Math.floor(Math.random()*bwidth/size)*size;
    y = Math.floor(Math.random()*bheight/size)*size;
    // divide and multiply by size so as to get initial(x,y) of each block of units size=20
}

function displayFood()
{
    context.fillStyle = "crimson";
    context.fillRect(x,y,size,size);
}

function drawSnake()
{
    context.fillStyle = "green";
    context.strokeStyle = "bisque";
    snake.forEach((part) => {
        context.fillRect(part.x , part.y , size , size);
        context.strokeRect(part.x , part.y , size , size);
    })
}

function moveSnake()
{
    let head ={x:snake[0].x+xVel , y:snake[0].y+yVel};
    snake.unshift(head);
    if(snake[0].x === x && snake[0].y === y)
    {
        createFood();
        score++;
        scorev.textContent = score;
    }
    else 
        snake.pop();
}

function clearBoard()
{
    context.fillStyle = "bisque";
    context.fillRect(0,0,bwidth,bheight);
}

function nextTick()
{
    if(active)
    {
        setTimeout(()=>{
            clearBoard();
            displayFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        },200);
    }
    else
    {
        clearBoard();
        context.font = "bold 45px serif";
        context.fillStyle = "black";
        context.textAlign = "center";
        context.fillText("Game Over !!!",bwidth/2,bheight/2);
    }

}

window.addEventListener("keydown",pressed);

function pressed(e)
{
    let left = 37;
    let up = 38;
    let right = 39;
    let down = 40;
    // array key keycodes
    if(!start)
    {
        start = true;
        nextTick();
    }
    switch(true)
    {
        case (e.keyCode == left && xVel != size):
            //if size is -ve => snake moves right ie;xVel is -ve so left move is not possible
            xVel = -size;
            yVel = 0;
            break;

        case (e.keyCode == right && xVel != -size):
            xVel = size;
            yVel = 0;
            break;

        case (e.keyCode == up && yVel != size):
            xVel = 0;
            yVel = -size;
            break;

        case (e.keyCode == down && yVel != -size):
            xVel = 0;
            yVel = size;
            break;
    }
}

function checkGameOver()
{
    switch(true)
    {
        case (snake[0].x < 0)://left wall
        case (snake[0].x >= bwidth)://right wall
        case (snake[0].y < 0)://top wall
        case (snake[0].y >= bheight)://bottom wall
            active = false;
            break;
    }   
}