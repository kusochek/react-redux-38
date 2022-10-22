import { List } from "@mui/material";
import TodoListItem from "./ListItem";

export default function TodoList({ todos, removeTodo, toggleTodos }) {
    return (
        <List component="nav">
            {todos.map(todo => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    toggleTodos={toggleTodos}
                />
            ))}
        </List>
    )
}