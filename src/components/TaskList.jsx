import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';

const ItemType = 'TASK';

const TaskList = ({ category, tasks, moveTask, onTaskUpdate, onTaskDelete }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemType,
  }));

  return (
    <div ref={drop} className="bg-gray-100 p-4 rounded-lg shadow-md min-h-[200px]">
      <h2 className="text-lg font-bold text-gray-700 mb-3">{category}</h2>
      <div className="space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TaskCard
              key={task.id}
              task={task}
              index={index}
              moveTask={moveTask}
              onTaskUpdate={onTaskUpdate}
              onTaskDelete={onTaskDelete}
            />
          ))
        ) : (
          <p className="text-sm text-gray-500">No tasks in this category.</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
