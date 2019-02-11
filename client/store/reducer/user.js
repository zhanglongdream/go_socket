import * as types from '../action-types'

const initState = {
  username: "admin"
}

export default function(state=initState, action) {
  switch (action.type) {
    case types.USER_NAME:
      return {username: action.payload.name}
    default:
      return state
  }
}

