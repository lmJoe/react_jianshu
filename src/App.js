import React from 'react';
//使用store第三步：使用react-redux的核心api Provider包裹所有组件
import { Provider } from 'react-redux';
import Header from './common/header/index.js'
import store from './store'
function App() {
  return (
    //<Provider store={store}>  此处的意思为使Provider内部所有组件都有能力使用store里的数据
    <Provider store={store}> 
      <Header>
      </Header>
    </Provider>
  );
}

export default App;
