import React, { Component } from "react";

class CompletedList extends Component {
  render() {
    return (
      <>
        <h3>Completed</h3>
        <ul id="completed-tasks">
        {this.props.arrCompleted.map((d,index) =><li id={index}><input type='checkbox' id={index} onChange={this.props.clickHandlerUncheck} checked/><label>{d}</label><button className='edit' onClick={this.props.clickHandlerEdit}>Edit</button><button className='delete' onClick={this.props.clickHandlerDelete}>Delete</button></li>)}
        </ul>
      </>
    );
  }
}

export default CompletedList;
