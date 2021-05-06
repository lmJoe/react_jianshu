import * as constants from './constants';
import axios from 'axios';
import { fromJS }  from 'immutable';
const changeList = (data) => ({
  //此处的data由于是一个普通数组，但是我们现在的state是一个immutable对象，此时需要通过immutable吧data抓换位一个immutable数组
  type:constants.CHANGE_LIST,
  data:fromJS(data),
  totalPage:Math.ceil(data.length / 10),
})
//将操作常量从contstants中引入过来
export const searchFocus = () => ({
  type:constants.SEARCH_FOCUS,
})
export const searchBlur = () => ({
  type:constants.SEARCH_BLUR,
})
export const mouseEnter = () => ({
  type:constants.MOUSE_ENTER,
})
export const mouseLeave = () => ({
  type:constants.MOUSE_LEAVE,
})
export const changePage = (page) => ({
  type:constants.CHANGE_PAGE,
  page
})
export const getList = () => {
  //此处由于使用了redux-thunk 所以可以返回一个函数，在此函数中写一个异步请求
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=>{
      const data = res.data;
      //第一步:创建一个action
      //第二步:在constants.js中创建一个CHANGE_LIST
      //第三步：在reducer文件中，判断当前action的类型
      
      const action = changeList(data.data);
      dispatch(action);//将action派发给store
    }).catch(()=>{
      console.log("error")
    })
  }
}