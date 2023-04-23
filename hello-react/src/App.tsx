import React from "react";
import TaskCard from "./TaskCard";

function App() {
  return (
    <div className="App flex items-center justify-center h-screen">
      <div>
        <div>
          <h1 className="font-bold text-2xl">Smarter Tasks</h1>
          <p>
            <span className="font-bold">Project</span>: Graduation Final Year
            Project (Revamp College Website)
          </p>
        </div>
        <div className="flex mt-4">
          <div className="mr-5 rounded-lg px-2 border-2">
            <h1 className="font-bold pb-2 ">Pending</h1>
            <TaskCard
              title="Build the website with static content"
              dueDate={`10th April`}
              assigneeName={`Rohit S`}
            />
            <TaskCard
              title="Add blog"
              dueDate={`22nd March`}
              assigneeName={`Rohit M`}
            />
            <button className="bg-purple-400 hover:bg-purple-500 w-full py-2 rounded-lg mb-2 text-white">
              New Task
            </button>
          </div>
          <div className="inline mr-5 rounded-lg px-2 border-2">
            <h1 className="font-bold pb-2">Done</h1>
            <TaskCard
              title="Design the mockup"
              completedAtDate={`10th April`}
              assigneeName={`Rohit M`}
            />
            <TaskCard
              title="Get approval from principal"
              assigneeName={`Ajay S`}
              completedAtDate={`20th April`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
