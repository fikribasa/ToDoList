import React from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";

export default class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  renderError() {
    if (!this.state.error) {
      return null;
    }

    return (
      <div
        style={{
          color: "red"
        }}
      >
        {this.state.error}
      </div>
    );
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <form className="todoInput" onSubmit={this.handleCreate.bind(this)}>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="What you wanna do today?"
              ref="createInput"
            />
            <div className="input-group-btn">
              <Button
                className="addBtn"
                variant="outline-success"
                onClick={this.handleCreate.bind(this)}
              >
                ADD
              </Button>
            </div>
          </div>
          <div className="errorMsg">{this.renderError()}</div>
        </form>
      </div>
    );
  }

  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = "";
  }

  validateInput(task) {
    if (!task) {
      return "Please enter a task.";
    } else if (_.find(this.props.todos, (todo) => todo.task === task)) {
      return "Task already exists.";
    } else {
      return null;
    }
  }
}
