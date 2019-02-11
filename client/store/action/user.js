import * as types from '../action-types'

export default {
  username(name) {
    return {
      type: types.USER_NAME,
      payload: name
    }
  }
}
