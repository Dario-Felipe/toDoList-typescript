import { TaskInfo, TaskManager } from '../../App';

interface FormProps {
  task: TaskInfo;
  addTask: TaskManager['addTask'];
  handleInput: TaskManager['handleInput'];
}

const Form = ({ task, addTask, handleInput }: FormProps) => {
  return (
    <>
      <form onSubmit={addTask}>
        <div>
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Ex.: Comer"
            value={task.name}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="taskTime">Task Time:</label>
          <input
            type="number"
            name="time"
            placeholder="Ex.: 4"
            value={task.time}
            onChange={handleInput}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default Form;
