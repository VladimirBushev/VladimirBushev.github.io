const cvs = document.getElementById('canvas')
const ctx = cvs.getContext('2d')
document.addEventListener("keydown", keyDown);
let speedId = document.getElementById('label');

let x=500;
let y=500;
let direction = 'right';
let directionArr = [];
let speed = 200;
let xFood = 0;
let yFood = 0;
let snakeLenght = 0;
let snakeX = [];
let snakeY = [];
let chek = true;
let blockLeft = true;
let blockRight = true;
let blockUp = true;
let blockDown = true;
let snakeColorDie = true;
let a = 0;
let b = 0;
let deadIndicator = false;
let k = true;
let sok = false;



ctx.fillStyle = 'lightseagreen';
ctx.fillRect(100,100,800,800);

ctx.fillStyle = 'yellow';
ctx.fillRect(x,y,40,40);

function score() {
    let locstor = localStorage.length;
    localStorage.setItem((locstor + 1), snakeLenght)
    console.log(localStorage);
}


function spd() {
    if (speedId.value === '1') {
        speed = 1000;
    }
    else if (speedId.value === '2') {
        speed = 500;
    }
    else if (speedId.value === '3') {
        speed = 333;
    }
    else if (speedId.value === '4') {
        speed = 250;
    }
    else if (speedId.value === '5') {
        speed = 200;
    }
    else if (speedId.value === '6') {
        speed = 167;
    }
    else if (speedId.value === '7') {
        speed = 143;
    }
    else if (speedId.value === '8') {
        speed = 125;
    }
    else if (speedId.value === '9') {
        speed = 111;
    }
    else if (speedId.value === '10') {
        speed = 100;
    }
}

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
    for (let i = 0; i < (snakeX.length); i++) { 
        if ((snakeX[i] === xFood)&&(snakeY[i]=== yFood)) {
        spawnFood();
        }
    }
}


function drawGame (){
    ctx.fillStyle = 'lightseagreen';
    ctx.fillRect(100,100,800,800);

    EatFood();
    if (snakeLenght > 0) {
        drawSnake ('yellow');
        a = snakeX[0];
        b = snakeY[0];
        for (let i = 0; i < (snakeX.length - 1); i++) { 
            if ((x === snakeX[i]) && (y === snakeY[i])){
                deadIndicator = true;
                blockLeft = true;
                blockDown = true;
                blockUp = true;
                blockRight = true;
                clearInterval(startGame.timer);
                score();
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

    ctx.fillStyle = 'green';
    ctx.fillRect(x,y,40,40);
    ctx.fillStyle = 'red';
    ctx.fillRect(xFood,yFood,40,40);

    
}

function move(){ 
    if (deadIndicator === false) {
        if (directionArr.length != 0) {
            direction = directionArr[0];
            directionArr.shift();
        }
        if ((direction === 'right')) {
            x = x + 40;
            if (x>860) {
                x=860;
                deadIndicator = true;
                blockLeft = true;
                blockDown = true;
                blockUp = true;
                blockRight = true;
                clearInterval(startGame.timer);
                score();
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
                clearInterval(startGame.timer);
                score();
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
                clearInterval(startGame.timer);
                score();
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
                clearInterval(startGame.timer);
                score();
                setInterval(die,100);
                
            }
            else{
            drawGame();
            }
            

        }
    }
}

function die(){
    if (deadIndicator === true) {
        speedId.disabled = false;
        blockLeft = true;
        blockDown = true;
        blockUp = true;
        blockRight = true;
        ctx.fillStyle = 'lightseagreen';
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
}
function keyDown(e){

    if (((e.keyCode === 39) || (e === 'right')) && (blockRight === false)) { //право
        x=x+40;
        if (x <= 860){            
            // direction = 'right';
            if (directionArr.length === 0) {
                if (direction != 'right') {
                    directionArr.push('right');
                }
            }

            else {
                if (directionArr[directionArr.length - 1] != 'right') {
                    directionArr.push('right');
                }
            }
            
            blockLeft = true;
            blockDown = false;
            blockUp = false;

            if (directionArr.length != 0) {
                x=x-40;
            }
            else {
                    drawGame(); 
            }
            // drawGame();

        }
        else {
            x=860;
            deadIndicator = true;
            blockLeft = true;
            blockDown = true;
            blockUp = true;
            blockRight = true;
            clearInterval(startGame.timer);
            score();
            setInterval(die,100);
                
        }
    }
    else if (((e.keyCode === 38) || (e === 'up'))  && (blockUp === false)) { //вверх
        y=y-40;
        if (y >= 100) {
        
            // direction = 'up';
            if (directionArr.length === 0) {
                if (direction != 'up') {
                    directionArr.push('up');
                }
            }

            else {
                if (directionArr[directionArr.length - 1] != 'up') {
                    directionArr.push('up');
                }
            }

            blockLeft = false;
            blockDown = true;
            blockRight = false;

            if (directionArr.length != 0) {
            y=y+40;
            }
            else {
                    drawGame(); 
            }
            // drawGame();
        }
        else {
            y=100;
            deadIndicator = true;
            blockLeft = true;
            blockDown = true;
            blockUp = true;
            blockRight = true;
            clearInterval(startGame.timer);
            score();
            setInterval(die,100);
            
        }
    }
    else if (((e.keyCode === 37) || ( e === 'left')) && (blockLeft === false)) { //влево
        x=x-40;
        if (x >= 100 ){
       
        // direction = 'left';
            if (directionArr.length === 0) {
                if (direction != 'left') {
                    directionArr.push('left');
                }
            }

            else {
                if (directionArr[directionArr.length - 1] != 'left') {
                    directionArr.push('left');
                }
            }    

            blockRight = true;
            blockDown = false;
            blockUp = false;

            if (directionArr.length != 0) {
                x=x+40;
            }
            else {
                drawGame(); 
            }
            // drawGame();
        }
        else{
            x=100;
            deadIndicator = true;
            blockLeft = true;
            blockDown = true;
            blockUp = true;
            blockRight = true;
            clearInterval(startGame.timer);
            score();
            setInterval(die,100);
            
        }
    }
    else if (((e.keyCode === 40) || ( e === 'down')) && (blockDown === false)) { //вниз  }
        y=y+40;
        if (y <= 860){
        
        // direction = 'down';
            if (directionArr.length === 0) {
                if (direction != 'down') {
                    directionArr.push('down');
                }
            }

            else {
                if (directionArr[directionArr.length - 1] != 'down') {
                    directionArr.push('down');
                }
            }

            blockLeft = false;
            blockRight = false;
            blockUp = true;

            if (directionArr.length != 0){
                y=y-40;
            }
            else {
                drawGame(); 
            }
            // drawGame();
        }
        else {
            y=860;
            deadIndicator = true;
            blockLeft = true;
            blockDown = true;
            blockUp = true;
            blockRight = true;
            clearInterval(startGame.timer);
            score();
            setInterval(die,100);
            
        }
    
    }
}

function EatFood(){
    if ((x=== xFood) && (y ===yFood)){
        snakeLenght++;
        snakeX.push(x);
        snakeY.push(y);
        spawnFood();
        setScore();
        chek = false;
    }

}

spawnFood();
drawGame();

let startButton = document.querySelector('.start-button');
startButton.addEventListener('click', startGame);

function startGame () {
    if (sok === true) {
        clearInterval(timer);
    }
    speedId.disabled = true;
    spd();
    deadIndicator = false;
    x = 500;
    y = 500;
    direction = 'right';
    snakeX = [];
    snakeY = [];
    directionArr = [];
    blockLeft = true;
    blockRight = false;
    blockUp = false;
    blockDown = false;
    snakeLenght = 0;
    setScore();
    k = true;
    timer = setInterval(move, speed);
    startButton.innerHTML = 'RESTART';
    sok = true;
}

let touchX = 0;
let touchY = 0;
let endX = 0;
let endY = 0;

document.querySelector('html').addEventListener('touchstart',startSwipe);
document.querySelector('html').addEventListener('touchend',end);

function swipeRight(){
    keyDown('right');
}

function swipeLeft(){
    keyDown('left');
}

function swipeUp(){
    keyDown('up');
}

function swipeDown(){
    keyDown('down');
}

function setScore() {
    ctx.fillStyle = 'white';
    ctx.fillRect(100, 0, 800, 100);
    ctx.fillStyle = 'lightseagreen';
    ctx.font = '40px Verdana';
    ctx.fillText('Snake lenght: ' + snakeLenght, 130, 60);
    ctx.font = '30px Verdana';
    ctx.fillText('Use the arrows on the keyboard if you play on a PC', 100, 940);
    ctx.fillText('Swipe if you play on phone', 100, 980);

}
setScore();

function end(event) {
    endX = event.changedTouches[0].clientX;
    endY = event.changedTouches[0].clientY;
    if ((endX > (touchX + 100)) && (endY < (touchY + 100)) && (endY > (touchY - 100))){
        swipeRight();
    }
    else if ((endX < (touchX - 100)) && (endY < (touchY + 100)) && (endY > (touchY - 100))){
        swipeLeft();
    }
    else if((endY < (touchY - 100)) && (endX < (touchX + 100)) && (endX > (touchX - 100))){
        swipeUp();
    }
    else if((endY > (touchY + 100)) && (endX < (touchX + 100)) && (endX > (touchX - 100))){
        swipeDown();
    }
}

function startSwipe(event) {

    touchX = event.changedTouches[0].clientX;
    touchY = event.changedTouches[0].clientY;
    
}
