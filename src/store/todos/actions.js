import {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
} from "../../services/todos"

// action type
export const TODOS_ADD_TODO = "TODOS_ADD_TODO";
export const TODOS_SET_TODO = "TODOS_SET_TODO";

// action creators
export const setTodo = todos => ({
    type: TODOS_SET_TODO,
    payload: todos,
})

export const addTodo = (todo) => ({
    type: TODOS_ADD_TODO,
    payload: todo,
  });

// thunk
export const fetchTodos = () => {
    return function (dispatch) {
        getTodos().then(todos => dispatch(setTodo(todos)));
    };
};

export const removeTodoByID = id => {
    return function (dispatch, getState) {
        deleteTodo(id).then(() => {
            const { todos } = getState();
            const updateTodos = todos.todos.filter(todo => todo.id !== id);
            dispatch(setTodo(updateTodos));
        })
    }
}

export const toggleTodoById = id => {
    return function (dispatch, getState) {
        const { todos } = getState();
        const toggleTodo = todos.todos.find(todo => todo.id === id);

        let updateTodos = todos.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);

        updateTodo(toggleTodo).then(() => {
            dispatch(setTodo(updateTodos));
        });
    };
};

export const createNewTodo = (todo) => {
  return function (dispatch) {
    createTodo(todo).then((data) => {
      dispatch(addTodo(data));
    });
  };
};
