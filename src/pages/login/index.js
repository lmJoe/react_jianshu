import React,{ PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { LoginWrapper,LoginBox,Input,Button } from './style';
import {actionCreators} from './store';
class Login extends PureComponent {
  render() {
    const {loginStates} = this.props;
    if(!loginStates){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="手机号或邮箱" ref={(input)=>{this.account = input}}/>
            <Input placeholder="密码" type="password" ref={(input)=>{this.password = input}}/>
            <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      // Redirect的组件为重定向
      return <Redirect to='/' />
    }
    
  }
  componentDidMount() {
    
  }
}
const mapState = (state) => ({
  loginStates:state.getIn(['login','login'])
})
const mapDispatch = (dispatch) =>({
  login(accountElm,passwordElm){
    dispatch(actionCreators.login(accountElm.value,passwordElm.value))
    console.log(accountElm.value,passwordElm.value);
  }
})
export default connect(mapState,mapDispatch)(Login);