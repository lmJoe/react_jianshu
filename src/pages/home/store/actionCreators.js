import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';
const changeHomeData = (result) => ({
  'type':constants.CHANGE_HOME_DATA,
  'topicList':result.topicList,
  'articleList':result.articleList,
  'recommendList':result.recommendList,
  'writerList':result.writerList,
})
const addHomeList = (result,nextPage) => ({
  'type':constants.ADD_HOME_LIST,
  'list':fromJS(result),
  nextPage
})
export const toggleTopShow = (show) => ({
  type:constants.TOGGLE_SCROLL_TOP,
  show
})
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      var result = res.data.data;
      //将获取的数据存储在store中(此处逻辑在actionCreators.js中)
      dispatch(changeHomeData(result));//此处派发出去的数据在所有store中的reducer中都能接收到
    })
  }
}
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/headhome.json?page='+page+'').then((res) => {
      var result = res.data.data;
      //将获取的数据存储在store中(此处逻辑在actionCreators.js中)
      dispatch(addHomeList(result,page+1));//此处派发出去的数据在所有store中的reducer中都能接收到
    })
    
  }
}