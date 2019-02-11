import React, {Component} from 'react'
import PropTypes from 'prop-types'


//所谓Switch就是选中那个Route而选中的条件是什么当然是其prop的path以及上面的属性
export default class Switch extends Component {
  static contextTypes = {
    location: PropTypes.object
  }
  render() {
    let { pathname } = this.context.location
    let children = this.props.children
    for (let i = 0; i < children.length; i++) {
       let {path} = children[i].props
       if (path === pathname) {
         return children
       }
    }
    return null
  }
}
