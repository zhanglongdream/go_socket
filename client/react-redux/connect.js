import React, { Component } from 'react'
import {bindActionCreators} from '../redux';
import PropTypes from 'prop-types'
//其实用过一个高阶组件
//connect()()
//
//const mapStateToProps = state => ({
// user: state.user.username
//})
//
//mapStateToProps主要是得到当前组件中依赖的state gitstate通过对象匹配得到
export default function(mapStateToProps, mapDispatchToProps) {
  return function (SuperComponent) {
    class ConnectComponent extends Component {
      static contextTypes = {
        store: PropTypes.object
      }
      static propTypes = {
        store: PropTypes.object
      }
      constructor(props, context) {
        super(props, context);
        this.store = this.context.store
        //这里是得到依赖本的state
        this.state = mapStateToProps(this.store.getState())
      }
      componentWillMount() {
        //我们要为这个组件依赖的的state注册监听
        this.unSubscribe = this.store.subscribe(() => {
          //只要已更新我们就把值拿来交给react来处理
          this.setState(mapStateToProps(this.store.getState()))
        })
      }
      componentWillUnmount() {
        //同样只要组件要卸载了我们就移除监听
        this.unSubscribe()
      }
      render() {
        //这里肯定是将所有需要使用的属性传入这个组件
        //

        //这里需要注意，mapDispatchToProps官网有两种形式
        //一种是使用对象，其本会调用bindActionCreators
        //另一种是函数，需要出入dispath
        let actions = {}
         if(typeof mapDispatchToProps == 'object') {
            actions = bindActionCreators(mapDispatchToProps, this.store.dispatch)
         } else if(typeof mapDispatchToProps == 'function'){
           actions = mapDispatchToProps(this.store.disaptch);
         }
        return <SuperComponent {...this.state} {...actions}/>
      }
    }
    return ConnectComponent
  }
}
