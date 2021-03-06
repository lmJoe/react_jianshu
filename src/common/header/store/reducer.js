import * as constants from './constants';
//引入immutable.je防止store中的state值无意间被改动而无法定位
import { fromJS } from 'immutable';
//第二步：把reducer的值传给store.js中的createStore
const defaultState = fromJS({ //引入fromJS 可以将js对象转化为immutable对象 
  focused:false,//将搜索框点击展开判断条件写入store中作为调用，当前值为默认值
  mouseIn:false,
  list:[],
  page:1,
  totalPage:1,
});
//reducer文件导出的内容是一个纯函数（给一个固定的输入就一定会有一定的输出，同时不会有副作用）
export default ( state = defaultState, action ) => {//此处的defaultState是一个默认值
  //根据从组件中获取到的操作类型作判断并返回出相对应的操作
  switch(action.type){
    case constants.SEARCH_FOCUS:   //将操作类型更改为操作常量
      // const newState = JSON.parse(JSON.stringify(state));//深拷贝
      //immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个新的对象
      //现有的state已是一个immutable对象，使用set对state的值进行操作
      // newState.set('focused',true);
      // return newState;
      return state.set('focused',true);
    case constants.SEARCH_BLUR:   //将操作类型更改为操作常量
      // const newState = JSON.parse(JSON.stringify(state));//深拷贝
      // //现有的state已是一个immutable对象，使用set对state的值进行操作
      // newState.set('focused',false);
      // return newState;
      return state.set('focused',false);
    case constants.CHANGE_LIST:   //将操作类型更改为操作常量
      // const newState = JSON.parse(JSON.stringify(state));//深拷贝
      // //现有的state已是一个immutable对象，使用set对state的值进行操作
      // return state.set('list',action.data)
      //             .set('totalPage',action.totalPage);//改变搜索热词页码
      //state的merge()方法  用来代替set()方法，set只能一个一个添加，merge()可以添加一个对象
      return state.merge({
        'list':action.data,
        'totalPage':action.totalPage,
      })
      
    case constants.MOUSE_ENTER:   //将操作类型更改为操作常量
    // const newState = JSON.parse(JSON.stringify(state));//深拷贝
    // //现有的state已是一个immutable对象，使用set对state的值进行操作
      return state.set('mouseIn',true);
    case constants.MOUSE_LEAVE:   //将操作类型更改为操作常量
    // const newState = JSON.parse(JSON.stringify(state));//深拷贝
    // //现有的state已是一个immutable对象，使用set对state的值进行操作
      return state.set('mouseIn',false);
    case constants.CHANGE_PAGE:   //将操作类型更改为操作常量
    // const newState = JSON.parse(JSON.stringify(state));//深拷贝
    // //现有的state已是一个immutable对象，使用set对state的值进行操作
      return state.set('page',action.page);           
    default:
      return state;
  }
}