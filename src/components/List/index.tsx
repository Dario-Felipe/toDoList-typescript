import { TaskInfo, TaskManager } from '../../App';

interface ListProps {
  toDoList: TaskInfo[];
  removeTask: TaskManager['removeTask'];
}

const List = ({ toDoList, removeTask }: ListProps) => {
  return (
    <>
      <ul>
        {toDoList.map(item => (
          <li key={item.id}>
            Task Name: {item.name}, Task Time: {item.time}
            <button type="button" onClick={event => removeTask(event, item.id)}>
              Exluir
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
