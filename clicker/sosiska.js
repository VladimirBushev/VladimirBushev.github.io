var img = document.getElementById('masha');
var img2 = document.getElementById('katya');
var title = document.getElementById('title');

function clickedMasha(){
    title.className = 'hidden-img';
    img2.className = 'hidden-img';
    //img.style.width = '300px';
    img.src = 'https://sun9-30.userapi.com/c857320/v857320058/f75e0/_bry66ZYpCM.jpg'
}

function clickedKatya(){
    title.className = 'hidden-img';
    img.className = 'hidden-img';
    img2.src = 'https://sc02.alicdn.com/kf/HTB1ppZERpXXXXXpXFXXq6xXFXXXI/Plus-Size-women-high-heeled-shoes-footwear.jpg';
}

function inputErrorId(id){
    var element = document.getElementById(id);
    element.className = 'errorInput';
}

function allInputError(){
    title.className = 'display-img';
    img.className = 'display-img';
    img2.className = 'display-img';
    img.src = 'https://sun9-30.userapi.com/c636930/v636930603/5a0aa/zEA6AiUGtgs.jpg';
    img2.src = 'https://sun9-71.userapi.com/c856120/v856120331/33b72/CCdUDWriJWg.jpg';
    img.style.width = '750px';
    inputErrorId('sosiska');
    inputErrorId('sosisochka');
    inputErrorId('sardelka');
}

var sendButton = document.getElementById('button');
sendButton.addEventListener('click', allInputError);

img.addEventListener('click', clickedMasha);
img2.addEventListener('click', clickedKatya);