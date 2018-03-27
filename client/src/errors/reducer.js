import { RESET_ERRORS, ADD_ERROR } from './actionTypes';

export default (state = [], action) => {
  switch (action.type) {

    case RESET_ERRORS:
      return [];

    case ADD_ERROR:
      return state.concat(action.payload.error);

    default:
      return state;

  }

};