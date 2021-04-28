import React from 'react';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  Nav,
  Navitem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper} from './style.js'
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store/index';//将当前组件下store引入唯一路径index.js  目的在于引入actionCreators中的操作类型
const Header = (props) => {
  return (
    <HeaderWrapper>
    <Logo></Logo>
    <Nav>
      <Navitem className="left active">首页</Navitem>
      <Navitem className="left">下载</Navitem>
      <Navitem className="right">登录</Navitem>
      <Navitem className="right"><i className="iconfont">&#xe636;</i></Navitem>
      <SearchWrapper>
        <CSSTransition
        in={props.focused}
        timeout={200}
        classNames="slide">
          <NavSearch
          className={props.focused ? 'focused':''}
          onFocus={props.handleInputFocused}
          onBlur={props.handleInputBlur}
          ></NavSearch>
        </CSSTransition>
        <i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe637;</i>
      </SearchWrapper>
    </Nav>
    <Addition>
      <Button className="writting"><i className="iconfont">&#xe6e5;</i>写文章</Button>
      <Button className="reg">注册</Button>
    </Addition>
  </HeaderWrapper>
  )
}
//connect接收store的方法
const mapStateToProps = (state) => {
  return {
    //此处为store仓库中的focused，将当前state.focused的值映射到mapStateToProps中
    focused: state.header.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //将操作store中数据的方法handleInputFocused写在此处
    handleInputFocused() {
      //写一个action类型 方便在reducer文件中做判断
      const action = actionCreators.searchFocus();
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    }
  }
}
//connect(a,b)
//在做连接的时候需要一个规则，这个规则在mapStateTopProps中（意思：把store里面的数据映射给这个组件，变成组件的props）,mapStateTopProps函数中的state就是store的数据,如果想要对store数据做修改，使用mapDispatchToProps
//此处Header是一个UI组件，在使用connect把数据和业务逻辑相结合时，返回的内容就是一个容器组件；
export default connect(mapStateToProps,mapDispatchToProps)(Header);
//此时header组件为一个无状态组件，无状态组件可以将header声明为一个函数,此时性能会比较高