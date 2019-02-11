import React,{Component} from 'react';
import PropTypes from 'prop-types';

//所谓重定向就是其跳转其他地方
export default class Redirect extends Component{
    static contextTypes = {
      history: PropTypes.object
    }
    componentDidMount() {
      this.context.history.push(this.props.to)
    }
    render () {
      return null;
    }
}
