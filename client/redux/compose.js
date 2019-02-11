//compose这个概念其实存在很久了，这里就不说了


export default function componse(...fn) {
  if(fn.length==1) {
    return fn[0];
  }
   return fn.reduce((a, b) => (...args) => a(b(...args)) )
}


//这个大概说下什么意思
//这个是有人给作者提的issue
//
//componse(fn1, fn2)
//那么执行顺序就是fn2 -> fn1

// 其实这里最不好理解的应该是最后一个函数了
//[1,2,3].reduce((a, b) => a+b)
//我们只需要把第一个返回的值理解是一个函数这个函数也没什么了
