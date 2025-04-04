import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/operations";
const Practic = () => {
   const dispatch = useDispatch()
   const items = useSelector(state=> state.tasks.items)
   const isLoading = useSelector(state=> state.tasks.isLoading)
   const error = useSelector(state=> state.tasks.error)
  //  const {items, isLoading, error} = useSelector(state => state.tasks)
   useEffect(()=>{
    dispatch(fetchTasks())
   }, [dispatch])
  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {/* <p> {items.length > 0 &&  JSON.stringify(items, null, 2)} </p> */}
    </>
  );
};

export default Practic;