import { useState, SyntheticEvent, ChangeEvent, MouseEvent } from 'react';
import Form from './components/Form';
import List from './components/List';

export interface TaskInfo {
  id: number;
  name: string;
  time: number;
}

export interface TaskManager {
  addTask?: (event: SyntheticEvent) => void;
  handleInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  removeTask: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
}

export function App() {
  const [toDoList, setToDoList] = useState<TaskInfo[]>([]);
  const [countID, setCountID] = useState(1);
  const [task, setTask] = useState<TaskInfo>({
    id: countID,
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

    setToDoList([
      ...toDoList,
      { ...task, id: countID, time: Number(task.time) },
    ]);
    setCountID(countID + 1);
    setTask({
      id: countID,
      name: '',
      time: 0,
    });
    return alert('The task has been added!');
  };

  const removeTask = (
    event: MouseEvent<HTMLButtonElement>,
    id: number,
  ): void => {
    setToDoList(toDoList.filter(item => item.id !== id && item));
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Form task={task} addTask={addTask} handleInput={handleInput} />
      <List toDoList={toDoList} removeTask={removeTask} />
    </>
  );
}
