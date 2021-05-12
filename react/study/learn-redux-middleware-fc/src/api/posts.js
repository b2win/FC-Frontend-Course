const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: "리덕스 미들웨어를 배우는 중",
    body: "리덕스 미들웨어를 직접 만들어 보는 중",
  },
  {
    id: 2,
    title: "redux-thunk를 사용하는 중",
    body: "redux-thunk를 사용해서 비동기 작업을 처리 하는중",
  },
  {
    id: 3,
    title: "redux-saga도 사용할 예정",
    body: "redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배울 예정",
  },
];

export const getPost = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
