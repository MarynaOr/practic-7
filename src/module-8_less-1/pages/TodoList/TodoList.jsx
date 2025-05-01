import { useSelector } from "react-redux";

const TodoList = () => {
  const items = useSelector((state) => state.todos.todos);

  return (
    <>
      <ul>
        {items.length === 0 ? (
          <p>Empty</p>
        ) : (
          items.map((item) => {
            return (
              <li key={item.id}>
                <input type="checkbox" checked={item.complited} readOnly />
                {item.todo}
                <button>add</button>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default TodoList;
