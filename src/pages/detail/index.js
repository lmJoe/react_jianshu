import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { HomeWrapper, Header, Content } from './style';
import {actionCreators} from './store';
class Detail extends PureComponent {
  render() {
    // console.log(this.props.location.search);
    const {title,content} = this.props;
    return (
      <HomeWrapper>
        <Header>{title}</Header>
        {/* content被转义的话使用dangerouslySetInnerHTML */}
        <Content dangerouslySetInnerHTML={{__html:content}}></Content>
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}
const mapDispatch = (dispatch) =>({
  getDetail(id){
    dispatch(actionCreators.getDetail(id))
  }
})
const mapState = (state) => ({
  title:state.getIn(['detail','title']),
  content:state.getIn(['detail','content']),
})
//此处withRouter使用意义为让detail有能力获取到withRouter中所有的参数和内容
export default connect(mapState,mapDispatch)(withRouter(Detail));