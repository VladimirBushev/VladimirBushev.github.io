const cvs = document.getElementById('canvas')
const ctx = cvs.getContext('2d')
document.addEventListener("keydown", keyDown);

let x=500;
let y=500;
let direction = 'right';
let speed = 200;
let xFood = 0;
let yFood = 0;
let snakeLenght = 0;
let snakeX = [];
let snakeY = [];
let chek = true;
let blockLeft = true;
let blockRight = false;
let blockUp = false;
let blockDown = false;
let snakeColorDie = true;
let a = 0;
let b = 0;
let deadIndicator = false;
let k = true;

ctx.fillStyle = 'green';
ctx.fillRect(100,100,800,800);

ctx.fillStyle = 'yellow';
ctx.fillRect(x,y,40,40);

function drawSnake(s){
    for (let i = snakeX.length - 1; i > -1; i--) { 
        ctx.fillStyle = s;   
        ctx.fillRect(snakeX[i],snakeY[i],40,40);
        if (deadIndicator === true) {
            ctx.fillRect(a,b,40,40);
        }
        }
    ctx.fillStyle = s;
    ctx.fillRect(x,y,40,40);
}

function spawnFood(){
     xFood = (Math.floor(Math.random() * 20)*40) + 100;
     yFood = (Math.floor(Math.random() * 20)*40) + 100;
     if ((x=== xFood) && (y ===yFood)){
        spawnFood();
    }
    for (let i = 0; i < (snakeX.length - 1); i++) { 
        if ((snakeX[i] === xFood)&&(snakeY[i]=== yFood)) {
        spawnFood();
        break;
        }
    }
}


function drawGame (){
    ctx.fillStyle = 'green';
    ctx.fillRect(100,100,800,800);

    EatFood();
    if (snakeLenght > 0) {
        drawSnake ('yellow');
        a = snakeX[0];
        b = snakeY[0];
        for (let i = 0; i < (snakeX.length - 1); i++) { 
            if ((x === snakeX[i]) && (y === snakeY[i])){
                //x = x - 40;
                deadIndicator = true;
                blockLeft = true;
                blockDown = true;
                blockUp = true;
                blockRight = true;
                clearInterval(timer);
                setInterval(die,100);
                k = false;
                break;
            }
            else{

            }
            if (chek === true){
                    snakeX[i] = snakeX[i+1];
                        snakeY[i] = snakeY[i+1];
                    }
                else {
                    
                }
        }
        chek = true;
        if (k===true){
        snakeX[snakeX.length -1] = x;
        snakeY[snakeY.length -1] = y;  
        }
    }

    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,40,40);
    ctx.fillStyle = 'red';
    ctx.fillRect(xFood,yFood,40,40);

    
}

function move(){
    if ((direction === 'right')) {
        x = x + 40;
        if (x>860) {
            x=860;
            deadIndicator = true;
            blockLeft = true;
            blockDown = true;
            blockUp = true;
            blockRight = true;
            clearInterval(timer);
            setInterval(die,100);
        }
        else{
        drawGame();
        }

    }
    else if ((direction === 'left')) {
        x = x - 40;
        if (x<100) {
            x=100;
            deadIndicator = true;
            blockLeft = true;
            blockDown = true;
            blockUp = true;
            blockRight = true;
            clearInterval(timer);
            setInterval(die,100);
        }
        else{
        drawGame();
        }

    }
    else if ((direction === 'up')) {
        y = y - 40;
        if (y<100) {
            y=100;
            deadIndicator = true;
            blockLeft = true;
            blockDown = true;
            blockUp = true;
            blockRight = true;
            clearInterval(timer);
            setInterval(die,100);
        }
        else{
        drawGame();
        }

    }
    else if ((direction === 'down')){
        y = y + 40;
        if (y>860) {
            y=860;
            deadIndicator = true;
            blockLeft = true;
            blockDown = true;
            blockUp = true;
            blockRight = true;
            clearInterval(timer);
            setInterval(die,100);
        }
        else{
        drawGame();
        }
        

    }

}

function die(){
    blockLeft = true;
    blockDown = true;
    blockUp = true;
    blockRight = true;
    ctx.fillStyle = 'green';
    ctx.fillRect(100,100,800,800);
    if (snakeColorDie === true){
    drawSnake('red');
    snakeColorDie = false;
    }
    else {
        drawSnake('yellow')
        snakeColorDie = true;
    }
    
}
function keyDown(e){

    if ((e.keyCode === 39) && (blockRight === false)) { //право
        x=x+40;
        if (x<860){
            
            direction = 'right';
            blockLeft = true;
            blockDown = false;
            blockUp = false;
            drawGame();
        }
        else {
            x=860;
            deadIndicator = true;
            blockLeft = true;
            blockDown = true;
            blockUp = true;
            blockRight = true;
            clearInterval(timer);
            setInterval(die,100);
        }
    }
    else if ((e.keyCode === 38)  && (blockUp === false)) { //вверх
        y=y-40;
        if (y>100) {
        
        direction = 'up';
        blockLeft = false;
        blockDown = true;
        blockRight = false;
        drawGame();
        }
        else {
            y=100;
            deadIndicator = true;
            blockLeft = true;
            blockDown = true;
            blockUp = true;
            blockRight = true;
            clearInterval(timer);
            setInterval(die,100);
        }
    }
    else if ((e.keyCode === 37) && (blockLeft === false)) { //влево
        x=x-40;
        if (x>100 ){
       
        direction = 'left';
        blockRight = true;
        blockDown = false;
        blockUp = false;
        drawGame();
        }
        else{
            x=100;
            deadIndicator = true;
            blockLeft = true;
            blockDown = true;
            blockUp = true;
            blockRight = true;
            clearInterval(timer);
            setInterval(die,100);
        }
    }
    else if ((e.keyCode === 40) && (blockDown === false)) { //вниз  }
        y=y+40;
        if (y<860){
        
        direction = 'down';
        blockLeft = false;
        blockRight = false;
        blockUp = true;
        drawGame();
        }
        else {
            y=860;
            deadIndicator = true;
            blockLeft = true;
            blockDown = true;
            blockUp = true;
            blockRight = true;
            clearInterval(timer);
            setInterval(die,100);
        }
    
    }
}

function EatFood(){
    if ((x=== xFood) && (y ===yFood)){
        spawnFood();
        snakeLenght++;
        snakeX.push(x);
        snakeY.push(y);
        chek = false;
    }

}
spawnFood();
let timer = setInterval(move, speed);
