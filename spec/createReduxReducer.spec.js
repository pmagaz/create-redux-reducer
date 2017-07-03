import { expect } from 'chai';
import { createReduxReducer } from '../src/createReduxReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';


describe('CreateReduxReducer', () => {
  it('should return a right reducer function', () => {

    const actionHandlers = { TEST: reducerFunction };
    const expectedState = { id: 1 };
    const expectedAction = { type: 'TEST' }; 
    const reducer = createReduxReducer(actionHandlers);

    reducer({ id: 1 }, { type: 'TEST' });

    function reducerFunction(state, action) {
      expect(state).deep.equal(expectedState);
      expect(action).deep.equal(expectedAction);
      return { ...state };
    }

  });

  it('should provide a reducer initial state', () => {

    const actionHandlers = { TEST: reducerFunction };
    const expectedState = { initialState: true };
    const expectedAction = { type: 'TEST', payload: { id: 22 } }; 
    const reducer = createReduxReducer(actionHandlers, expectedState);    
    const rootReducer = combineReducers({
      reducer
    });

    const store = createStore(rootReducer, { });
    store.dispatch(expectedAction);

    const reducerFunction = (state, action) => {
      expect(state).deep.equal(expectedState);
      expect(action).deep.equal(expectedAction);
      return { ...state };
    }

  });

  it('should return state with a non function', () => {

    const actionHandlers = { TEST: reducerFunction, TEST_2: 22 };
    const expectedState = { initialState: true };
    const expectedAction = { type: 'TEST_2', payload: { id: 22 } }; 
    
    const reducer = createReduxReducer(actionHandlers, expectedState); 
    const rootReducer = combineReducers({
      reducer
    }); 
    const store = createStore(rootReducer, { });
    store.dispatch(expectedAction);

    function reducerFunction(state, action) {
      expect(state).deep.equal(expectedState);
      expect(action).deep.equal(expectedAction);
      return { ...state };
    }

  });
});