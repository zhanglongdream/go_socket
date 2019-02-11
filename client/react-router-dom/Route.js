import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Route extends Component {
  static contextTypes = {
    history: PropTypes.object,
    location: PropTypes.object
  }
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    let { component:Component, render, path, exact } = this.props
    let { location , history }  = this.context
    //其实这个情况很多的，且最好使用正则验证， path-to-regexp
    console.log(location.pathname, path)
    if (location.pathname === path) {
      if (Component) {
        return <Component {...this.context}/>
      } else if (render) {
         return render(this.context);
      }
    } else {
      return null;
    }

  }
}
