import { TaskInfo } from '../../App';

interface ListProps {
  toDoList: TaskInfo[];
}

const List = ({ toDoList }: ListProps) => {
  return (
    <>
      <ul>
        {toDoList.map(item => (
          <li key={item.name}>
            Task Name: {item.name}, Task Time: {item.time}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
