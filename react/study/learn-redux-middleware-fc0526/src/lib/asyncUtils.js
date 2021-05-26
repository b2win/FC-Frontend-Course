export const handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type: // GET_POSTS 또는 GET_POST
        return {
          ...state,
          [key]: reducerUtils.loading(),
        };
      case SUCCESS: // 맨 위의 비구조화 문법으로 인한 `${type}_SUCCESS` 값이랑 같음!
        return {
          ...state,
          [key]: reducerUtils.success(action.payload), // [key] 부분엔 posts 또는 post
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload), // [key] 부분엔 posts 또는 post
        };
      default:
        return state;
    }
  };
};

export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (param) => async (dispatch) => {
    dispatch({ type });
    try {
      const payload = await promiseCreator(param);
      dispatch({
        type: SUCCESS,
        payload,
      });
    } catch (e) {
      dispatch({
        type: ERROR,
        payload: e,
        error: true,
      });
    }
  };
};

export const reducerUtils = {
  initial: (data = null) => ({
    loading: false,
    data,
    error: null,
  }),
  loading: (prevState = null) => ({
    data: prevState,
    loading: true,
    error: null,
  }),
  success: (data) => ({
    data,
    loading: false,
    error: null,
  }),
  error: (error) => ({
    data: null,
    loading: false,
    error,
  }),
};
