import React from "react";
import "./TaskCard.css";

interface TaskCardInterface {
  title: string;
  completedAtDate?: string;
  dueDate?: string;
  assigneeName: string;
}

const TaskCard = (props: TaskCardInterface) => {
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{props.title}</h2>
      {props.dueDate && <p>Due On: {props.dueDate}</p>}
      {props.completedAtDate && <p>Completed On: {props.completedAtDate}</p>}
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
