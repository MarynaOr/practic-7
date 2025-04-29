import toast from "react-hot-toast";
import {useSelector } from "react-redux";
import Item from "./Item";


const List = () => {
 const isLoading = useSelector((state)=> state.tasks.isLoading)
 const isError = useSelector((state)=> state.tasks.isError)
 const items = useSelector((state) => state.tasks.items)

  return (
    <>
    
    {isLoading && <p>Loading...</p>}
    { isError && toast.error("This didn't work.")}
    <ul>
    {items.length === 0 ? (
          <p>No tasks available</p> // Якщо задач немає
        ) : (
          // Перебираємо елементи і виводимо їх
          items.map((item) => {
            return (
              <li key={item.id}>
                <input type="checkbox" checked={item.completed} readOnly />
                {item.todo}
                <Item id={item.id} /> {/* Передаємо id для кожного елемента */}
              </li>
            );
          })
        )}
    </ul>
    </> 
  );
};

export default List;  
      {/* {items.map((item)=>{
        return <li key={item.id}> <input type="checkbox" checked={item.completed} readOnly /> {item.todo} 
        <Item id={item.id}/></li>
      })}   */}