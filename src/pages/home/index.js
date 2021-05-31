import React,{ Component } from 'react';
import { connect } from 'react-redux';//使当前组件与store做连接
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight,BackTop} from './style';
import { actionCreators } from './store';
class Home extends Component {
  handleScrollTop(){
    window.scrollTo(0,0);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0184545b76e010a801218d328f516a.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624180626&t=38b3e3edb86d749c5d4dcc6d45494110" alt=""/>
          <Topic></Topic>
          <List></List>
          </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
      </HomeWrapper>
    )
  }
  //在render渲染完毕之后执行此周期中的方法
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  //此处为组件即将被销毁的时候执行
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}
const mapState = (state) =>({
  showScroll:state.getIn(['home','showScroll']),
})
//此处的mapDispatch属于容器组件，在容器组件中处理js逻辑，而不是在上面componentDidMount中的UI组件处理
const mapDispatch = (dispatch) => ({
  changeHomeData () { 
    //通过actionCreators创建一个action
    const action = actionCreators.getHomeInfo();//此处action不是一个对象，而是一个函数
    dispatch(action)
  },
  changeScrollTopShow(e) {
    if(document.documentElement.scrollTop>200){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})
export default connect(mapState,mapDispatch)(Home);//暂时用不到store中的数据则传null,但是需要往store中传值改变store