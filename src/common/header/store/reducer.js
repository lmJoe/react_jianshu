import * as constants from './constants';
//第二步：把reducer的值传给store.js中的createStore
const defaultState = {
  focused:false,//将搜索框点击展开判断条件写入store中作为调用，当前值为默认值
};
//reducer文件导出的内容是一个纯函数（给一个固定的输入就一定会有一定的输出，同时不会有副作用）

export default ( state = defaultState, action ) => {//此处的defaultState是一个默认值
  //根据从组件中获取到的操作类型作判断并返回出相对应的操作
  if(action.type === constants.SEARCH_FOCUS){ //将操作类型更改为操作常量
    const newState = JSON.parse(JSON.stringify(state));//深拷贝
    newState.focused = true;
    return newState;
  }
  if(action.type === constants.SEARCH_BLUR){//将操作类型更改为操作常量
    const newState = JSON.parse(JSON.stringify(state));//深拷贝
    newState.focused = false;
    return newState;
  }
  return state;
}