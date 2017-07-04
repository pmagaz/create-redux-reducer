import { NoFunctionProvided, NoActionHandlersProvided } from './errors';

const createReduxReducer = (actionHandler, initialState) =>
  (state = initialState, action) => {

    if (!state || !action) return state;
    if (!actionHandler) throw new NoActionHandlersProvided();
    
    const reducer = actionHandler[action.type];

    if (!reducer) return state;
    else if (typeof reducer === 'function') return reducer(state, action);
    throw new NoFunctionProvided(action.type);
    
  };

export { createReduxReducer };