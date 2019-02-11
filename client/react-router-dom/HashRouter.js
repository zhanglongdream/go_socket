import React, {Component} from 'react'
import PropTypes from 'prop-types'



export default class HashRouter extends Component{
    static childContextTypes = {
      history: PropTypes.object,
      location: PropTypes.object,
    }
    constructor(props){
        super(props);
        this.state = {location:{state:{},pathname:window.location.hash.slice(1)||'/'}};
    }
    getChildContext(){
        return {
            location:this.state.location,
            history:{
                push: (path)=>{
                  //push的时候一劳永逸直接改变hash然后调用setState使react更新视图
                    if(typeof path == 'object'){
                        let {pathname,state} = path;
                        this.setState({location:{...that.state.location,state}},()=>{
                            window.location.hash = pathname;
                        });
                    }else{
                        window.location.hash = path;
                    }
                }
            }
        }
    }
    componentDidMount(){
        window.location.hash =  window.location.hash||'/';
        let render = ()=>{
            this.setState({location:{...this.state.location,pathname:window.location.hash.slice(1)||'/'}});
        }
        //这里就是监听hash的变化
        window.addEventListener('hashchange',render);
    }
    render(){
        return this.props.children
    }
}
