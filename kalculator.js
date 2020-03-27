var operationButtons = document.getElementsByClassName('operation-button')
var answer228 = document.getElementById('answer');
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function makeOperation(operation) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var sum;
    if (operation === '+') {
        sum = number1 + number2;
    } else if (operation === '-') {
        sum = number1 - number2;
    } else if (operation === '*') {
        sum = number1 * number2;
    } else if (number2 === 0) {
        window.alert('Na nol delit nelzya dolbaeb!!!');
        return;
    } else if (operation === '/') {
        sum = number1 / number2;
    } 
    answer228.value = sum;
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener('click', onOperationButtonClick);
}


    