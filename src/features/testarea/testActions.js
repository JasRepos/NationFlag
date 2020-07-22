import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants';
import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH } from '../async/asyncConstants';


export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const incrementAsync = () => {
  return async dispatch => {
      dispatch({type:ASYNC_ACTION_START})
      await delay(1000)
      dispatch(incrementCounter())
      dispatch({type:ASYNC_ACTION_FINISH})
  }
}

export const decrementAsync = () => {
  return async dispatch => {
      dispatch({type:ASYNC_ACTION_START})
      await delay(1000)
      dispatch({type:DECREMENT_COUNTER})
      dispatch({type:ASYNC_ACTION_FINISH})
  }
}
