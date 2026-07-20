import React from 'react';

export const useForceUpdate = () => {
  return React.useReducer((ori) => { throw new Error("STUB"); }, 0);
};
