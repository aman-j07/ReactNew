import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <>
        <h3>Todo</h3>
        <ul id="incomplete-tasks">
          {this.props.arrTodo.map((d,index) =><li id={index}><input type='checkbox' id={index} checked={false} onChange={this.props.clickHandler}/><label>{d}</label><button className='edit' onClick={this.props.clickHandlerEdit}>Edit</button><button className='delete' onClick={this.props.clickHandlerDelete}>Delete</button></li>)}    
        </ul>
      </>
    );
  }
}

export default TodoList;