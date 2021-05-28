import React,{ Component } from 'react';
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux';
class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.list.map((item) => {
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
        
      </div>
    )
  }
}
const mapState = (state) => ({
  list:state.getIn(['home','articleList']),//从home文件中的store的reducer中取出articleList数据
})
export default connect(mapState,null)(List);