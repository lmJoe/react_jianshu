import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  Nav,
  Navitem,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchWrapper,
  SearchInfoSwitch,
  SearchInfoTitle,
  SearchInfoItem,
  SearchInfoList} from './style.js'
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store/index';//将当前组件下store引入唯一路径index.js  目的在于引入actionCreators中的操作类型
import { Link } from 'react-router-dom';
class Header extends PureComponent {
  getListArea = () => {
    const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
    //此时的list为一个immutable对象，不支持中括号[]
    const jsList = list.toJS();//使用toJS()方法转换为一个普通的数组
    const pagelist = [];
    if(jsList.length){
      for(let i = ((page-1) * 10);i<page*10;i++){
        pagelist.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }
    if(focused|| mouseIn){
      return (
        <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}>
              {/* ref={()}获取当前标签dom节点 */}
            <i ref={(icon)=>{
              this.spinIcon = icon
            }} className="iconfont spin">&#xe637;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pagelist}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }
  render(){
    const {focused, handleInputFocused, handleInputBlur, list} = this.props;
    return (
      <HeaderWrapper>
      <Link to='/'>
        <Logo />
      </Link>
      <Nav>
        <Navitem className="left active">首页</Navitem>
        <Navitem className="left">下载</Navitem>
        <Link to='/login'>
          <Navitem className="right">登录</Navitem>
        </Link>
        <Navitem className="right"><i className="iconfont">&#xe636;</i></Navitem>
        <SearchWrapper>
          <CSSTransition
          in={focused}
          timeout={200}
          classNames="slide">
            <NavSearch
            className={focused ? 'focused':''}
            onFocus={()=>handleInputFocused(list)}
            onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe637;</i>
          {/* 此处为判断搜索框聚焦时显示，不聚集不显示 */}
          {this.getListArea()}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting"><i className="iconfont">&#xe6e5;</i>写文章</Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
    )
  }
}
//connect接收store的方法
const mapStateToProps = (state) => {
  return {
    //此处为store仓库中的focused，将当前state.focused的值映射到mapStateToProps中
    // focused: state.header.focused,//在项目未引入immutable时
    //此处state.get('header')为当前state通过组件外的store中使用redux-immutable提供的combineReducers()方法对state已经实现了state成为immutable对象的过程，这是需要通过.get()的方法获取到header
    //在项目引入immutable后，需要通过get()的方法获取到state中的focused值
    // focused: state.get('header').get('focused'),//此处获取组件中的focused的方法可以使用下面的方法实现
    focused:state.getIn(['header','focused']),
    list:state.getIn(['header','list']),
    page:state.getIn(['header','page']),
    mouseIn:state.getIn(['header','mouseIn']),
    totalPage:state.getIn(['header','totalPage']),

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //将操作store中数据的方法handleInputFocused写在此处
    handleInputFocused(list) {
      //写一个action类型 方便在reducer文件中做判断
      //在聚焦时做一个ajax的数据请求，现在使用redux-thunk来代替集中在中间件action.js中做ajax请求
      //次数在搜索框聚焦时，可以派发一个由actionCreators创建的获取异步数据的action
      if(list.size === 0){//此处的list.size表示如果===0则请求数据，避免无意义的请求发送
        dispatch(actionCreators.getList());//此处的getList()方法在actionCreators.js文件中创建
      }
      const action = actionCreators.searchFocus();
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    },
    handleMouseEnter() {
      const action = actionCreators.mouseEnter();
      dispatch(action);
    },
    handleMouseLeave(){
      const action = actionCreators.mouseLeave();
      dispatch(action);
    },
    handleChangePage(page,totalPage,spinIcon){
      let origianAngle = spinIcon.style.transform.replace(/[^1-9]/ig,'');
      if(origianAngle){
        origianAngle = parseInt(origianAngle,10)
      }else{
        origianAngle = 0;
      }
      spinIcon.style.transform='rotate('+(origianAngle+360)+'deg)'
      if(page<totalPage){
        dispatch(actionCreators.changePage(page+1));
      }else{
        dispatch(actionCreators.changePage(1));
      }
    }
  }
}
//connect(a,b)
//在做连接的时候需要一个规则，这个规则在mapStateTopProps中（意思：把store里面的数据映射给这个组件，变成组件的props）,mapStateTopProps函数中的state就是store的数据,如果想要对store数据做修改，使用mapDispatchToProps
//此处Header是一个UI组件，在使用connect把数据和业务逻辑相结合时，返回的内容就是一个容器组件；
export default connect(mapStateToProps,mapDispatchToProps)(Header);
//此时header组件为一个无状态组件，无状态组件可以将header声明为一个函数,此时性能会比较高