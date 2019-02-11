/*

 {

  user: function(state, action) {

  }
 }

 */

//多个合并，然后返回一个函数给dispatch调用
//使用闭包保存所有reducers
export default function combineReducers (reducers) {
  return function(state = {}, action) {
    return Object.keys(reducers).reduce((currentState, key) => {
        currentState[key] = reducers[key](state[key], action)
        return currentState
    }, {})
  }
}

