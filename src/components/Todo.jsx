import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/TodoSlice";
import { markAsDone } from "../features/todo/TodoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const inputClasses = 'mt-1 px-3 py-2 border border-input rounded-md bg-input focus:outline-none focus:ring focus:ring-primary text-gray-500';
    
    const buttonClasses = 'text-white ml-3 bg-primary hover:bg-text-primary py-2 rounded-md transition duration-300';
    
    const deleteHandler = (id) => {
        dispatch(deleteTodo(id));        
    }
    const doneHandler = (id) => {
        dispatch(markAsDone(id));        
    }

    return (
        <>
        <AddForm />
        <h2 className="mt-5 text-xl font-semibold text-primary text-center mb-6">Todos List App</h2>
        <ul >
            {todos.map((todo) => (

                <li style={{marginBottom:"10px", textDecoration: todo.isDone ? "line-through": "none"} } key={todo.id}>{todo.task}
                <button onClick={() => deleteHandler(todo.id)} className={buttonClasses}>Delete</button>
                <button onClick={() => doneHandler(todo.id)} className={buttonClasses}>Mark as done</button>
                </li>
            ))}
        </ul>
        </>
    );
}