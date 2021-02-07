/*
5. promise를 async/await로 변경하기 (10점)

아래의 주석처리된 promise 예제의 동작을 그대로 구현하는 async/await 예제를 만들어주세요.
코드 작성이라는 주석이 적힌 부분에만 코드를 작성해주시면 됩니다.
*/

// promise
// function increaseAndPrint(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const value = n + 1;
//       if (value === 5) {
//         const error = new Error();
//         error.name = 'ValueIsFiveError';
//         reject(error);
//         return;
//       }
//       console.log(value);
//       resolve(value);
//     }, 1000);
//   });
// }

// increaseAndPrint(0)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .catch(e => {
//     console.error(e);
//   });

// async/await
function delay(n) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(n + 1);
    }, 1000)
  );
}

async function makeError() {
  const error = new Error();
  error.name = "ValueIsFiveError";
  throw error;
}

async function increaseAndPrint(n) {
  try {
    let value = await delay(n);
    // 코드 작성
    await delay(0);
    console.log(value);
    await delay(1000);
    console.log(value + 1);
    await delay(2000);
    console.log(value + 2);
    await delay(3000);
    console.log(value + 3);
    await delay(4000);

    await makeError();

  } catch (e) {
    console.error(e);
  }
}

increaseAndPrint(0);
