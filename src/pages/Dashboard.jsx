import { useState } from 'react';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Task 1 description', category: 'To-Do' },
    { id: 2, title: 'Task 2', description: 'Task 2 description', category: 'In Progress' },
    { id: 3, title: 'Task 3', description: 'Task 3 description', category: 'Done' },
  ]);

  const moveTask = (fromIndex, toIndex) => {
    const updatedTasks = [...tasks];
    const movedTask = updatedTasks[fromIndex];
    updatedTasks.splice(fromIndex, 1);
    updatedTasks.splice(toIndex, 0, movedTask);
    setTasks(updatedTasks);
  };

  const onTaskUpdate = (taskId) => {
    console.log('Update task', taskId);
  };

  const onTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const categorizedTasks = {
    'To-Do': tasks.filter(task => task.category === 'To-Do'),
    'In Progress': tasks.filter(task => task.category === 'In Progress'),
    'Done': tasks.filter(task => task.category === 'Done'),
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Task Management</h1>
      <div className="grid grid-cols-3 gap-6">
        {Object.entries(categorizedTasks).map(([category, tasks]) => (
          <TaskList
            key={category}
            category={category}
            tasks={tasks}
            moveTask={moveTask}
            onTaskUpdate={onTaskUpdate}
            onTaskDelete={onTaskDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;