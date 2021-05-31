//引入immutable.je防止store中的state值无意间被改动而无法定位
import { fromJS } from 'immutable';
import * as constants from './constants';
//第二步：把reducer的值传给store.js中的createStore
const defaultState = fromJS({ //引入fromJS 可以将js对象转化为immutable对象 
  topicList:[],
  articleList:[],
  recommendList:[],
  writerList:[],
  articlePage:1,
  showScroll:false,
});
//优化精简switch语句
const changeHomeData = (state,action) => {
  //将获取到的数据替换到defaultState对应的数组中去(此处的action数据为js对象，defaultState中的为immutable对象)
  return state.merge({//merge为immutable对象的一个方法，merge可以接收一个对象合并多个属性
    topicList:fromJS(action.topicList),
    articleList:fromJS(action.articleList),
    recommendList:fromJS(action.recommendList),
    writerList:fromJS(action.writerList),
  });
}
const addArticleList = (state,action) => {
  return state.merge({
    //state.get('articleList').concat(action.list)为拿到原来的articleList，调用它的concat方法追加action.list进去
    'articleList':state.get('articleList').concat(action.list),
    'articlePage':action.nextPage,
  });
}
//reducer文件导出的内容是一个纯函数（给一个固定的输入就一定会有一定的输出，同时不会有副作用）
export default ( state = defaultState, action ) => {//此处的defaultState是一个默认值
  //根据从组件中获取到的操作类型作判断并返回出相对应的操作
  switch(action.type){
    //此处接收axios请求到的数据
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state,action)
    case constants.ADD_HOME_LIST:
      return addArticleList(state,action)
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll',action.show)
    default:
      return state;
  }
}