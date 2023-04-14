import "./TaskCard.css";

const TaskCard = ({ title, dueDate, assigneeName, completedAtDate }) => {
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{title}</h2>
      {completedAtDate && <p>Completed On: {completedAtDate}</p>}
      {dueDate && <p>Due On: {dueDate}</p>}
      {assigneeName && <p>Assignee: {assigneeName}</p>}
    </div>
  );
};

export default TaskCard;
