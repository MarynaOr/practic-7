import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "../../redux/todosOps";
import { slice } from "../../redux/todoSlice";

const List = () => {
    const items = useSelector((state) => state.tasks.items)
    const isError = useSelector((state) => state.tasks.isError)
    const isLoading = useSelector((state) => state.tasks.isLoading)

    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchdata())
    }, [dispatch])
    // console.log("ITEMS:", items);
    // console.log(items[0]);
  return (
    <>
    {isLoading && <p>Loading...</p>}
    {isError && <p>Error: {isError} </p>}
      <ul>
        {
          items.map((item) => (
            <li key={item.id}> {item.todo} </li>
          ))  
        }
      </ul>
    </>
  );
};

export default List;