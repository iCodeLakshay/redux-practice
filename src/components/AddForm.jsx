import { useState } from "react"
import { addTodo } from "../features/todo/TodoSlice";
import { useDispatch } from "react-redux";

export default function AddForm(){
    const [task, setTask] = useState("");
    const inputClasses = 'mt-1 px-3 py-2 border border-input rounded-md bg-input focus:outline-none focus:ring focus:ring-primary text-gray-500';
    
    const buttonClasses = 'text-white ml-3 bg-primary hover:bg-text-primary py-2 rounded-md transition duration-300';

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(task);
        dispatch(addTodo(task))
    }

    return (
        <>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={(e) => setTask(e.target.value)} placeholder="Enter task" className={inputClasses}/>
            <button className={buttonClasses}> Add Task</button>
        </form>
        </>
    )
}