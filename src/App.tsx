import { useState, SyntheticEvent, ChangeEvent } from 'react';
import Form from './components/Form';
import List from './components/List';

export interface TaskProps {
  taskName: string;
  taskTime: number;
}

export function App() {
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
      <Form task={task} addTask={addTask} handleInput={handleInput} />
      <List toDoList={toDoList} />
    </>
  );
}
