import { useState } from "react";
import { useDispatch } from "react-redux";

const AddForm = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleAdd = () => {
    if(!input)return

    const newTodo = {
      
    }
  }



  return (
    <>
      <input type="text" />
      <button type="button"> Add</button>
    </>
  );
};

export default AddForm;