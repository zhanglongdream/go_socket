import React, {Component} from 'react'
import {connect} from '../react-redux'
import actions from '../store/action/login'

class Login extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        login: {this.props.number}
        <button onClick={() => {this.props.add()}}>加</button>
         <button onClick={() => {this.props.incre()}}>减</button>
      </div>
      )
    }
}

const mapStateToProps = state => ({
  number: state.login.number
})
export default connect(mapStateToProps, actions)(Login)
