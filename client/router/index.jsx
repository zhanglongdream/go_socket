import React from 'react'
import { Route, Redirect } from '../react-router-dom'
import Login from "../views/login.jsx"
import User from '../views/user.jsx'

export default () => [
  <Route path='/'  exact render={() => <Redirect to="/login" />}  key="first" />,
  <Route path='/login' component= {Login} key="login" />,
  <Route path='/user' component= {User} key="user" />
]
