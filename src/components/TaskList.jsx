
import { useState } from 'react';
import TaskCard from './TaskCard';


const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description 1' },
    { id: 2, title: 'Task 2', description: 'Description 2' },
    // Add more tasks as needed
  ]);

  const moveTask = (fromIndex, toIndex) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(fromIndex, 1);
    updatedTasks.splice(toIndex, 0, movedTask);
    setTasks(updatedTasks);
  };

  const handleTaskUpdate = (taskId) => {
    // Implement task update logic here
    console.log(`Update task with id: ${taskId}`);
  };

  const handleTaskDelete = (taskId) => {
    // Implement task delete logic here
    console.log(`Delete task with id: ${taskId}`);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <TaskCard
          key={task.id}
          task={task}
          index={index}
          moveTask={moveTask}
          onTaskUpdate={handleTaskUpdate}
          onTaskDelete={handleTaskDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;