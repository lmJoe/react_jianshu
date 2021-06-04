import axios from "axios"
import * as constants from './constants';
const changeLogin = () => ({
  type:constants.CHANGE_LOGIN,
  value:true,
})
export const login = (account,password) => {
  return (dispatch) => {
    //验证是否登录成功
    axios.get('/api/login.json?account='+ account +'&password=' + password).then((res)=>{
      const result = res.data.data;
      console.log(result);
      if(result){
        dispatch(changeLogin())
      }else{
        alert("登录失败");
      }
    })
  }
}
export const loginOut = () => ({
  type:constants.LOGOUT,
  value:false,
})