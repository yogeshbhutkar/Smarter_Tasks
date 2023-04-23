import React from "react";
import "./TaskCard.css";

interface TaskCardInterface {
  title: string;
  dueDate?: string;
  assigneeName: string;
  completedAtDate?: string;
}

const TaskCard = (props: TaskCardInterface) => {
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{props.title}</h2>
      {props.completedAtDate && <p>Completed On: {props.completedAtDate}</p>}
      {props.dueDate && <p>Due On: {props.dueDate}</p>}
      {props.assigneeName && <p>Assignee: {props.assigneeName}</p>}
    </div>
  );
};

export default TaskCard;
