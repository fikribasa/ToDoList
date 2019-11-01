import React from "react";
// import _ from 'lodash';
import Button from "react-bootstrap/Button";

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;
    const taskStyle = isCompleted ? "done" : "";

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input
              className="form-control"
              type="text"
              defaultValue={task}
              ref="editInput"
            />
          </form>
        </td>
      );
    }
    return (
      <td
        className={taskStyle}
        onClick={this.props.toggleTask.bind(this, task)}
      >
        {task}
      </td>
    );
  }
  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <Button
            onClick={this.onSaveClick.bind(this)}
            variant="outline-success"
          >
            Save
          </Button>
          <Button
            onClick={this.onCancelClick.bind(this)}
            variant="outline-danger"
          >
            Cancel
          </Button>
        </td>
      );
    }

    return (
      <td>
        <Button
          onClick={this.onEditClick.bind(this)}
          variant="outline-secondary"
        >
          Edit
        </Button>
        <Button
          onClick={this.props.deleteTask.bind(this, this.props.task)}
          variant="outline-danger"
        >
          Delete
        </Button>
      </td>
    );
  }

  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionsSection()}
      </tr>
    );
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onCancelClick() {
    this.setState({ isEditing: false });
  }

  onSaveClick(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }
}
