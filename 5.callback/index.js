// step 1
// function playGame(callback) {
//   setTimeout(() => {
//     callback('win');
//   }, 500);
// }

// playGame(res => {
//   console.log(res);
// });

// step 2
// 可以看到错误是没有被 try catch 捕获到的，反而错误被抛到了全局。
// 在 Node.js 中，全局错误是非常严重的，会导致程序崩溃。
// 原因就是 调用栈 和 事件循环 ，每个事件循环都是一个新的调用栈。
// 在一个异步任务(setTimeout)里抛出一个错误，是不能被外面的 try catch 捕获的。
// try catch只能抓到一个调用堆栈内，即一个事件循环里的错误
function playGame(callback) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      callback('win');
    } else {
      throw new Error('lose');
    }
  }, 500);
}

try {
  playGame(res => {
    console.log(res);
  });
} catch (error) {
  console.log('sad', error);
}

// step 3
// Node.js 有很多的回调函数，我们在写回调函数的时候，不可能理解所有回调函数的参数有哪几种格式
// 因此，Node.js 官方就提出了一种写回调函数的规范：所有的 error 都放在第一个参数，其它参数是结果。
// 如果有第一个参数，那么就是错误，如果没有，那么就是结果。
// function playGame(callback) {
//   setTimeout(() => {
//     if (Math.random() < 0.5) {
//       callback('win');
//     } else {
//       callback(new Error('lose'));
//     }
//   }, 500);
// }

// playGame(res => {
//   if (res instanceof Error) {
//     return console.log('sad');
//   }
//   console.log('happy');
// });

// step 4
// function playGame(callback) {
//   setTimeout(() => {
//     if (Math.random() < 0.5) {
//       callback(null, 'win');
//     } else {
//       callback(new Error('lose'));
//     }
//   }, 500);
// }

// playGame(err => {
//   if (err) {
//     return console.log('sad');
//   }
//   console.log('happy');
// });
