import "./App.css";
import _ from "lodash";
import Header from "./components/Header";
import React, { Component } from "react";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import TodoList from "./components/ToDoList";
import CreateTodo from "./components/CreateToDo";

import Container from "react-bootstrap/Container";

const todos = [
  {
    task: "Test",
    isCompleted: true
  },
  {
    task: "Task 1",
    isCompleted: false
  },
  {
    task: "tasl 2",
    isCompleted: true
  },
  {
    task: "task 3",
    isCompleted: true
  },
  {
    task: "task4",
    isCompleted: false
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }
  render() {
    return (
      <div>
        <div>
          <Header />
          <Container>
            <CreateTodo
              todos={this.state.todos}
              createTask={this.createTask.bind(this)}
            />
            <Filter />
            <TodoList
              todos={this.state.todos}
              toggleTask={this.toggleTask.bind(this)}
              saveTask={this.saveTask.bind(this)}
              deleteTask={this.deleteTask.bind(this)}
            />
          </Container>
          <Footer />
        </div>
      </div>
    );
  }
  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, (todo) => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  createTask(task) {
    this.state.todos.push({ task, isCompleted: false });
    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, (todo) => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, (todo) => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }
}
