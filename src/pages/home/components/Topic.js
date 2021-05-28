import React,{ Component } from 'react';
import {connect } from 'react-redux';//使用react-redux第三方模块引入connect的方法
import { TopicWrapper,TopicItem } from '../style';
class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item)=>{
            return (
              <TopicItem key={item.get('id')}>
                <img className="topic-name" src={item.get('imageUrl')} alt=""/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
        
      </TopicWrapper>
    )
  }
}
//mapstate从store中拿数据
const mapState = (state) => ({
  list: state.getIn(['home','topicList']),
})
export default connect(mapState,null)(Topic);//导出connect包装过的容器组件