import { TaskItem } from "./types";
import Task from "./Task";
// interface Props {
//   tasks: TaskItem[];
// }
// interface State {}
const TaskList = (props: {
  tasks: TaskItem[];
  deleteTaskCB: (id: Number) => void;
}) => {
  const list = props.tasks.map((task, idx) => (
    <li key={idx}>
      <Task
        id={task.id}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
      />
      <button
        className="deleteTaskButton"
        onClick={() => props.deleteTaskCB(task.id)}
      >
        Delete
      </button>
    </li>
  ));
  return <>{list}</>;
};
export default TaskList;
