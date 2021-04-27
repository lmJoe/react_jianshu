//创建store第一步
import { createStore } from 'redux';
import reducer from './reducer';
//给createStore()传递一个reducer，第二步创建reducer文件，让其文件中的store能够提供给当前文件中的createStore使用
const store = createStore(reducer);
//使用store的第三步 在App.js中，使用react-redux的核心api Provider 将所有组件包裹起来，使Provider内的组件能够使用store
//使用store的第四步 在组件中 使用react-redux的核心api connect 接收store 并使用store中的数据
export default store;