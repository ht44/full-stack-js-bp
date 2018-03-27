import {
  TEST_REQUEST_REQUEST,
  TEST_REQUEST_SUCCESS,
  TEST_REQUEST_FAILURE
} from './actionTypes';


import { addError } from '../errors';

import {
  xhrGetPromise
} from '../utils/ajax';

export const testRequest = endpoint => {
  return dispatch => {
    dispatch(testRequestRequest());
    xhrGetPromise(endpoint).then(data => {
      dispatch(testRequestSuccess(JSON.parse(data)));
    }).catch(error => {
      dispatch(testRequestFailure(JSON.parse(error)));
      dispatch(addError(error));
    })
  }
};

export const testRequestRequest = () => {
  return {
    type: TEST_REQUEST_REQUEST
  };
};

export const testRequestSuccess = data => {
  return {
    type: TEST_REQUEST_SUCCESS,
    payload: {
      data
    }
  };
};

export const testRequestFailure = (error) => {
  return {
    type: TEST_REQUEST_FAILURE,
    payload: {
      error
    }
  };
};