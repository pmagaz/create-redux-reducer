class NoFunctionProvided extends Error {
  constructor(name) {
    super();
    this.name = 'CreateReduxReducer';
    this.message = `Param of ${name} actionHandler is not a reduce function`; 
  }
}

export { NoFunctionProvided };