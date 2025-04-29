import { useEffect } from "react";
import List from "./List";
import { useDispatch } from "react-redux";
import { fetchdata } from "../../redux/todosOps";

const TodoList = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchdata())
  }, [dispatch])
  return (
    <>
        <List/>
    </>
  );
};

export default TodoList; 