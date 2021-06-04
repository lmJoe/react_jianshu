import { combineReducers } from 'redux-immutable';//combineReducers用于合并各个组件中的store中reducer文件中的方法
import { reducer as headerReducer } from '../common/header/store'; //reducer as headerReducer意为把reducer比作headerReducer来使用
import { reducer as homeReducer } from '../pages/home/store';//将home文件中的store中的reducer引入进来
import { reducer as detailReducer } from '../pages/detail/store';//将home文件中的store中的reducer引入进来
import { reducer as loginReducer } from '../pages/login/store';//将home文件中的store中的reducer引入进来
//引入redux-immutable对state做操作 是state成为一个immutable对象
export default combineReducers({
  header:headerReducer,
  home:homeReducer,
  detail:detailReducer,
  login:loginReducer,
})