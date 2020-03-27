function inputErrorId(id){
    var element = document.getElementById(id);
    element.className = 'errorInput';
}

function allInputError(){
    inputErrorId('sosiska');
    inputErrorId('sosisochka');
    inputErrorId('sardelka');
}

var sendButton = document.getElementById('button');
sendButton.addEventListener('click', allInputError);

var sosiska = document.getElementById('sosiska');
sosiska.addEventListener('focus', allInputError);