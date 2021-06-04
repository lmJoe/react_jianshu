import React from 'react';
//使用store第三步：使用react-redux的核心api Provider包裹所有组件
import { Provider } from 'react-redux';
import Header from './common/header/index.js'
import Home from './pages/home/index.js'
import Detail from './pages/detail/loadable.js'
import { BrowserRouter,Route } from 'react-router-dom'
import store from './store';
import Write from './pages/write';
import Login from './pages/login';
function App() {
  return (
    //<Provider store={store}>  此处的意思为使Provider内部所有组件都有能力使用store里的数据
    <Provider store={store}>
      <BrowserRouter>
      {/* 此处路由为根目录显示首页 */}
        <div>
        <Header />
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/Write' exact component={Write}></Route>
        {/* <Route path='/detail' exact component={Detail}></Route> */}
        <Route path='/detail/:id' exact component={Detail}></Route>
        </div>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
