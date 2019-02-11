import React, {Component} from 'react'
import { Link } from '../react-router-dom'
import Routes from "../router/index"
class App extends Component {
  render() {
    return [
            <div key="banner">
        <Link to="/">首页</Link>,
        <Link to="/user">详情页</Link>
      </div>,
         <Routes key="route"/>
      ]
    }
}

export default App
