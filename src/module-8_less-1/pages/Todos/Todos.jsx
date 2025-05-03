import { useSelector } from "react-redux";
import TodoList from "../TodoList/TodoList";
import AddForm from "../AddForm/AddForm";

const Todos = () => {
  return (
    <>
    <AddForm/>
    <TodoList/>
    </>
  );
};

export default Todos;