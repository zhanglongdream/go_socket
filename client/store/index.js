import { createStore, applyMiddleware } from '../redux'
import reducers from './reducer'

function logger({dispatch, getState}) {
  // 首先我们要明白next是什么，这是理解中间件的重点
  return function(next) {
    return function(action) {
      //那么这里我们就可以
      console.log('logger1', getState())
      next(action); //派发动作
      console.log('logger2', getState())
    }
  }
}
const store = createStore(reducers, {},applyMiddleware(logger))
export default store
