import utils from '../../helpers/utils';
import eatData from '../../helpers/data/eatData';
import './eat.scss';


const eatBuilder = () => {
  const fullness = eatData.getFullScore();
  let domString = '';

  domString += '<h1<i class="fas fa-drumstick-bite"></h1<i></h1>';
  domString += '<h5>Eat</h5>';
  domString += `<h6>Full Score: ${fullness}</h6>`;
  domString += '<button id="healthy-food-btn">Healthy Food</button><button id="unhealthy-food-btn">Unhealthy Food</button>';

  utils.printToDom('eat', domString);
};

export default { eatBuilder };
