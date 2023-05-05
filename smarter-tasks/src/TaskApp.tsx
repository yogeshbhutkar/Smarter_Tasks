import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";
interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}
const TaskApp = (props: TaskAppProp) => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );

  const deleteTask = (id: Number) => {
    const removedTasks = taskAppState.tasks.filter((ele) => ele.id !== id);
    setTaskAppState({ tasks: removedTasks });
  };

  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList tasks={taskAppState.tasks} deleteTaskCB={deleteTask} />
    </div>
  );
};

export default TaskApp;
