import { useDispatch } from "react-redux";
import { deleteData } from "../../redux/todosOps";
import toast from "react-hot-toast";

const Item = ({id}) => {
const dispatch = useDispatch()
const handleDelete = async () => {
    try {
      await dispatch(deleteData(id)).unwrap(); // Використовуємо unwrap для отримання результату
      toast.success("Task deleted!"); // Показуємо успішне повідомлення
    } catch (err) {
      toast.error("Failed to delete task.");
    }
  };
// const handleDelete=()=>{
//     dispatch(deleteData(id))
//     toast.success("Task deleted!");
// }
  return (
    <>
      <button type="button" onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Item;