import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
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
export default connect(mapState,mapDispatch)(Detail);