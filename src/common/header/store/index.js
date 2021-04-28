//引入当前header中store文件下的reducer
import reducer from './reducer';

//将引入的reducer文件export出去作为header中store的出口文件，以此来减少大的store文件中reducer合并各个组件方法的引入路径
export {reducer};