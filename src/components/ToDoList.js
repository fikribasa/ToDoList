import React from "react";
import _ from "lodash";
import ToDoHeader from "./ToDoHeader";
import ToDoListItem from "./ToDoListItem";

export default class TodoList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, "todos");

    return _.map(this.props.todos, (todo, index) => (
      <ToDoListItem key={index} {...todo} {...props} />
    ));
  }

  render() {
    return (
      <table className="table">
        <ToDoHeader />
        <tbody>{this.renderItems()}</tbody>
      </table>
    );
  }
}
