import {
  TEST_REQUEST_REQUEST,
  TEST_REQUEST_SUCCESS,
  TEST_REQUEST_FAILURE
} from './actionTypes';

const initialState = {
  sample: {
    text: '',
    isTestingRequest: false,
    testRequestError: null
  }
};

export default (state = initialState, action) => {

  switch (action.type) {

    case TEST_REQUEST_REQUEST:
      return {
        ...state,
        sample: {
          ...state.sample,
          isTestingRequest: true
        }
      };


    case TEST_REQUEST_SUCCESS:
      return {
        ...state,
        sample: {
          text: action.payload.data,
          isTestingRequest: false,
          testRequestError: null
        }
      };

    case TEST_REQUEST_FAILURE:
      return {
        ...state,
        sample: {
          ...state.sample,
          isTestingRequest: false,
          testRequestError: action.payload.error.message
        }
      };

    default:
      return state;

  }

};