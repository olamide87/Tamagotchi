// create a private variable called full
// create 2 buttons(event listeners with 2 separate functions)
// 1 of the buttons should add 10 to full when pressed and subtract 3 from full when pushed
// create card through the dom string that prints the name fullness score, and the two buttons
//

import utils from '../../helpers/utils.js';

let full = 100;

const healthyFood = () => {
  if (full <= 100) {
    full += 10;
    document.getElementById('bar').value = full;
  }
};

const junkFood = () => {
  if (full >= 3) {
    full -= 3;
    document.getElementById('bar').value = full;
  }
};

const printProgress = () => {
  let domString = '';
  domString += '<div>';
  domString += '<progress id="bar" value="100" min="0" max="100" style="background-color:green"></progress>';
  domString += '<h3>Eat</h3>';
  domString += '<div>';
  domString += '<button id="bad">junkFood</button>';
  domString += '<button id="good">healthyFood</button>';
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('eat', domString);
};

const eventListener = () => {
  document.getElementById('bad').addEventListener('click', junkFood);
  document.getElementById('good').addEventListener('click', healthyFood);
};


export default {
  printProgress, eventListener,
};
