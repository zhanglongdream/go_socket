import * as types from '../action-types.js'

const initState = {
  number: 1
}
export default function (state= initState, action) {
  switch (action.type) {
    case types.ADD:
      return {number: state.number + 1}
      break;
    case types.DECRE:
      return {number: state.number - 1}
    default:
      return state
  }
}
