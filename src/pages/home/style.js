import styled from 'styled-components';
export const HomeWrapper = styled.div`
  overflow:hidden;
  width:960px;
  margin:0 auto;
  // height:300px;
`
export const HomeLeft = styled.div`
  margin-left:15px;
  padding-top:30px;
  width:66.66%;
  float:left;
  .banner-img{
    width:636px;
    height:285px;
  }
`
export const HomeRight = styled.div`
  float:right;
  width:29%;
`
export const TopicWrapper = styled.div`
  padding:20px 0 10px 0;
  overflow:hidden;
  margin-left:-18px;
  border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float:left;
  background:#f7f7f7;
  height:32px;
  padding-right:10px;
  margin-left:18px;
  margin-bottom:18px;
  line-height:32px;
  font-size:14px;
  border:1px solid #dcdcdc;
  border-radius:4px;
  cursor:pointer;
  .topic-name{
    displayLblock;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
  }
`
export const ListItem = styled.div`
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  cursor:pointer;
  .pic{
    width:140px;
    height:100px;
    display:block;
    float:right;
    border-radius:10px;
  }
`
export const ListInfo = styled.div`
  width:495px;
  float:left;
  .title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    padding-top:8px;
    font-size:13px;
    line-height:20px;
    color:#999;
  }
`
export const RecommendWrapper = styled.div`
  margin:30px 0;
  width:280px;
`
export const RecommendItem = styled.div`
  width:280px;
  height:50px;
  background:url(${(props) => props.imgUrl});
  background-size:contain;
  margin-bottom:12px;
  border-radius:6px;
  cursor:pointer;
`
export const WriterWrapper = styled.div`
  width:278px;
  margin: 0 0 20px;
  text-align: left;
  border-radius:3px;
  cursor:pointer;
  overflow:hidden;
  img{
    width:48px;
    height:48px;
    border:1px solid #dcdcdc;
    border-radius:50%;
    float:left;
    display:block;
    margin-right: 10px;
  }
`
export const WriterItem = styled.div`
  border-radius:3px;
  cursor:pointer;
  float:left;
  margin-top: 15px;
  width: 100%;
`
export const WriterDesc = styled.div`
  float:left;
  height:30px;
  h3{
    margin-top:5px;
    color: #333;
    font-size: 14px;
    width:170px;
    line-height:20px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  p{
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
    line-height:20px;
    width:170px;
    line-height:20px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
`
export const WriterFocuson = styled.div`
  float: right;
  padding: 0;
  font-size: 13px;
  color: #42c02e;
  margin-top: 5px;
  line-height:20px;
`
export const WriterRecommed = styled.div`
  text-align:left;
  span{
    font-size: 14px;
    color: #969696;
  }
  a{
    float: right;
    display: inline-block;
    font-size: 14px;
    color: #969696;
  }
`
export const LoadMore = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  text-align:center;
  background:#a5a5a5;
  border-radius:20px;
  color:#fff;
  margin:30px 0;
  cursor:pointer;
  font-size:14px;
`
export const BackTop = styled.div`
  position:fixed;
  width:60px;
  height:60px;
  line-height:60px;
  text-align:center;
  border:1px solid #ccc;
  font-size:12px;
  color:#333;
  background:#fff;
  transition: .1s ease-in;
  cursor: pointer;
  right:30px;
  bottom:30px;
`