module.exports = function (playerAction) {
  let computerAction = 'rock';

  const random = Math.random() * 3;

  if (random < 1) {
    computerAction = 'rock';
  } else if (random > 2) {
    computerAction = 'paper';
  } else {
    computerAction = 'scissor';
  }

  console.log(computerAction);

  if (computerAction === playerAction) {
    console.log('平局');
    return 0;
  } else if (
    (computerAction === 'rock' && playerAction === 'scissor') ||
    (computerAction === 'scissor' && playerAction === 'paper') ||
    (computerAction === 'paper' && playerAction === 'rock')
  ) {
    console.log('你输了');
    return -1;
  } else {
    console.log('你赢了');
    return 1;
  }
};
