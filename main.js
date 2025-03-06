var message = 'Hello World';
function removeLetters(str) {
    return str.replace(/[a-zA-Z]/g, '');
}
console.log(message);
var currentnum = 0;
var SEED = 0;
var phoneNumber = "";

// Create a container for the calculator
var calculatorContainer = document.createElement('div');
calculatorContainer.style.width = '200px';
calculatorContainer.style.margin = '0 auto';
calculatorContainer.style.textAlign = 'center';
document.body.appendChild(calculatorContainer);

var numberDisplay = document.createElement('p');
var content = [numberDisplay];
numberDisplay.textContent = '0';
numberDisplay.style.fontSize = '24px';
calculatorContainer.appendChild(numberDisplay);

var br = document.createElement('br');
calculatorContainer.appendChild(br);

var mode = "add";
var addButton = document.createElement('button');
addButton.textContent = "+";
addButton.style.width = '50px';
addButton.style.height = '50px';
addButton.style.margin = '5px';
addButton.addEventListener('click', function () {
    mode = "add";
});
calculatorContainer.appendChild(addButton);
content.push(addButton);

var clearButton = document.createElement('button');
clearButton.textContent = "C";
clearButton.style.width = '50px';
clearButton.style.height = '50px';
clearButton.style.margin = '5px';
clearButton.addEventListener('click', function () {
    currentnum = 0;
    numberDisplay.textContent = phoneNumber + currentnum.toString();
});
calculatorContainer.appendChild(clearButton);
content.push(clearButton);

var subButton = document.createElement('button');
subButton.textContent = "-";
subButton.style.width = '50px';
subButton.style.height = '50px';
subButton.style.margin = '5px';
subButton.addEventListener('click', function () {
    mode = "sub";
});
calculatorContainer.appendChild(subButton);
content.push(subButton);


calculatorContainer.appendChild(document.createElement('br'));

function createButton(name, buttonNum) {
    var button = document.createElement('button');
    button.textContent = name;
    button.style.width = '50px';
    button.style.height = '50px';
    button.style.margin = '5px';
    button.addEventListener('click', function () {
        if (mode === "add") {
            currentnum += buttonNum;
        }
        else {
            currentnum -= buttonNum;
        }
        numberDisplay.textContent = numberDisplay.textContent = phoneNumber + currentnum.toString();
    });
    return button;
}

var index = 0;
for (var i = 9; i > 0; i--) {
    index++;
    var newItem = createButton(i.toString(), i);
    calculatorContainer.appendChild(newItem);
    content.push(newItem);
    if (index % 3 === 0) {
        calculatorContainer.appendChild(document.createElement('br'));
    }
}

var saveButton = document.createElement('button');
saveButton.textContent = 'Save';
saveButton.style.width = '50px';
saveButton.style.height = '50px';
saveButton.style.margin = '5px';
saveButton.addEventListener('click', () => {
    phoneNumber = phoneNumber + currentnum + '-';
    currentnum = 0;
    numberDisplay.textContent = phoneNumber + currentnum.toString();

});

calculatorContainer.appendChild(saveButton);
content.push(saveButton);

var zeroButton = document.createElement('button');
zeroButton.textContent = '0';
zeroButton.style.width = '50px';
zeroButton.style.height = '50px';
zeroButton.style.margin = '5px';
zeroButton.addEventListener('click', () => {
    if (currentnum === 0) {
        phoneNumber = phoneNumber + '0';

    } else {
        phoneNumber = phoneNumber + currentnum + '0';
    }

    currentnum = 0;
    numberDisplay.textContent = phoneNumber;

});

calculatorContainer.appendChild(zeroButton);
content.push(zeroButton);
