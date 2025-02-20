import { useDrag } from 'react-dnd';

const ItemType = 'TASK';

const TaskCard = ({ task, index, moveTask, onTaskUpdate, onTaskDelete }) => {
  const [, drag] = useDrag(() => ({
    type: ItemType,
    item: { id: task.id, index },
  }));

  return (
    <div
      ref={drag}
      className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col gap-2 cursor-grab hover:shadow-lg transition-all"
    >
      <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      <div className="flex justify-between mt-3">
        <button
          className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
          onClick={() => onTaskUpdate(task.id)}
        >
          Edit
        </button>
        <button
          className="px-3 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 transition"
          onClick={() => onTaskDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
