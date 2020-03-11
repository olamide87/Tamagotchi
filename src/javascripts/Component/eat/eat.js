import utils from '../../helpers/utils';
import eatData from '../../helpers/data/eatData';

// create a private variable called full
// create 2 buttons(event listeners with 2 separate functions)
// 1 of the buttons should add 10 to full when pressed and subtract 3 from full when pushed
// create card through the dom string that prints the name fullness score, and the two buttons
//


const eatBuilder = () => {
  const fullness = eatData.getFullScore();
  let domString = '';

  domString += '<h1><i class="fas fa-cookie-bite"></i></h1>';
  domString += '<h5>Eat</h5>';
  domString += `<h6>Full Score: ${fullness}</h6>`;
  domString += '<button id="healthy-food-btn">Healthy Food</button><button id="unhealthy-food-btn">Unhealthy Food</button>';

  utils.printToDom('eat', domString);
};

export default { eatBuilder };
