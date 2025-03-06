// let message: string = 'Hello World';
// console.log(message);

// let currentnum = 0;
// let SEED = 0;
// let numberDisplay = document.createElement('p')
// let content: HTMLElement[] = [numberDisplay];


// numberDisplay.textContent = '0';
// numberDisplay.style.marginLeft = '85px';
// document.body.appendChild(numberDisplay);
// let br = document.createElement('br')
// document.body.appendChild(br);
// let mode = "add";

// let addButton = document.createElement('button')
// addButton.textContent = "+";
// addButton.style.width = '50px';
// addButton.style.height = '50px';
// addButton.style.margin = '5px';
// addButton.addEventListener('click', () => {
//     mode = "add";
// });

// document.body.appendChild(addButton);
// content.push(addButton);
// let clearButton = document.createElement('button')
// clearButton.textContent = "C";
// clearButton.style.width = '50px';
// clearButton.style.height = '50px';
// clearButton.style.margin = '5px';
// clearButton.addEventListener('click', () => {
//     currentnum = 0;
//     numberDisplay.textContent = currentnum.toString();
// });

// document.body.appendChild(clearButton);
// content.push(clearButton);
// let subButton = document.createElement('button')
// subButton.textContent = "-";
// subButton.style.width = '50px';
// subButton.style.height = '50px';
// subButton.style.margin = '5px';
// subButton.addEventListener('click', () => {
//     mode = "sub";
// });

// document.body.appendChild(subButton);
// content.push(subButton);
// document.body.appendChild(br);



// function createButton(name, buttonNum) {
//     let button = document.createElement('button');
//     button.textContent = name;
//     button.style.width = '50px';
//     button.style.height = '50px';
//     button.style.margin = '5px';
//     button.addEventListener('click', () => {
//         if (mode === "add") {
//             currentnum += buttonNum;
//         }

//         else {
//             currentnum -= buttonNum;
//         }

//         numberDisplay.textContent = currentnum.toString();
//     });

//     return button

// };
// let index = 0;

// for (let i = 9; i > 0; i--) {
//     console.log('skibid');
//     index++;

//     let newItem = createButton(i.toString(), i);
//     document.body.appendChild(newItem);
//     content.push(newItem);
//     if (index % 3 === 0) {
//         document.body.appendChild(document.createElement('br'));
//     }
// }

// let zeroButton = (createButton('0', 0));
// zeroButton.style.marginLeft = '65px';
// document.body.appendChild(zeroButton);
// content.push(zeroButton);

// for (index = 1; index < content.length; index++) {
//     let currentItem = content[index];
//     currentItem.style.alignSelf = '';
//     currentItem.style.position = 'absolute';
//     currentItem.style.top = "10%";
//     currentItem.style.left = "50%";
//     currentItem.style.transform = 'translate(-50%, 50%);'
// };