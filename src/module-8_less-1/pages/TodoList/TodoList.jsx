import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/todoSlice";

const TodoList = () => {
  const items = useSelector((state) => state.todos.todos);
//   const deleteTodo = useSelector((state)=> state.todos.todos)
  const dispatch = useDispatch()




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
                <button type="button" onClick={()=>dispatch(deleteTodo(item.id))}>Delete</button>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default TodoList;
