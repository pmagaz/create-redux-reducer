export const isReduceFunction = reducer => (
  (reducer === undefined || typeof reducer === 'function')
);