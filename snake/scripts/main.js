const field = document.querySelector("#field");
const context = field.getContext("2d");
let scoreBoard = document.querySelector("#scoreBoard");
let pauseButton = document.querySelector("#isPause")

let cellSize = 20;
let cellCounter = field.width / cellSize;
let tailCounter = 0;
let isPause = false;
let speed = {
    x: 0,
    y: 0
}
let food = {
    x: 15,
    y: 15
}
let snakeHead = {
    x: cellCounter/2,
    y: cellCounter/2
}
let snake = [{ x: snakeHead.x, y: snakeHead.y }];

let initGame = () => {
    speed = {
        x: 0,
        y: 0
    }

    food = {
        x: 15,
        y: 15
    }

    snakeHead = {
        x: 15,
        y: 15
    }

    snake = [{ x: snakeHead.x, y: snakeHead.y }];

    tailCounter = 0;
}

let isInSnake = (cordX, cordY) => {
    for (let i = 0; i < snake.length; i++) {
        if (cordX === snake[i].x && cordY === snake[i].y) {
            return true;
        }
    }
}

let drawGame = () => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, field.width, field.height);
}

let drawSnake = () => {
    context.fillStyle = 'red';
    for (let i = 0; i < snake.length; i++) {
        context.fillRect(snake[i].x * cellSize, snake[i].y * cellSize, cellSize - 2, cellSize - 2);
    }
}

let drawFood = () => {
    context.fillStyle = 'green';
    context.fillRect(food.x * cellSize, food.y * cellSize, cellSize - 2, cellSize - 2);
}

let movement = () => {
    snakeHead.x += speed.x;
    snakeHead.y += speed.y;

    if (snakeHead.x < 0) {
        snakeHead.x = cellCounter - 1;
    } else if (snakeHead.x >= cellCounter) {
        snakeHead.x = 0;
    } else if (snakeHead.y < 0) {
        snakeHead.y = cellCounter - 1;
    } else if (snakeHead.y >= cellCounter) {
        snakeHead.y = 0;
    }
    
    if (snake.length > 1) {
        for (let i = 0; i < snake.length; i++) {
            if (isInSnake(snakeHead.x, snakeHead.y)) {
                alert(`Игра окончена, ваша анаконда: ${tailCounter} см`);       //checking for collision 
                initGame();
                break;
            }
        }
    }
}

let growSnake = () => {
    snake.push({
        x: snakeHead.x,
        y: snakeHead.y
    })
    while (snake.length > tailCounter) {
        snake.shift();
    }
}

let eatFood = () => {
    if (food.x === snakeHead.x && food.y === snakeHead.y) {
        tailCounter++;
        do {
            food.x = Math.floor(Math.random() * cellCounter);
            food.y = Math.floor(Math.random() * cellCounter);
        } while (isInSnake(food.x, food.y));
    }
}

let drawScore = () => {
    scoreBoard.innerHTML = `Длина анаконды: ${tailCounter} см`;
}

let updateScreen = () => {
    if(!isPause){
    movement();
    drawGame();
    growSnake();
    drawSnake();
    eatFood();
    drawFood();
    drawScore();
    }
}

setInterval(updateScreen, 1000 / 5)

document.addEventListener('keydown', (e) => {
    if (e.code === "ArrowUp") {
        speed.x = 0;
        speed.y = -1;
    } else if (e.code === "ArrowLeft") {
        speed.x = -1;
        speed.y = 0;
    } else if (e.code === "ArrowDown") {
        speed.x = 0;
        speed.y = 1;
    } else if (e.code === "ArrowRight") {
        speed.x = 1;
        speed.y = 0;
    } else if  (e.code === "Space") {
        if(isPause) {
            isPause = false; 
            pauseButton.innerHTML = ""
        } else {
            isPause = true;
            pauseButton.innerHTML = "Game is paused"
        }

    }
});

for(var i =0; i <=10; i++) {
    ((j) => {
        setTimeout(() => {
            console.log(j);
        }, 0)
    })(i)
}

