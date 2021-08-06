import { useState, SyntheticEvent, ChangeEvent } from 'react';

export function App() {
  interface TaskProps {
    taskName: string;
    taskTime: number;
  }

  const [task, setTask] = useState<TaskProps>({
    taskName: '',
    taskTime: 0,
  });
  const [toDoList, setToDoList] = useState<TaskProps[]>([]);

  const addTask = (event: SyntheticEvent) => {
    event.preventDefault();

    if (task.taskName.length === 0) {
      return alert('Task Name cannot be empty');
    }

    if (task.taskTime <= 0) {
      return alert('Task Time cannot be lower or as 0');
    }

    setToDoList([...toDoList, { ...task, taskTime: Number(task.taskTime) }]);
    setTask({
      taskName: '',
      taskTime: 0,
    });
    return alert('The task has been added!');
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  return (
    <>
      {console.log(toDoList)}
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
}
