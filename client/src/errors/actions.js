import { RESET_ERRORS, ADD_ERROR } from './actionTypes'


export const resetErrors = () => {
  return {
    type: RESET_ERRORS
  }
}


export const addError = error => {
  return {
    type: ADD_ERROR,
    payload: {
      error
    }
  }
}