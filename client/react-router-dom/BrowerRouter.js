import React, {Component} from 'react'
import PropTypes from 'prop-types'

//其实和hash差不多但是呢，这里有点问题
export default class BrowserRouter extends Component {
  static childContextTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
      location: {
        pathname: window.location.pathname
      }
    };
    this.Obj = {}
  }

  getChildContext() {
    return {
      history: {
        location: this.state.location,
        go: function(n) {
          return window.history.go(n)
        },
        goBack: function() {
          return window.history.back()
        },
        push: (path, state)=>{
          window.history.pushState(this.Obj, state ? state : "", path)
          this.changePathName()
        },
        replace: function(path, state) {
          window.history.replaceState(this.Obj, state ? state : "", path)
          this.changePathName()
        }
      },
      location: this.state.location
    }
  }

  changePathName() {
    this.setState({
      location: {...this.state.location, pathname: window.location.pathname}
    })
  }

  componentDidMount() {
     window.addEventListener('popstate', () => {
       this.setState({
         location: {...this.state.location, pathname: window.location.pathname}
       })
     })
  }

  render() {
    return this.props.children
  }
}
