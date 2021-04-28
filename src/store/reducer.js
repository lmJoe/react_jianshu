import { combineReducers } from 'redux';//combineReducers用于合并各个组件中的store中reducer文件中的方法
import { reducer as headerReducer } from '../common/header/store'; //reducer as headerReducer意为把reducer比作headerReducer来使用


export default combineReducers({
  header:headerReducer
})