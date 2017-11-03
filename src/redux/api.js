/* @flow */

import type { Store, Dispatch, Action } from '../types';

export const CALL_API = 'Call API';

export default (store: Store) => (next: Dispatch) => (action: Action): Promise<any> => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { endpoint, types } = callAPI;

  const [requestType, successType, failureType] = types;

  next({
    type: requestType,
  });

  return fetch(endpoint).then(response => response.json()).then(
  (response) => {
    next({
      response,
      type: successType,
    });

    return { state: store.getState(), response };
  },
  (error) => {
    next({
      error,
      type: failureType,
    });

    return { state: store.getState(), error };
  }
  );
};
