import { expect } from 'chai';
import { createReduxReducer } from '../src/createReduxReducer';

describe('CreateReduxReducer', () => {
 
  it('should return a correct reduce function', () => {

    const reducerFunction = (state, action) => {
      expect(state).deep.equal(expectedState);
      expect(action).deep.equal(expectedAction);
      return { ...state };
    };

    const actionHandlers = { TEST: reducerFunction };
    const expectedState = { initialState: true };
    const expectedAction = { type: 'TEST', payload: { id: 22 } }; 
    const reducer = createReduxReducer(actionHandlers, expectedState);    
    
    reducer(expectedState, expectedAction);

  });
  
  it('should return state with incorrect action type', () => {
  const reducerFunction = (state, action) => {
      expect(state).deep.equal(expectedState);
      expect(action).deep.equal(expectedAction);
      return { ...state };
    };

    const actionHandlers = { TEST: reducerFunction };
    const expectedState = { initialState: true };
    const expectedAction = { type: 'FOO', payload: { id: 22 } }; 
    const reducer = createReduxReducer(actionHandlers, expectedState);    
    
    reducer(expectedState, expectedAction);

  });

    it('should return state without state and action', () => {
      const reducerFunction = (state, action) => {
      expect(state).deep.equal(expectedState);
      expect(action).deep.equal(expectedAction);
      return { ...state };
    };

    const actionHandlers = { TEST: reducerFunction };
    const expectedState = { initialState: true };
    const expectedAction = { type: 'FOO', payload: { id: 22 } }; 
    const reducer = createReduxReducer(actionHandlers, expectedState);    
    
    reducer();

  });

   it('should return state without action or state', () => {
    const actionHandlers = { TEST: reducerFunction };
    const expectedState = { id: 1 };
    const expectedAction = { type: 'TEST' }; 
    const reducer = createReduxReducer(actionHandlers);

    reducer(expectedState, expectedAction);

    function reducerFunction(state, action) {
      expect(state).deep.equal(expectedState);
      expect(action).deep.equal(expectedAction);
      return { ...state };
    }

  });

    it('should throw Error with no actionhandlers provided', (done) => {
    const actionHandlers = { TEST: 22 };
    const expectedState = { initialState: true };
    const expectedAction = { type: 'TEST', payload: { id: 22 } }; 
    const reducer = createReduxReducer(null);    
    
    expect(() => reducer(expectedState, expectedAction)).to.throw(Error);
    done();

  });

  it('should throw Error with non function parameter', (done) => {
    const actionHandlers = { TEST: 22};
    const expectedState = { initialState: true };
    const expectedAction = { type: 'TEST', payload: { id: 22 } }; 
    const reducer = createReduxReducer(actionHandlers, expectedState);    
    
    expect(() => reducer(expectedState, expectedAction)).to.throw(Error);
    done();

  });
});