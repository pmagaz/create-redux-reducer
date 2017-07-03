
import { ReduceFunctionError } from './errors';
import { isReduceFunction } from './isReduceFunction';

const createReduxReducer = (actionHandler, initialState) =>
  (state = initialState, action) => {

    const reducer = actionHandler[action.type];
    if (!reducer) return state;
    else if (isReduceFunction(reducer)) return reducer(state, action);
    throw new ReduceFunctionError(action.type);
  };

export { createReduxReducer }; 