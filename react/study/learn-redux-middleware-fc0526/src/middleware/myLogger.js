const myLogger = (store) => (next) => (action) => {
  console.log(action);
  console.log(`\t PREV:`, store.getState());

  const result = next(action);
  console.log(`\t NEXT: `, store.getState());
  return result;
};

export default myLogger;
