class NoFunctionProvided extends Error {
  /* istanbul ignore next */
  constructor(name) {
    super();
    this.name = 'CreateReduxReducer';
    this.message = `Param of ${name} actionHandler is not a reduce function`; 
  }
}

export { NoFunctionProvided };