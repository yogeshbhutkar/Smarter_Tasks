import "./TaskCard.css";

const TaskCard = ({ title, dueDate, asignee, completedOn }) => {
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{title}</h2>
      {completedOn && <p>Completed On: {completedOn}</p>}
      {dueDate && <p>Due On: {dueDate}</p>}
      {asignee && <p>Assignee: {asignee}</p>}
    </div>
  );
};

export default TaskCard;
