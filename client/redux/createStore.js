//我们不要这么复杂这里我们简单的实现发布订阅模式即可
function createStore(reducer, preloadedState, enhancer) {
    //我们把redux源码给弄过来，其实就是为了插件可读封装一层东西
    if(enhancer && typeof enhancer == 'function'){
        return enhancer(createStore)(reducer, preloadedState);
    }
   let state = preloadedState //这个就是初始化数据目前没用，但是服务端渲染有用
   let listeners = []

   function getState() {
    return JSON.parse(JSON.stringify(state))
   }

   //这里就是dispath
   function dispatch(action) {
      //这里就是更新对应的state
      state = reducer(state, action)
      //然后触犯listener
      listeners.forEach((listener) => listener());
   }
   //派发了一个动作获取初始值，其实在redux内部是派发一个INIT: @@redux/INIT动作
   //这个写得这么复杂就是为了保证其唯一想
   dispatch({type: "@@redux/INIT+随机数"})
   function subscribe(listener) {
     listeners.push(listener)
     //返回一个取消订阅的函数
     return function() {
       listeners = listeners.filter(item => item != listener)
     }
   }
   return {
      getState,
      dispatch,
      subscribe
   }
}

export default createStore
