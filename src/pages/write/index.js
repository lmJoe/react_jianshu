import React,{ PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
class Write extends PureComponent {
  render() {
    const {loginStates} = this.props;
    if(loginStates){
      return (
        <div>写文章页面</div>
      )
    }else{
      // Redirect的组件为重定向
      return <Redirect to='/login' />
    }
    
  }
  componentDidMount() {
    
  }
}
const mapState = (state) => ({
  loginStates:state.getIn(['login','login'])
})
export default connect(mapState,null)(Write);