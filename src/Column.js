import React, { useState } from 'react';

function Column({ column, onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <div className="column">
      <h3>{column.title}</h3>
      <ul>
        {column.tasks.map((task, index) => (
          <li key={index} className="task">{task}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default Column;
