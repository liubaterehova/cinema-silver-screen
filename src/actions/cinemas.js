import { createActions } from 'redux-actions';

export const {
  loadCinemasRequest,
  loadCinemasSuccess,
  loadCinemasFailure,
} = createActions(
  'LOAD_CINEMAS_REQUEST',
  'LOAD_CINEMAS_SUCCESS',
  'LOAD_CINEMAS_FAILURE',
);
