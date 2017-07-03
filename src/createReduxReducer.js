import { NoFunctionProvided } from './noFunctionProvided';

const createReduxReducer = (actionHandler, initialState) =>
  (state = initialState, action) => {
    
    if (!state || !action) return state;
    const reducer = actionHandler[action.type];
    if (typeof reducer === 'function') return reducer(state, action);
    throw new NoFunctionProvided(action.type);
    
  };

export { createReduxReducer }; 