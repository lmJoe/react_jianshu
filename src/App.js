import React from 'react';
//使用store第三步：使用react-redux的核心api Provider包裹所有组件
import { Provider } from 'react-redux';
import Header from './common/header/index.js'
import Home from './pages/home/index.js'
import Detail from './pages/detail/index.js'
import { BrowserRouter,Route } from 'react-router-dom'
import store from './store'
function App() {
  return (
    //<Provider store={store}>  此处的意思为使Provider内部所有组件都有能力使用store里的数据
    <Provider store={store}>
      <div id="App">
        <Header>
        </Header>
        <BrowserRouter>
        {/* 此处路由为根目录显示首页 */}
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
    
  );
}

export default App;
