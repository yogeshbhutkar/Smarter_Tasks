import "./TaskCard.css";
import { TaskItem } from "./types";
import { Link } from "react-router-dom";

// interface TaskProp {
//   title: string;
//   dueDate: string;
//   description: string;
// }

const Task = (props: TaskItem) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100 ">
      <Link to={`/tasks/${props.id}`}>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
      </Link>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
    </div>
  );
};

export default Task;
