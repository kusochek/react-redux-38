import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_ALL, FILTER_DONE } from "../constants/filters";
import { fetchTodos, removeTodoByID, toggleTodoById } from "../store/todos/actions";
import TodoList from "./TodoList";

export default function List() {
    let todos = useSelector(state => state.todos.todos);
    const filter = useSelector(state => state.filter);

    const dispatch = useDispatch();

    if(filter !== FILTER_ALL) {
        todos = todos.filter(todo => todo.completed === (filter === FILTER_DONE));
    }
    
    function handleRemoveTodos(id) {
        dispatch(removeTodoByID(id));
    };

    function handleToggleTodos(id) {
        dispatch(toggleTodoById(id));
    }

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);
    return (
        <TodoList
            todos={todos}
            removeTodo={handleRemoveTodos}
            toggleTodos={handleToggleTodos}
        />
    )
}