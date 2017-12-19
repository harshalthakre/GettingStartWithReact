var React = require('react');
require('./css/todoItem.css');
//var ReactDom = require('react-dom');

///create TodoItem component



var TodoItem=React.createClass({
  render: function(){
    return(
      <li>
          <div className="todo-item">
            <span className="item-name">{this.props.item}</span>
            <span className="item-delete" onClick={this.handleDelete}>X</span>
          </div>
      </li>
    );
  },//render

  //custom function
  handleDelete: function(){
      this.props.onDelete(this.props.item);
  }
})


module.exports=TodoItem;
