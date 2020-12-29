const cvs = document.getElementById('canvas')
const ctx = cvs.getContext('2d')
var speedId = document.getElementById('label');
var startButton = document.getElementById('start-button');
startButton.addEventListener('click', start);
document.addEventListener('keydown', keyDown);

const bg = [[], []];
let shetchik = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let box = 40;
let fc1 = 0, fc2 = 0, fc3 = 0, fc4 = 0, fc5 = 0, fc6 = 0, fc7 = 0, fc8 = 0;
let s = 1;
let keyDownBlocker = true;
let speed = 1000;
let score = 0;
let k = 0, m = 0;
let figureId;
let highScore = 0;
let spd1 = setInterval(spd, 10);
let nextFigureId = 0;


function start() {
    createArray();
    startGame();
    gogo();
    startButton.disabled = true;
    speedId.disabled = true;

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
function setScore() {
    ctx.fillStyle = 'white';
    ctx.fillRect(400, 70, 500, 200);
    ctx.fillStyle = 'lightseagreen';
    ctx.font = '20px Verdana';
    ctx.fillText('SCORE: ' + score, 420, 130);
    ctx.fillText('HIGH SCORE', 420, 160);
    ctx.fillText('THIS SESSION: ' + highScore, 420, 190); 
    ctx.fillText('NEXT FIGURE', 420, 300);

    ctx.fillText('Control', 420, 500 );

    ctx.fillText('PC:', 420, 540 );
    ctx.fillText('Use the arrows on', 420, 580 );
    ctx.fillText('the keyboard', 420, 600 );

    
    ctx.fillText('MOBILE:', 420, 660 );
    ctx.fillText('Swipe left, right and' , 420, 700 );
    ctx.fillText('up to control', 420, 720 );
    ctx.fillText('Tap the screen to', 420, 750 );
    ctx.fillText('place the tetromino', 420, 770 );
}
function drawNextFigure() {
    ctx.fillStyle = 'white';
    ctx.fillRect(420, 325, 250, 150)
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    if (nextFigureId === 1) {

        ctx.fillRect(500, 350, box, box);
        ctx.fillRect(540, 350, box, box);
        ctx.fillRect(500, 390, box, box);
        ctx.fillRect(540, 390, box, box);

        ctx.strokeRect(500, 350, box, box);
        ctx.strokeRect(540, 350, box, box);
        ctx.strokeRect(500, 390, box, box);
        ctx.strokeRect(540, 390, box, box);

    }
    if (nextFigureId === 2) {

        ctx.fillRect(500, 350, box, box);
        ctx.fillRect(540, 350, box, box);
        ctx.fillRect(460, 350, box, box);
        ctx.fillRect(580, 350, box, box);

        ctx.strokeRect(500, 350, box, box);
        ctx.strokeRect(540, 350, box, box);
        ctx.strokeRect(460, 350, box, box);
        ctx.strokeRect(580, 350, box, box);

    }
    if (nextFigureId === 3) {

        ctx.fillRect(500, 350, box, box);
        ctx.fillRect(540, 350, box, box);
        ctx.fillRect(460, 350, box, box);
        ctx.fillRect(460, 390, box, box);

        ctx.strokeRect(500, 350, box, box);
        ctx.strokeRect(540, 350, box, box);
        ctx.strokeRect(460, 350, box, box);
        ctx.strokeRect(460, 390, box, box);

    }
    if (nextFigureId === 4) {

        ctx.fillRect(500, 350, box, box);
        ctx.fillRect(540, 350, box, box);
        ctx.fillRect(460, 350, box, box);
        ctx.fillRect(540, 390, box, box);

        ctx.strokeRect(500, 350, box, box);
        ctx.strokeRect(540, 350, box, box);
        ctx.strokeRect(460, 350, box, box);
        ctx.strokeRect(540, 390, box, box);

    }
    if (nextFigureId === 5) {

        ctx.fillRect(500, 350, box, box);
        ctx.fillRect(500, 390, box, box);
        ctx.fillRect(460, 350, box, box);
        ctx.fillRect(540, 390, box, box);

        ctx.strokeRect(500, 350, box, box);
        ctx.strokeRect(500, 390, box, box);
        ctx.strokeRect(460, 350, box, box);
        ctx.strokeRect(540, 390, box, box);

    }
    if (nextFigureId === 6) {

        ctx.fillRect(500, 350, box, box);
        ctx.fillRect(500, 390, box, box);
        ctx.fillRect(460, 390, box, box);
        ctx.fillRect(540, 350, box, box);

        ctx.strokeRect(500, 350, box, box);
        ctx.strokeRect(500, 390, box, box);
        ctx.strokeRect(460, 390, box, box);
        ctx.strokeRect(540, 350, box, box);

    }
    if (nextFigureId === 7) {

        ctx.fillRect(500, 350, box, box);
        ctx.fillRect(500, 390, box, box);
        ctx.fillRect(460, 350, box, box);
        ctx.fillRect(540, 350, box, box);

        ctx.strokeRect(500, 350, box, box);
        ctx.strokeRect(500, 390, box, box);
        ctx.strokeRect(460, 350, box, box);
        ctx.strokeRect(540, 350, box, box);

    }
}
function createArray() {
    for (var i = 0; i < 24; i++) {
        bg[i] = [];
        for (var j = 0; j < 10; j++) {
            bg[i][j] = { x: 0, y: 0, z: 0 };
        }
    }

    for (var i = 0; i < 24; i++) {
        for (var j = 0; j < 10; j++) {
            bg[i][j].x += (box * j);
            bg[i][j].y += (box * i);
        }
    }
    for (var i = 22; i < 24; i++) {
        for (var j = 0; j < 10; j++) {
            bg[i][j].z = 2;
        }
    }
}
function drawGame() {

    for (var i = 0; i < 24; i++) {
        for (var j = 0; j < 10; j++) {
            if (bg[i][j].z === 0) {
                ctx.fillStyle = 'lightseagreen';
            }
            else if (bg[i][j].z === 2) {
                ctx.fillStyle = 'blue';
            }
            else if (bg[i][j].z === 3) {
                ctx.fillStyle = 'green';
            }
            else {
                ctx.fillStyle = 'red';
            }

            ctx.fillRect(bg[i][j].x, bg[i][j].y, box, box);
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 3;
            ctx.strokeRect(bg[i][j].x, bg[i][j].y, box, box);

            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, 403, 80);
            setScore();
        }
    }

}
function down() {
    if (((bg[fc1 + 1][fc2].z === 0) || (bg[fc1 + 1][fc2].z === 1)) &&
        ((bg[fc3 + 1][fc4].z === 0) || (bg[fc3 + 1][fc4].z === 1)) &&
        ((bg[fc5 + 1][fc6].z === 0) || (bg[fc5 + 1][fc6].z === 1)) &&
        ((bg[fc7 + 1][fc8].z === 0) || (bg[fc7 + 1][fc8].z === 1))) {
        bg[fc1][fc2].z = 0;
        bg[fc3][fc4].z = 0;
        bg[fc5][fc6].z = 0;
        bg[fc7][fc8].z = 0;

        bg[fc1 + 1][fc2].z = 1;
        bg[fc3 + 1][fc4].z = 1;
        bg[fc5 + 1][fc6].z = 1;
        bg[fc7 + 1][fc8].z = 1;
    }
}
function findFigure(n) {
    for (var i = 0; i < 22; i++) {
        for (var j = 0; j < 10; j++) {
            if (bg[i][j].z === n) {
                if (s === 1) {
                    fc1 = i;
                    fc2 = j;
                    s++;
                }
                else if (s === 2) {
                    fc3 = i;
                    fc4 = j;
                    s++;
                }
                else if (s === 3) {
                    fc5 = i;
                    fc6 = j;
                    s++;
                }
                else if (s === 4) {
                    fc7 = i;
                    fc8 = j;
                    s = 1;
                }
            }
        }
    }
}
function startGame() {
    if (nextFigureId === 0) {
        figureId = Math.floor((Math.random() * 7+ 1));
    }
    else {
        figureId = nextFigureId;
    }
    nextFigureId = Math.floor((Math.random() * 7 + 1));
    if (figureId === 1) {
        bg[2][4].z = 1;
        bg[2][5].z = 1;
        bg[3][4].z = 1;
        bg[3][5].z = 1;
    }
    else if (figureId === 2) {
        bg[2][3].z = 1;
        bg[2][4].z = 1;
        bg[2][5].z = 1;
        bg[2][6].z = 1;
    }
    else if (figureId === 3) {
        bg[2][4].z = 1;
        bg[2][5].z = 1;
        bg[2][6].z = 1;
        bg[3][4].z = 1;
    }
    else if (figureId === 4) {
        bg[2][4].z = 1;
        bg[2][5].z = 1;
        bg[2][6].z = 1;
        bg[3][6].z = 1;
    }
    else if (figureId === 5) {
        bg[2][4].z = 1;
        bg[2][5].z = 1;
        bg[3][5].z = 1;
        bg[3][6].z = 1;
    }
    else if (figureId === 6) {
        bg[2][4].z = 1;
        bg[2][5].z = 1;
        bg[3][3].z = 1;
        bg[3][4].z = 1;
    }
    else if (figureId === 7) {
        bg[2][4].z = 1;
        bg[2][5].z = 1;
        bg[2][6].z = 1;
        bg[3][5].z = 1;
    }
    drawNextFigure();
}
function keyDown(e) {
    findFigure(1);
    if (keyDownBlocker === false) {
        if ((e.keyCode === 39)||(e === 'right')) {

            if ((fc2 < 9 && fc4 < 9 && fc6 < 9 && fc8 < 9) &&
                (bg[fc1][fc2 + 1].z != 3 &&
                    bg[fc3][fc4 + 1].z != 3 &&
                    bg[fc5][fc6 + 1].z != 3 &&
                    bg[fc7][fc8 + 1].z != 3)) {
                bg[fc1][fc2].z = 0;
                bg[fc3][fc4].z = 0;
                bg[fc5][fc6].z = 0;
                bg[fc7][fc8].z = 0;
                bg[fc1][fc2 + 1].z = 1;
                bg[fc3][fc4 + 1].z = 1;
                bg[fc5][fc6 + 1].z = 1;
                bg[fc7][fc8 + 1].z = 1;
            }
        }
        else if ((e.keyCode === 37)||(e === 'left')) {
            if ((fc2 > 0 && fc4 > 0 && fc6 > 0 && fc8 > 0) &&
                (bg[fc1][fc2 - 1].z != 3 &&
                    bg[fc3][fc4 - 1].z != 3 &&
                    bg[fc5][fc6 - 1].z != 3 &&
                    bg[fc7][fc8 - 1].z != 3)) {
                bg[fc1][fc2].z = 0;
                bg[fc3][fc4].z = 0;
                bg[fc5][fc6].z = 0;
                bg[fc7][fc8].z = 0;
                bg[fc1][fc2 - 1].z = 1;
                bg[fc3][fc4 - 1].z = 1;
                bg[fc5][fc6 - 1].z = 1;
                bg[fc7][fc8 - 1].z = 1;
            }
        }
        else if ((e.keyCode === 40)||(e === 'down')) {
            if ((fc1 < 21 && fc3 < 21 && fc5 < 21 && fc7 < 21) &&
                (bg[fc1 + 1][fc2].z != 3 &&
                    bg[fc3 + 1][fc4].z != 3 &&
                    bg[fc5 + 1][fc6].z != 3 &&
                    bg[fc7 + 1][fc8].z != 3)) {
                bg[fc1][fc2].z = 0;
                bg[fc3][fc4].z = 0;
                bg[fc5][fc6].z = 0;
                bg[fc7][fc8].z = 0;
                bg[fc1 + 1][fc2].z = 1;
                bg[fc3 + 1][fc4].z = 1;
                bg[fc5 + 1][fc6].z = 1;
                bg[fc7 + 1][fc8].z = 1;
            }
        }
        else if ((e.keyCode === 38) || (e ==='up')){
            if ((figureId === 2) &&
                (bg[fc1 - 2][fc2 + 2].z != 2) &&
                (bg[fc3 - 1][fc4 + 1].z != 2) &&
                (bg[fc7 + 1][fc8 - 1].z != 2) &&
                (bg[fc1 - 2][fc2 + 2].z != 3) &&
                (bg[fc3 - 1][fc4 + 1].z != 3) &&
                (bg[fc7 + 1][fc8 - 1].z != 3)) {

                findFigure(1);
                bg[fc1][fc2].z = 0;
                bg[fc3][fc4].z = 0;
                bg[fc7][fc8].z = 0;
                bg[fc1 - 2][fc2 + 2].z = 1;
                bg[fc3 - 1][fc4 + 1].z = 1;
                bg[fc7 + 1][fc8 - 1].z = 1;
                figureId = 8;
            }
            else if ((figureId === 8) &&
                (bg[fc1 + 2][fc2 - 2].z != 2) &&
                (bg[fc3 + 1][fc4 - 1].z != 2) &&
                (bg[fc7 - 1][fc8 + 1].z != 2) &&
                (bg[fc1 + 2][fc2 - 2].z != 3) &&
                (bg[fc3 + 1][fc4 - 1].z != 3) &&
                (bg[fc7 - 1][fc8 + 1].z != 3)) {

                findFigure(1);
                bg[fc1][fc2].z = 0;
                bg[fc3][fc4].z = 0;
                bg[fc7][fc8].z = 0;
                bg[fc1 + 2][fc2 - 2].z = 1;
                bg[fc3 + 1][fc4 - 1].z = 1;
                bg[fc7 - 1][fc8 + 1].z = 1;
                figureId = 2;
            }
            else if ((figureId === 3) &&
                (bg[fc1 - 1][fc2 + 1].z != 2) &&
                (bg[fc5 + 1][fc6 - 1].z != 2) &&
                (bg[fc7 - 2][fc8].z != 2) &&
                (bg[fc1 - 1][fc2 + 1].z != 3) &&
                (bg[fc5 + 1][fc6 - 1].z != 3) &&
                (bg[fc7 - 2][fc8].z != 3)) {
                bg[fc1][fc2].z = 0;
                bg[fc5][fc6].z = 0;
                bg[fc7][fc8].z = 0;
                bg[fc1 - 1][fc2 + 1].z = 1;
                bg[fc5 + 1][fc6 - 1].z = 1;
                bg[fc7 - 2][fc8].z = 1;
                figureId = 9;
            }
            else if ((figureId === 9) &&
                (bg[fc1][fc2 + 2].z != 2) &&
                (bg[fc3 + 1][fc4 + 1].z != 2) &&
                (bg[fc7 - 1][fc8 - 1].z != 2) &&
                (bg[fc1][fc2 + 2].z != 3) &&
                (bg[fc5 + 1][fc6 + 1].z != 3) &&
                (bg[fc7 - 1][fc8 - 1].z != 3)) {
                bg[fc1][fc2].z = 0;
                bg[fc3][fc4].z = 0;
                bg[fc7][fc8].z = 0;
                bg[fc1][fc2 + 2].z = 1;
                bg[fc3 + 1][fc4 + 1].z = 1;
                bg[fc7 - 1][fc8 - 1].z = 1;
                figureId = 10;
            }
            else if ((figureId === 10) &&
                (bg[fc1 + 2][fc2].z != 2) &&
                (bg[fc3 - 1][fc4 + 1].z != 2) &&
                (bg[fc7 + 1][fc8 - 1].z != 2) &&
                (bg[fc1 + 2][fc2].z != 3) &&
                (bg[fc3 - 1][fc4 + 1].z != 3) &&
                (bg[fc7 + 1][fc8 - 1].z != 3)) {
                bg[fc1][fc2].z = 0;
                bg[fc3][fc4].z = 0;
                bg[fc7][fc8].z = 0;
                bg[fc1 + 2][fc2].z = 1;
                bg[fc3 - 1][fc4 + 1].z = 1;
                bg[fc7 + 1][fc8 - 1].z = 1;
                figureId = 11;
            }
            else if ((figureId === 11) &&
                (bg[fc1 + 1][fc2 + 1].z != 2) &&
                (bg[fc5 - 1][fc6 - 1].z != 2) &&
                (bg[fc7][fc8 - 2].z != 2) &&
                (bg[fc1 + 1][fc2 + 1].z != 3) &&
                (bg[fc5 - 1][fc6 - 1].z != 3) &&
                (bg[fc7][fc8 - 2].z != 3)) {
                bg[fc1][fc2].z = 0;
                bg[fc5][fc6].z = 0;
                bg[fc7][fc8].z = 0;
                bg[fc1 + 1][fc2 + 1].z = 1;
                bg[fc5 - 1][fc6 - 1].z = 1;
                bg[fc7][fc8 - 2].z = 1;
                figureId = 3;
            }
            else if ((figureId === 4) &&
                (bg[fc1 - 1][fc2 + 1].z != 2) &&
                (bg[fc5 + 1][fc6 - 1].z != 2) &&
                (bg[fc7][fc8 - 2].z != 2) &&
                (bg[fc1 - 1][fc2 + 1].z != 3) &&
                (bg[fc5 + 1][fc6 - 1].z != 3) &&
                (bg[fc7][fc8 - 2].z != 3)) {
                bg[fc1][fc2].z = 0;
                bg[fc5][fc6].z = 0;
                bg[fc7][fc8].z = 0;
                bg[fc1 - 1][fc2 + 1].z = 1;
                bg[fc5 + 1][fc6 - 1].z = 1;
                bg[fc7][fc8 - 2].z = 1;
                figureId = 12;
            }
            else if ((figureId === 12) &&
                (bg[fc1 + 1][fc2 + 1].z != 2) &&
                (bg[fc5 - 2][fc6].z != 2) &&
                (bg[fc7 - 1][fc8 - 1].z != 2) &&
                (bg[fc1 + 1][fc2 + 1].z != 3) &&
                (bg[fc5 - 2][fc6].z != 3) &&
                (bg[fc7 - 1][fc8 - 1].z != 3)) {
                bg[fc1][fc2].z = 0;
                bg[fc5][fc6].z = 0;
                bg[fc7][fc8].z = 0;
                bg[fc1 + 1][fc2 + 1].z = 1;
                bg[fc5 - 2][fc6].z = 1;
                bg[fc7 - 1][fc8 - 1].z = 1;
                figureId = 13;
            }
            else if ((figureId === 13) &&
                (bg[fc1][fc2 + 2].z != 2) &&
                (bg[fc3 - 1][fc4 + 1].z != 2) &&
                (bg[fc7 + 1][fc8 - 1].z != 2) &&
                (bg[fc1][fc2 + 2].z != 3) &&
                (bg[fc3 - 1][fc4 + 1].z != 3) &&
                (bg[fc7 + 1][fc8 - 1].z != 3)) {
                bg[fc1][fc2].z = 0;
                bg[fc3][fc4].z = 0;
                bg[fc7][fc8].z = 0;
                bg[fc1][fc2 + 2].z = 1;
                bg[fc3 - 1][fc4 + 1].z = 1;
                bg[fc7 + 1][fc8 - 1].z = 1;
                figureId = 14;
            }
            else if ((figureId === 14) &&
                (bg[fc1 + 1][fc2 + 1].z != 2) &&
                (bg[fc3 + 2][fc4].z != 2) &&
                (bg[fc7 - 1][fc8 - 1].z != 2) &&
                (bg[fc1 + 1][fc2 + 1].z != 3) &&
                (bg[fc3 + 2][fc4].z != 3) &&
                (bg[fc7 - 1][fc8 - 1].z != 3)) {
                bg[fc1][fc2].z = 0;
                bg[fc3][fc4].z = 0;
                bg[fc7][fc8].z = 0;
                bg[fc1 + 1][fc2 + 1].z = 1;
                bg[fc3 + 2][fc4].z = 1;
                bg[fc7 - 1][fc8 - 1].z = 1;
                figureId = 4;
            }
            else if ((figureId === 5) &&
                (bg[fc1][fc2 + 2].z != 2) &&
                (bg[fc7 - 2][fc8].z != 2) &&
                (bg[fc1][fc2 + 2].z != 3) &&
                (bg[fc7 - 2][fc8].z != 3)) {
                bg[fc1][fc2].z = 0;
                bg[fc7][fc8].z = 0;
                bg[fc1][fc2 + 2].z = 1;
                bg[fc7 - 2][fc8].z = 1;
                figureId = 15;
            }
            else if ((figureId === 15) &&
                (bg[fc5][fc6 - 2].z != 2) &&
                (bg[fc1 + 2][fc2].z != 2) &&
                (bg[fc5][fc6 - 2].z != 3) &&
                (bg[fc1 + 2][fc2].z != 3)) {
                bg[fc5][fc6].z = 0;
                bg[fc1][fc2].z = 0;
                bg[fc5][fc6 - 2].z = 1;
                bg[fc1 + 2][fc2].z = 1;
                figureId = 5;
            }
            else if ((figureId === 6) &&
                (bg[fc3][fc4 - 2].z != 2) &&
                (bg[fc5 - 2][fc6].z != 2) &&
                (bg[fc3][fc4 - 2].z != 3) &&
                (bg[fc5 - 2][fc6].z != 3)) {
                bg[fc3][fc4].z = 0;
                bg[fc5][fc6].z = 0;
                bg[fc3][fc4 - 2].z = 1;
                bg[fc5 - 2][fc6].z = 1;
                figureId = 16;
            }
            else if ((figureId === 16) &&
                (bg[fc1 + 2][fc2].z != 2) &&
                (bg[fc3][fc4 + 2].z != 2) &&
                (bg[fc1 + 2][fc2].z != 3) &&
                (bg[fc3][fc4 + 2].z != 3)) {
                bg[fc1][fc2].z = 0;
                bg[fc3][fc4].z = 0;
                bg[fc1 + 2][fc2].z = 1;
                bg[fc3][fc4 + 2].z = 1;
                figureId = 6;
            }

            else if ((figureId === 7) &&
                (bg[fc5 - 1][fc6 - 1].z != 2) &&
                (bg[fc5 - 1][fc6 - 1].z != 3)) {

                bg[fc5][fc6].z = 0;
                bg[fc5 - 1][fc6 - 1].z = 1;
                figureId = 17;
            }
            else if ((figureId === 17) &&
                (bg[fc7 - 1][fc8 + 1].z != 2) &&
                (bg[fc7 - 1][fc8 + 1].z != 3)) {

                bg[fc7][fc8].z = 0;
                bg[fc7 - 1][fc8 + 1].z = 1;
                figureId = 18;
            }
            else if ((figureId === 18) &&
                (bg[fc3 + 1][fc4 + 1].z != 2) &&
                (bg[fc3 + 1][fc4 + 1].z != 3)) {

                bg[fc3][fc4].z = 0;
                bg[fc3 + 1][fc4 + 1].z = 1;
                figureId = 19;
            }
            else if ((figureId === 19) &&
                (bg[fc1 + 1][fc2 - 1].z != 2) &&
                (bg[fc1 + 1][fc2 - 1].z != 3)) {

                bg[fc1][fc2].z = 0;
                bg[fc1 + 1][fc2 - 1].z = 1;
                figureId = 7;
            }


        }
    }
}
function clearLine() {
    for (var i = 21; i > 0; i--) {
        for (var j = 0; j < 10; j++) {
            shetchik[i] = k;
            if (bg[i][j].z === 3 && j === 0) {
                if (bg[i][j + 1].z === 3) {
                    if (bg[i][j + 2].z === 3) {
                        if (bg[i][j + 3].z === 3) {
                            if (bg[i][j + 4].z === 3) {
                                if (bg[i][j + 5].z === 3) {
                                    if (bg[i][j + 6].z === 3) {
                                        if (bg[i][j + 7].z === 3) {
                                            if (bg[i][j + 8].z === 3) {
                                                if (bg[i][j + 9].z === 3) {
                                                    bg[i][j].z = 0;
                                                    bg[i][j + 1].z = 0;
                                                    bg[i][j + 2].z = 0;
                                                    bg[i][j + 3].z = 0;
                                                    bg[i][j + 4].z = 0;
                                                    bg[i][j + 5].z = 0;
                                                    bg[i][j + 6].z = 0;
                                                    bg[i][j + 7].z = 0;
                                                    bg[i][j + 8].z = 0;
                                                    bg[i][j + 9].z = 0;
                                                    k++;
                                                    if (k===1){
                                                    m = i;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (k != 0) {
        for (var i = 21; i > 0; i--) {
            for (var j = 0; j < 10; j++) {
                if (bg[i][j].z === 3 && i < m) {
                    bg[i][j].z = 0;
                    bg[i + (shetchik[i]) ][j].z = 3;

                }

            }
        }
        if (k === 1) {
            score = score + 100;
        }
        else if (k === 2) {
            score = score + 300;
        }
        else if (k === 3) {
            score = score + 700;
        }
        else if (k === 4) {
            score = score + 1500;
        }
        if (highScore < score) {
            highScore = score;
        }
        setScore();
        k = 0;
    }
}
function gogo() {
    keyDownBlocker = false;

    function mooving() {
        findFigure(1);
        if (fc1 === 21 || fc3 === 21 || fc5 === 21 || fc7 === 21 || bg[fc1 + 1][fc2].z === 3 || bg[fc3 + 1][fc4].z === 3 || bg[fc5 + 1][fc6].z === 3 || bg[fc7 + 1][fc8].z === 3) {
            bg[fc1][fc2].z = 3;
            bg[fc3][fc4].z = 3;
            bg[fc5][fc6].z = 3;
            bg[fc7][fc8].z = 3;

            if (bg[2][5].z === 3) {
                bg[fc1][fc2].z = 3;
                bg[fc3][fc4].z = 3;
                bg[fc5][fc6].z = 3;
                bg[fc7][fc8].z = 3;
                let sst = setTimeout(drawGame, 1000);
                for (var i = 0; i < 24; i++) {
                    for (var j = 0; j < 10; j++) {
                        bg[i][j].z = 1;
                    }
                }

                highScore = score;
                score = 0;
                keyDownBlocker = true;
                startButton.innerHTML = 'RESTART';
                startButton.disabled = false;
                speedId.disabled = false;
                ctx.fillStyle = 'white';
                ctx.fillRect(420, 325, 250, 150)
                setScore();
                clearInterval(go);
                
            }
            else {

                clearLine();
                clearInterval(go);
                startGame();
                gogo();

            }
        }
        else {
            down();
        }
    }
    let go = setInterval(mooving, speed);
}

setScore();
createArray();
let game = setInterval(drawGame, 1);

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
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
    keyDown('down');
}

function end(event) {
    endX = event.changedTouches[0].clientX;
    endY = event.changedTouches[0].clientY;
    if ((endX > (touchX + 50)) & (endY < (touchY + 50)) & (endY > (touchY - 50))){
        swipeRight();
    }
    else if ((endX < (touchX - 50)) & (endY < (touchY + 50)) & (endY > (touchY - 50))){
        swipeLeft();
    }
    else if((endY < (touchY - 50)) & (endX < (touchX + 50)) & (endX > (touchX - 50))){
        swipeUp();
    }
    else if ((endX === touchX) & (endY === touchY)){
        swipeDown();
    }
}

function startSwipe(event) {

    touchX = event.changedTouches[0].clientX;
    touchY = event.changedTouches[0].clientY;
    
}
