const defaultState = {
  cash: 0,
};

export const SYNC_ADD_CASH = "SYNC_ADD_CASH";
export const SYNC_GET_CASH = "SYNC_GET_CASH";
export const SYNC_INC_COUNT = "SYNC_INC_COUNT";
export const SYNC_DEC_COUNT = "SYNC_DEC_COUNT";
export const ASYNC_INC_COUNT = "ASYNC_INC_COUNT";
export const ASYNC_DEC_COUNT = "ASYNC_DEC_COUNT";

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SYNC_INC_COUNT:
      return { ...state, cash: state.cash + 1 };
    case SYNC_DEC_COUNT:
      return { ...state, cash: state.cash - 1 };
    case SYNC_ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case SYNC_GET_CASH:
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

export const addCashCreator = (payload) => ({ type: SYNC_ADD_CASH, payload });
export const getCashCreator = (payload) => ({ type: SYNC_GET_CASH, payload });

export const incCountCreator = () => ({ type: SYNC_INC_COUNT });
export const decCountCreator = () => ({ type: SYNC_DEC_COUNT });

export const asyncIncCountCreator = () => ({ type: ASYNC_INC_COUNT });
export const asyncDecCountCreator = () => ({ type: ASYNC_DEC_COUNT });
