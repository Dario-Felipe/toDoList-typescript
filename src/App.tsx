import { useState, SyntheticEvent, ChangeEvent } from 'react';
import Form from './components/Form';
import List from './components/List';

export interface TaskInfo {
  name: string;
  time: number;
}

export interface TaskManager {
  addTask?: (event: SyntheticEvent) => void;
  handleInput?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function App() {
  const [toDoList, setToDoList] = useState<TaskInfo[]>([]);
  const [task, setTask] = useState<TaskInfo>({
    name: '',
    time: 0,
  });

  const addTask = (event: SyntheticEvent) => {
    event.preventDefault();

    if (task.name.length === 0) {
      return alert('Task Name cannot be empty');
    }

    if (task.time <= 0) {
      return alert('Task Time cannot be lower or as 0');
    }

    setToDoList([...toDoList, { ...task, time: Number(task.time) }]);
    setTask({
      name: '',
      time: 0,
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
