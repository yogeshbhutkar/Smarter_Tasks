import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  inputRef = React.createRef<HTMLInputElement>();

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };

  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", dueDate: "" });
  };

  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    };
  }
  render() {
    return (
      <form onSubmit={this.addTask}>
        <input
          id="todoTitle"
          type="text"
          value={this.state.title}
          onChange={this.titleChanged}
        />
        <input
          id="todoDescription"
          type="text"
          value={this.state.description}
          onChange={this.descriptionChanged}
        />
        <input
          id="todoDueDate"
          type="date"
          value={this.state.dueDate.toString()}
          onChange={this.dueDateChanged}
        />
        <button id="addTaskButton" type="submit">
          Add item
        </button>
      </form>
    );
  }
}
export default TaskForm;
