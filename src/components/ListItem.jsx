import { Divider, ListItemIcon, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { ListItem } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoListItem({ todo, removeTodo, toggleTodos }) {
    function handleDeleteAction(e) {
        e.preventDefault();
        removeTodo(todo.id);
    }

    function handleActionToggle() {
        toggleTodos(todo.id);
    }
    return (
        <>
            <ListItem button onClick={handleActionToggle}>
                <ListItemIcon>
                    { todo.completed ? <CheckIcon /> : <CheckBoxOutlineBlankIcon /> }
                </ListItemIcon>
                <ListItemText primary={todo.title} />
                <ListItemSecondaryAction onClick={handleDeleteAction}>
                    <DeleteIcon />
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
        </>
    )
}