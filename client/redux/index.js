import createStore from './createStore'
import combineReducers from './combineReducers'
import bindActionCreators from './bindActionCreators'
import componse from './compose'
import applyMiddleware from './applyMiddleware'

export {
  createStore,
  combineReducers,
  bindActionCreators,
  componse,
  applyMiddleware,
}


//redux这个库说句实在话，它在规范流程方面做的确实好，但是很多东西必须要求框架来给他买单，
//对于react其整体对象更新是没问题的，但是vue要这么做就要死人了还是diff算法有点牛逼
