import React, {Component} from 'react'
import PropTypes from 'prop-types'

//这里使用唯一入口push来更新视图
export default class Link extends Component {
  static contextTypes = {
    history: PropTypes.object
  }
  render() {
    return <a onClick={() => {
      this.context.history.push(this.props.to)
    }}>{this.props.children}</a>
  }
}
