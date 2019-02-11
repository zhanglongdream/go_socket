import compose from './compose'


//我们在不写中间件是这么创建storecreateStore(reducer);
//用中间件呢 applyMiddleware(logger)(createStore)(reducer);
//为什么要这么写呢，其实如果了解koa的设计理念的话也就很好理解了，太多了这里就不介绍了
//
//
//这里说一下为什么是三个参数本质上中间件就是对store的一层包装
//所以我我们需要中间件，createStore, 以及reducers
//
//既然是包装那么我们有两个很重要的东西是需要知道的，一个是获取值的途径一个数更新值的时机
export default function(...middleWares) {
  return function(createStore) {
    return function(reducers) {
      let store = createStore(reducers)
      let dispatch;
      //延续redux的命名传统
      //而这里就是为了得到没使用中间件之前的两个属性
      let middlewareAPI = {
        getState: store.getState,
        dispatch: action => dispatch(action)
      }
      //我们这里对每个middleWare进行加工，使其能够获取getState， dispatch
      middleWares = middleWares.map(middleware => middleware(middlewareAPI))
      //然后我们需要做的就是在dispatch的时候执行响应的中间件
      dispatch = compose(...middleWares)(store.dispatch);
      return { ...store,
        dispatch
      };
    }
  }
}
/*

 同样的当我们写中间的时候需要什么呢
 第一个肯定是获取状态和派发动作，
 然后还需要调用下一个中间件，然后还需要action
 */

//这个为什么这么写呢？规范编程的目的是什么是同理
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

//我们看一下怎么执行异步的，首先我们要知道，我们不可能在reduer中执行，因为一旦reduer
//执行，那么就是交给了redux而redux是同步的，那么想要拦截就要在action触发dispatch的时候
//
//
//我们以一个action为例
//add() {
//  return function() {
//    setTime(() => {
//       dispatch()
//    })
//  }
//}
//这里的action是一个函数而我们需要做的就是在action中自动触发dispatch，
//这里有很重要的一点redux中间件本质上就是对dispatch一层包装
//而在middle中其实给我们暴露了dispatch,getState
let thunk = ({dispatch,getState})=>next=>action=>{
    if(typeof action == 'function'){
        action(dispatch,getState);
    }else{
        next(action);
    }
}
//中间件比较复杂说的多了一点，但是要明白本质，已经要明白需要思考的问题
