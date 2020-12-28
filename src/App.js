import React from 'react';
import { render } from 'react-dom';
import './App.css';

export default class App extends React.Component {
  rows = [];
  objectRows = [];
  title = "";
  remove = false;

  constructor() {
    super();
    // Binding method
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      value: ''
    }

  }


  handleClick() {
    if (this.title) {
      this.objectRows.push({ text: this.title, checked: false })
      this.state.value = '';
      this.setState(this.state);
    }
  }
  removeTodo(index, event) {
    if (this.objectRows[index]) {
      this.rows.splice(index, 1);
      this.objectRows.splice(index, 1);
      this.state.value = '';
      this.setState(this.state);
      this.remove = true;
    }
  }
  toggleToDo(index) {
    if (!this.remove && this.objectRows[index]) {
      this.objectRows[index].checked = !this.objectRows[index].checked
      this.state.value = '';
      this.setState(this.state);
    }
    this.remove=false;
  }
  render() {
    this.rows = [];
    for (let i = 0; i < this.objectRows.length; i++) {
      this.rows.push(<li key={i} className={this.objectRows[i].checked ? "checked" : ""}
        onClick={() => this.toggleToDo(i)} >
        <span className="textStyle">{this.objectRows[i].text}</span>
        <span className="close textStyle" key={"del" + i} onClick={(event) => this.removeTodo(i, event)} >x</span>
      </li>);
    }
    return (
      <div className="App">
        <div className="test">
          <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <input type="text" id="myInput" onChange={event => this.title = event.target.value} placeholder="Title..." />
            <span onClick={this.handleClick} className="addBtn">Add</span>
          </div>
          <ul id="myUL">
            {this.rows}
          </ul>
        </div>
      </div>
    );
  }

}
render(<App />, document.getElementById('root'));

