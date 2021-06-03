import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper,LoginBox,Input,Button } from './style';
class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="手机号或邮箱" />
          <Input placeholder="密码" />
          <Button>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
  componentDidMount() {
    
  }
}
const mapDispatch = (dispatch) =>({
  
})
const mapState = (state) => ({
 
})
export default connect(mapState,mapDispatch)(Login);