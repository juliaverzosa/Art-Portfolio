// File: Board.js
import React from 'react';
import './Board.css';

const tasks = [
  { id: 1, title: '2 Characters Full Body', progress: 'In Progress' },
  { id: 2, title: 'Bust Up Illustration', progress: 'To Do' },
  { id: 3, title: 'Birthday Commission', progress: 'Done' },
];

const progressMap = {
  'To Do': 0,
  'In Progress': 50,
  'Done': 100,
};

const Board = () => {
  return (
    <div className="minimal-board">
      {tasks.map((task) => (
        <div key={task.id} className="task-row">
          <div className="task-header">
            <span className="task-title">{task.title}</span>
            <span className="task-status">{task.progress}</span>
          </div>
          <div className="progress-bar-wrapper">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressMap[task.progress]}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
