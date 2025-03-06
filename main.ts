let currentnum = 0;
let numberDisplay = document.createElement('p')
numberDisplay.textContent = '0';
numberDisplay.style.marginLeft = '85px';
document.body.appendChild(numberDisplay);
let br = document.createElement('br')
document.body.appendChild(br);
function createButton(name, buttonNum) {
    let button = document.createElement('button');
    button.textContent = name;
    button.style.width = '50px';
    button.style.height = '50px';
    button.style.margin = '5px';
    button.addEventListener('click', () => {
        currentnum += buttonNum;
        numberDisplay.textContent = currentnum.toString();
    });
    return button

};
let index = 0;

for (let i = 9; i > 0; i--) {
    console.log('skibid');
    index++;

    document.body.appendChild(createButton(i.toString(), i));
    if (index % 3 === 0) {
        document.body.appendChild(document.createElement('br'));
    }
}