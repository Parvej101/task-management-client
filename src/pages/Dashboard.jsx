import { useState, useEffect } from 'react';

import TaskList from '../components/TaskList';

import axiosInstance from '../assets/hook/publicAxios';
import TaskForm from '../components/TaskForm';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend
    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get('/tasks');
        setTasks(response.data);
      } catch (err) {
        console.error('Error fetching tasks:', err);
      }
    };
    fetchTasks();
  }, []);

  const handleTaskCreated = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]); // Add the newly created task to the list
  };

  // Categorize tasks
  const categorizedTasks = {
    'To-Do': tasks.filter((task) => task.category === 'To-Do'),
    'In Progress': tasks.filter((task) => task.category === 'In Progress'),
    'Done': tasks.filter((task) => task.category === 'Done'),
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Task Management</h1>
      
      {/* Create Task Component */}
      <TaskForm onTaskCreated={handleTaskCreated} />

      <div className="grid grid-cols-3 gap-6 mt-6">
        {Object.entries(categorizedTasks).map(([category, tasks]) => (
          <TaskList
            key={category}
            category={category}
            tasks={tasks}
            // Additional props like moveTask, onTaskUpdate, onTaskDelete can go here
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
