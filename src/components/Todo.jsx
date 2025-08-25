import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(deleteTodo(id));
    };

    const markDoneHandler = (id) => {
        dispatch(markAsDone(id));
    };

    return (
        <>
            <AddForm />
            <h2>Todo List App</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className={todo.isDone ? "task-done" : ""}>
                            {todo.task}
                        </span>
                        <button onClick={() => markDoneHandler(todo.id)}>
                            Mark as Done
                        </button>
                        <button onClick={() => deleteHandler(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}