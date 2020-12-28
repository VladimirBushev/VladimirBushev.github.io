const cvs = document.getElementById('canvas')
const ctx = cvs.getContext('2d')
var img = document.getElementById('sprite');

let flagUp = false;
let flagRight = false;
let flagDown = false;
let flagLeft = false;

let z = 0;

function drawAll() {
    ctx.clearRect(0,0,1500,900);
    ctx.drawImage(img,z*113,0,113,100,player.x,player.y,113,100);
    if ((bullet.x != player.x+100) || (bullet.y != player.y+55)){
        ctx.fillStyle = 'red';
        ctx.fillRect(bullet.x,bullet.y,10,6);
        if (bullet.x >= 1500) {
            bullet.shotindicator = false;
            bullet.x = player.x+100 ;
        }
        else bullet.x +=15;

    }
    if (enemy.deadIndicator === false){
        ctx.drawImage(img,460+enemy.imgNumber,235,110,100,enemy.x,enemy.y,110,100);
    }
    else {
        ctx.drawImage(img,460+enemy.imgNumber,345,110,100,enemy.x,enemy.y,110,100);
    }
    if (((bullet.x >= enemy.x) && (bullet.x <= enemy.x + 110)) && ((bullet.y >= enemy.y) && (bullet.y <= enemy.y + 55))){
        enemy.deadIndicator = true;
    }
    requestAnimationFrame(drawAll);
}

const player = {
    x: 0,
    y: 0,

    moove()  {
        if (z<3) z++;
        else z=0;
        this.x+=20;
        if (bullet.shotindicator === false){
        bullet.x+=20; 
        }
    },
}

const bullet = {
    x: player.x + 100,
    y: player.y + 55,
    shotindicator: false,
    shot() {
        bullet.shotindicator = true;
        bullet.x +=10;

    },
}

const enemy = {
    imgNumber: 0,
    x: 1200,
    y: 0,
    mooving: 'down',
    deadIndicator: false,
    speed: 100,
    moove() {
        if (enemy.deadIndicator === false){
            if ((enemy.y === 0) || (enemy.mooving === 'down')){
                enemy.y +=4;
                if (enemy.y === 200){
                    enemy.mooving = 'up';
                }
            }
            else {
                enemy.y -=4;
                if (enemy.y === 0) enemy.mooving = 'down';
            }
        }
        if (enemy.deadIndicator === false){
            if ((enemy.imgNumber >= 0) && (enemy.imgNumber != 220)){
                enemy.imgNumber += 110;
            }
            else {
                enemy.imgNumber = 0;
                
            }
        }
        else {
           
            clearInterval(enemy.moove);
            enemy.imgNumber = 320;
        
        }
    }  
}

setInterval(enemy.moove,enemy.speed);





img.onload = function (){
    ctx.drawImage(img,z*113,0,113,100,player.x,player.y,113,100);
    img.style.display = 'none';  
}

img.src = 'image.png';

document.onkeydown = function(e) {
    if (event.code === 'ArrowRight') {
        flagRight = true;
        if (flagRight === true){
            player.moove();
        }
    }
    if (event.code === 'Space'){
        bullet.shot();
    }

    
}

document.onkeyup = function(e) {
    if (event.code === 'ArrowUp') {
        flagUp = false;    
    }
    if (event.code === 'ArrowRight') {
        flagRight = false;
    }
    if (event.code === 'ArrowDown') {
        flagDown = false;    
    }
    if (event.code === 'ArrowLeft') {
        flagLeft = false;
    }

}

drawAll();


// несовершенство


// const map = {              
//     name: 'syktyvkar',
//     draw(){
//         ctx.fillStyle = 'green';
//         ctx.fillRect(0,0,1500,900);
//     }
// };

// const player = {
//     name: 'Vladimir',
//     lifeStatus: true,
//     healPoints: 100,
//     x: 300,
//     y: 200,
//     size: 25,
//     speed: 8,
//     damage: 10,
//     direction: '',
//     draw(){
//         if (flagLeft === true && flagUp === false && flagDown == false){
//             this.direction = 'left';  
//             ctx.beginPath();
//             ctx.fillStyle = 'yellow';
//             ctx.arc(this.x-this.size,this.y,this.size/3,0,(2*Math.PI));
//             ctx.fill();
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x,this.y+25,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x,this.y-25,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//         }
//         else if  (flagRight === true && flagUp === false && flagDown == false){
//             this.direction = 'right';  
//             ctx.beginPath();
//             ctx.fillStyle = 'yellow';
//             ctx.arc(this.x+this.size,this.y,this.size/3,0,(2*Math.PI));
//             ctx.fill();      
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x,this.y+25,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x,this.y-25,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//         }
//         else if  (flagUp === true && flagRight === false && flagLeft == false){
//             this.direction = 'up';  
//             ctx.beginPath();
//             ctx.fillStyle = 'yellow';
//             ctx.arc(this.x,this.y-this.size,this.size/3,0,(2*Math.PI));
//             ctx.fill();      
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x+25,this.y,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x-25,this.y,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//         }
//         else if  (flagDown === true && flagRight === false && flagLeft == false){
//             this.direction = 'down';  
//             ctx.beginPath();
//             ctx.fillStyle = 'yellow';
//             ctx.arc(this.x,this.y+this.size,this.size/3,0,(2*Math.PI));
//             ctx.fill();      
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x+25,this.y,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x-25,this.y,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//         }
//         else if  (flagUp === true && flagRight === true && flagLeft == false){
//             this.direction = 'up-right';  
//             ctx.beginPath();
//             ctx.fillStyle = 'yellow';
//             ctx.arc(this.x+this.size-7,this.y-this.size+7,this.size/3,0,(2*Math.PI));
//             ctx.fill();      
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x+17,this.y+17,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x-17,this.y-17,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//         }
//         else if  (flagUp === true && flagRight === false && flagLeft == true){
//             this.direction = 'up-left';  
//             ctx.beginPath();
//             ctx.fillStyle = 'yellow';
//             ctx.arc(this.x-this.size+7,this.y-this.size+7,this.size/3,0,(2*Math.PI));
//             ctx.fill();      
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x-17,this.y+17,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x+17,this.y-17,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//         }      
//         else if  (flagDown === true && flagRight === false && flagLeft == true){
//             this.direction = 'down-left';  
//             ctx.beginPath();
//             ctx.fillStyle = 'yellow';
//             ctx.arc(this.x-this.size+7,this.y+this.size-7,this.size/3,0,(2*Math.PI));
//             ctx.fill();      
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x-17,this.y-17,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x+17,this.y+17,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//         }     
//         else if  (flagDown === true && flagRight === true && flagLeft == false){
//             this.direction = 'down-right';  
//             ctx.beginPath();
//             ctx.fillStyle = 'yellow';
//             ctx.arc(this.x+this.size-7,this.y+this.size-7,this.size/3,0,(2*Math.PI));
//             ctx.fill();      
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x-17,this.y+17,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(this.x+17,this.y-17,this.size/2,0,(2*Math.PI));
//             ctx.fill();
//         } 
//         else {
//         ctx.beginPath();
//         ctx.fillStyle = 'yellow';
//         ctx.arc(this.x-this.size,this.y,this.size/3,0,(2*Math.PI));
//         ctx.fill();
   
//         ctx.beginPath();
//         ctx.fillStyle = 'red';
//         ctx.arc(this.x,this.y+25,this.size/2,0,(2*Math.PI));
//         ctx.fill();
//         ctx.beginPath();
//         ctx.fillStyle = 'red';
//         ctx.arc(this.x,this.y-25,this.size/2,0,(2*Math.PI));
//         ctx.fill();      
//         }  

//         ctx.beginPath();
//         ctx.fillStyle = 'red';
//         ctx.arc(this.x,this.y,this.size,0,(2*Math.PI));
//         ctx.fill();

//     },

//     hit(){
        
//     }

// }

// const enemy = {
//     healPoints: 100,
//     x: 700,
//     y: 700,
//     size: 25,
//     draw(){
//         if (this.healPoints > 0){
//         ctx.beginPath();
//         ctx.fillStyle = 'black';
//         ctx.arc(this.x,this.y,this.size,0,(2*Math.PI));
//         ctx.fill();
//         ctx.beginPath();
//         ctx.fillStyle = 'red';
//         ctx.fillRect(this.x-25,this.y-50, this.healPoints/2, 5)
//         }

//     }
// }



// document.onkeydown = function(e) {
//     if (event.code === 'ArrowUp') {
//         flagUp = true;
//         if (flagRight === true) player.x = player.x + player.speed;
//         if (flagLeft === true) player.x = player.x - player.speed;
//         player.y = player.y - player.speed;  
//         map.draw();
//         player.draw();  
//         enemy.draw();
//     }
//     if (event.code === 'ArrowRight') {
//         flagRight = true;
//         if (flagUp === true) player.y = player.y - player.speed;
//         if (flagDown === true) player.y = player.y + player.speed;
//         player.x = player.x + player.speed;
//         map.draw();
//         player.draw();
//         enemy.draw();
//     }
//     if (event.code === 'ArrowDown') {
//         flagDown = true;
//         if (flagRight === true) player.x = player.x + player.speed;
//         if (flagLeft === true) player.x = player.x - player.speed;
//         player.y = player.y + player.speed;
//         map.draw();
//         player.draw(); 
//         enemy.draw();
//     }
//     if (event.code === 'ArrowLeft') {
//         flagLeft = true;
//         if (flagUp === true) player.y = player.y - player.speed;
//         if (flagDown === true) player.y = player.y + player.speed;
//         player.x = player.x - player.speed;
//         map.draw();
//         player.draw();
//         enemy.draw();
//     }
//     if (event.code === 'Space'){
//         if (player.direction === 'right') {
 
//             if (((enemy.x-37<player.x+player.size*3) && (player.x+player.size*3<enemy.x+37))&&((enemy.y-37<player.y+player.size) && (player.y+player.size<enemy.y+37))){
//                 enemy.healPoints = enemy.healPoints - player.damage;
//             }
//             map.draw();
//             enemy.draw(); 
//             ctx.beginPath();
//             ctx.fillStyle = 'yellow';
//             ctx.arc(player.x+player.size,player.y,player.size/3,0,(2*Math.PI));
//             ctx.fill();      
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(player.x,player.y-25,player.size/2,0,(2*Math.PI));
//             ctx.fill();
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(player.x,player.y,player.size,0,(2*Math.PI));
//             ctx.fill();
//             ctx.beginPath();
//             ctx.fillStyle = 'red';
//             ctx.arc(player.x+player.size*3,player.y+player.size,player.size/2,0,(2*Math.PI));
//             ctx.fill();
//             setTimeout(() => {
//                 ctx.beginPath();
//                 ctx.fillStyle = 'green';
//                 ctx.arc(player.x+player.size*3,player.y+player.size,player.size/2,0,(2*Math.PI));
//                 ctx.fill();
//                 ctx.beginPath();
//                 ctx.fillStyle = 'red';
//                 ctx.arc(player.x,player.y+25,player.size/2,0,(2*Math.PI));
//                 ctx.fill();
//                 enemy.draw();
//             }, 250  );
//         }
//     }

// }

// map.draw();
// player.draw();
// enemy.draw();