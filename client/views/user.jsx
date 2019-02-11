import React, {Component} from 'react'
import { connect  } from '../react-redux'
import actions from '../store/action/user'

class User extends Component {
  render() {
    return (
      <div>user: {this.props.user} <button onClick={()=>this.props.username({name: 'long'})}>名字</button></div>
      )
    }
}

const mapStateToProps = state => ({
  user: state.user.username
})

export default connect(mapStateToProps, actions)(User)
