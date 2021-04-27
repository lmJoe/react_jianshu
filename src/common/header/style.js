import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
  width:100%;
  height:58px;
  border-bottom:1px solid #f0f0f0;
  position:relative;
`
export const Logo = styled.a.attrs({
  href:"/"
})`
  display:block;
  position:absolute;
  top:0;
  left:0;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size:contain;
`
export const Nav = styled.div`
  width:960px;
  padding-right:70px;
  margin:0 auto;
  box-sizing:border-box;
  height:100%;
`
export const Navitem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索',
})`
  width:160px;
  height:38px;
  margin-top:9px;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  padding:0 30px 0 20px;
  box-sizing:border-box;
  font-size:14px;
  margin-left:20px;
  color:#777;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
  &.slide-enter{
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active{
    transition: 160px;
  }
`
export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;

`
export const Button = styled.div`
  float:right;
  line-height:35px;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  border-radius:20px;
  border:1px solid #ec4169;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`
export const SearchWrapper = styled.div`
  float:left;
  overflow:hidden;
  position:relative;
  .iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    height:30px;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    cursor:pointer;
    &.focused{
      background:#777;
      color:#fff;
    }
  }
`
