function playGame(callback) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      callback(null, 'win');
    } else {
      callback(new Error('lose'));
    }
  }, 500);
}

// 在异步串行任务的情况下代码会变得非常的层层叠叠

playGame((err, res) => {
  if (err) {
    console.log('lost at 1st');
    return;
  }
  playGame((err, res) => {
    if (err) {
      console.log('lost at 2nd');
      return;
    }
    playGame((err, res) => {
      if (err) {
        console.log('lost at 3rd');
        return;
      }
      console.log('happy');
    });
  });
});
