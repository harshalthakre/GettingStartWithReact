var React=require('react');
var ReactDom=require('react-dom');
//Module requires
var TodoItem=require('./todoItem');
var AddItem=require('./addItem');
var About=require('./about');
require('./css/index.css');
//router gives route and router component
//ES6 Way
import{Router,Route,browserHistory,Link} from 'react-router';

var App=React.createClass({
  render:function(){
    return(
      <Router history={browserHistory}>
        <Route path={'/'} component={TodoComponent}></Route>
        <Route path={'/about'} component={About}></Route>
      </Router>
    );
  }
})
//create Component
//ES6
//React Way -->this is react way
// in return we return JSX
var TodoComponent=React.createClass({

  getInitialState:function(){
    return{
        todos:['Washing','eat spinach','complete project','write blog'],

    }
  },

  render: function(){
    var todos=this.state.todos;

    todos=todos.map(function(item,index){
      return(
        <TodoItem key={index} item={item} onDelete={this.onDelete} />
      );
    }.bind(this));
    return(
      // write all html code here
      <div id="todo-list">
        <Link to={'/about'}>About Me</Link>
        <p >Fail to plan is plan to fail</p>
          <ul>

              {todos}
          </ul>
          <AddItem onAdd={this.onAdd}/>
      </div>
    );
  }, //render

  //custom function
  onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
});
},

  onAdd: function(item){
    var updatedTodos=this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos:updatedTodos
    })
  },

  //lifecycle function
  componentWillMount : function(){
    console.log('componentWillMount')// before render method
  },

  componentDidMount : function(){
    console.log('componentDidMount') // directly after the render method
    // any grabbing of external data
  },

  componentWillUpdate: function(){
    console.log('componentWillUpdate')
  }

}); //class



//React dom component comes into picture
//put compo into html page

ReactDom.render(<App/>,document.getElementById('todo-wrapper'));
