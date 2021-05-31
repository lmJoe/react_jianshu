import React,{ Component } from 'react';
import { ListItem, ListInfo,LoadMore } from '../style'
import { connect } from 'react-redux';
import  { actionCreators } from '../store';
class List extends Component {
  render() {
    const { list,getMoreList,page } = this.props;
    return (
      <div>
        {
          list.map((item,index) => {
            console.log("item",item);
            return (
              <ListItem key={item.get('id')}>
                <img className="pic" src={item.get('imgUrl')} alt=""/>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}
const mapState = (state) => ({
  list:state.getIn(['home','articleList']),//从home文件中的store的reducer中取出articleList数据
  page:state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) => ({
  getMoreList(page){
    dispatch(actionCreators.getMoreList(page));
  }
})
export default connect(mapState,mapDispatch)(List);