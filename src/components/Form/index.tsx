import { ChangeEvent, SyntheticEvent } from 'react';

interface TaskProps {
  task: {
    taskName: string;
    taskTime: number;
  };
  addTask: (event: SyntheticEvent) => void;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({ task, addTask, handleInput }: TaskProps) => {
  return (
    <>
      <form onSubmit={addTask}>
        <div>
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            name="taskName"
            placeholder="Ex.: Comer"
            value={task.taskName}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="taskTime">Task Time:</label>
          <input
            type="number"
            name="taskTime"
            placeholder="Ex.: 4"
            value={task.taskTime}
            onChange={handleInput}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default Form;
