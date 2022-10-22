import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodosPage from "./pages/Todo"
import "./App.css";
import store from "./store/store"

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={"*"} element={<TodosPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
