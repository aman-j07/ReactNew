import React, { Component } from "react";
import TodoList from "./TodoList";
import CompletedList from "./CompletedList";

class AddItem extends Component {
  arrTodo = [];arrCompleted = [];indexTodo;indexCompleted;indexEdit;idEdit;
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      arrTodo: this.arrTodo,
      arrCompleted: this.arrCompleted,
    };
    this.inputRef = React.createRef();
    this.btnAddRef = React.createRef();
  }
  changeHandlerTask = () => {
    if (this.btnAddRef.current.innerHTML === "Add" && this.inputRef.current.value!=="") {
      this.setState({
        newTask: this.inputRef.current.value,
      });
      this.arrTodo.push(this.inputRef.current.value);
      this.inputRef.current.value = "";
    } else if (this.btnAddRef.current.innerHTML === "Update"  && this.inputRef.current.value!=="") {
      if (this.idEdit === "incomplete-tasks") {
        this.arrTodo[this.indexEdit] = this.inputRef.current.value;
      } else if (this.idEdit === "completed-tasks") {
        this.arrCompleted[this.indexEdit] = this.inputRef.current.value;
      }
      this.inputRef.current.value = "";
      this.btnAddRef.current.innerHTML ="Add"
    }
    this.setState({
      arrTodo: this.arrTodo,
      arrCompleted: this.arrCompleted,
    })
  };
  clickHandler = (event) => {
    this.indexTodo = event.target.getAttribute("id");
    this.arrCompleted.push(this.arrTodo[this.indexTodo]);
    this.arrTodo.splice(this.indexTodo, 1);
    this.setState({
      arrTodo: this.arrTodo,
      arrCompleted: this.arrCompleted,
    });
  };
  clickHandlerUncheck = (event) => {
    this.indexCompleted = event.target.getAttribute("id");
    this.arrTodo.push(this.arrCompleted[this.indexCompleted]);
    this.arrCompleted.splice(this.indexCompleted, 1);
    this.setState({
      arrTodo: this.arrTodo,
      arrCompleted: this.arrCompleted,
    });
  };
  clickHandlerDelete = (event) => {
    let index = 0;
    index = event.target.parentElement.getAttribute("id");
    if (
      event.target.parentElement.parentElement.getAttribute("id") ===
      "incomplete-tasks"
    ) {
      this.arrTodo.splice(index, 1);
    } else if (
      event.target.parentElement.parentElement.getAttribute("id") ===
      "completed-tasks"
    ) {
      this.arrCompleted.splice(index, 1);
    }
    this.setState({
      arrTodo: this.arrTodo,
      arrCompleted: this.arrCompleted,
    });
    console.log(
      "todo=",
      this.state.arrTodo,
      "completed=",
      this.state.arrCompleted
    );
  };
  clickHandlerEdit = (event) => {
    var text = "";
    text = event.target.parentElement.textContent;
    text = text.slice(0, -10);
    this.inputRef.current.value = text;
    this.inputRef.current.focus();
    this.btnAddRef.current.innerHTML = "Update";
    this.indexEdit = event.target.parentElement.getAttribute("id");
    this.idEdit = event.target.parentElement.parentElement.getAttribute("id");
  };

  render() {
    return (
      <>
        <h2>TODO LIST</h2>
        <h3>Add Item</h3>
        <p>
          <input id="new-task" ref={this.inputRef} type="text" />
          <button
            id="addbtn"
            ref={this.btnAddRef}
            onClick={this.changeHandlerTask}
          >
            Add
          </button>
        </p>
        <TodoList
          arrTodo={this.arrTodo}
          clickHandler={this.clickHandler}
          clickHandlerDelete={this.clickHandlerDelete}
          clickHandlerEdit={this.clickHandlerEdit}
        />
        <CompletedList
          arrCompleted={this.arrCompleted}
          index={this.index}
          clickHandlerUncheck={this.clickHandlerUncheck}
          clickHandlerDelete={this.clickHandlerDelete}
          clickHandlerEdit={this.clickHandlerEdit}
        />
      </>
    );
  }
}

export default AddItem;
