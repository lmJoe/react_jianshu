import React,{ PureComponent } from 'react';
import { WriterWrapper,WriterDesc,WriterItem,WriterFocuson,WriterRecommed} from '../style';
import { connect } from 'react-redux';
class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <WriterRecommed>
          <span>推荐作者</span>
          <a className="page-change">换一批</a>
        </WriterRecommed>
        {
          this.props.list.map((item)=>{
            return (
              <WriterItem key={item.get('id')}>
                <img src={item.get('imgUrl')}/>
                <WriterDesc>
                  <h3>{item.get('writerName')}</h3>
                  <p>{item.get('desc')}</p>
                </WriterDesc>
                <WriterFocuson>
                  <b>+</b>关注
                </WriterFocuson>
              </WriterItem>
            )
          }) 
        }
      </WriterWrapper>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home','writerList'])//从home文件中的store的reducer中取出writerList数据
})
export default connect(mapState,null)(Writer);