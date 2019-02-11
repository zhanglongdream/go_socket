import React, { Component } from 'react'
import PropTypes from 'prop-types'

//其实本质上Provider就是一个容器，这个容器的作用就是往context中
//注入东西，而我们要做的就是把生成的store防止在context中就可以了
//React.createContext在hooks中确实很好用，但是在class中还是以前的好用啊
export default class Provider extends Component {
  static childContextTypes = {
    store: PropTypes.object.isRequired
  }
  getChildContext() {
    return {
      store: this.props.store
    }
  }
  render() {
    return this.props.children
  }
}
