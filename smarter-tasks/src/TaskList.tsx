import { TaskItem } from "./types";
import React from "react";
import Task from "./Task";
interface Props {
  tasks: TaskItem[];
}
interface State {}
class TaskList extends React.Component<Props, State> {
  render() {
    return this.props.tasks.map((task, idx) => (
      <Task key={idx} title={task.title} description="" dueDate="" />
    ));
  }
}
export default TaskList;
