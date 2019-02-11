//bindActionCreators主要用来实现action和dispatch的绑定
//
//而我们只要封装一个将需要绑定的action和dispath关联就可以了
export default function(actions, dispath) {
  let newActions = {}
  for (let attr in actions) {
     newActions[attr] = function () {
       dispath(actions[attr].apply(null, arguments))
     }
  }
  return newActions
}

