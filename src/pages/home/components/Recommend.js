import React,{ PureComponent } from 'react';
import {RecommendWrapper,RecommendItem} from '../style';
import {connect} from 'react-redux';
class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.ImgList.map((item)=>{
            return (
              <RecommendItem imgUrl={item.get('imageUrl')} key={item.get('id')} />
            )
          })
        }
      </RecommendWrapper>
    )
  }
}
const mapState = (state) => ({
  ImgList : state.getIn(['home','recommendList'])//从home文件中的store的reducer中取出recommendList数据
})
export default connect(mapState,null)(Recommend);