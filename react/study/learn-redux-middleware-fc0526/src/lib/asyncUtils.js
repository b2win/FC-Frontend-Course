export const handleAsyncActions = (type, key, keepData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type: // GET_POSTS 또는 GET_POST
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null),
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

export const handleAsyncActionsById = (type, key, keepData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    const id = action.meta;
    switch (action.type) {
      case type: // GET_POSTS 또는 GET_POST
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.loading(
              keepData ? state[key][id] && state[key][id].data : null
            ),
          },
        };
      case SUCCESS: // 맨 위의 비구조화 문법으로 인한 `${type}_SUCCESS` 값이랑 같음!
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.success(action.payload),
          }, // [key] 부분엔 posts 또는 post
        };
      case ERROR:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.error(action.payload),
          }, // [key] 부분엔 posts 또는 post
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

const defaultIdSelector = (param) => param;

export const createPromiseThunkById = (
  type,
  promiseCreator,
  idSelector = defaultIdSelector
) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (param) => async (dispatch) => {
    const id = idSelector(param);
    dispatch({ type });
    try {
      const payload = await promiseCreator(param);
      dispatch({
        type: SUCCESS,
        payload,
        meta: id,
      });
    } catch (e) {
      dispatch({
        type: ERROR,
        payload: e,
        error: true,
        meta: id,
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
