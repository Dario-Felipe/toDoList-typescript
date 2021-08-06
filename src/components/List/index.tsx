import { TaskProps } from '../../App';

interface ListProps {
  toDoList: TaskProps[];
}

const List = ({ toDoList }: ListProps) => {
  return (
    <>
      <ul>
        {toDoList.map(item => (
          <li key={item.taskName}>
            Task Name: {item.taskName}, Task Time: {item.taskTime}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
