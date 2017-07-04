class NoFunctionProvided extends Error {
  /* istanbul ignore next */
  constructor(name) {
    super();
    this.name = 'CreateReduxReducer';
    this.message = `Param of ${name} actionHandler is not a reduce function`; 
  }
}

class NoActionHandlersProvided extends Error {
  /* istanbul ignore next */
  constructor() {
    super();
    this.name = 'NoActionHandlersProvided';
    this.message = 'You should provide an actionHandler object'; 
  }
}

export { NoFunctionProvided, NoActionHandlersProvided };