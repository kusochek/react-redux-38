import { TODOS_ADD_TODO, TODOS_SET_TODO } from "./actions";

const INITIAL_STATE = {
    todos: [],
};

export default function todosReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case TODOS_SET_TODO:
            return { ...state, todos: [...payload] };
        case TODOS_ADD_TODO:
            const newTodo = { id: new Date(), ...payload };
            return { ...state, todos: [...state.todos, newTodo] };
        default:
            return state;
    }
}