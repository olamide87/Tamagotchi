import eat from './Component/eat/eat';
import eatData from './helpers/data/eatData';
import play from './Component/play/play';
import playData from './helpers/data/playData';
import fight from './Component/fight/fight';
import fightData from './helpers/data/fightData';

const addToFullScore = () => {
  eatData.setFullScore(10);
  eat.eatBuilder();
};

const subFromFullScore = () => {
  eatData.setFullScore(-3);
  eat.eatBuilder();
};

const addSuperFun = () => {
  playData.setFunScore(50);
  play.playBuilder();
};

const addSlightlyFun = () => {
  playData.setFunScore(2);
  play.playBuilder();
};

const addToStrengthScore = () => {
  fightData.setStrengthScore(1);
  fight.fightBuilder();
};

const subFromStrengthScore = () => {
  fightData.setStrengthScore(-10);
  fight.fightBuilder();
};

const buttonEvents = () => {
  $('#eat').on('click', '#healthy-food-btn', addToFullScore);
  $('#eat').on('click', '#unhealthy-food-btn', subFromFullScore);
  $('#play').on('click', '#super-fun-btn', addSuperFun);
  $('#play').on('click', '#slightly-fun-btn', addSlightlyFun);
  $('#fight').on('click', '#run-away-btn', addToStrengthScore);
  $('#fight').on('click', '#violence-btn', subFromStrengthScore);
};

const quad = () => {
  eat.eatBuilder();
  play.playBuilder();
  fight.fightBuilder();
};

const init = () => {
  buttonEvents();
  quad();
};

init();
