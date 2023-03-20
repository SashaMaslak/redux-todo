import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, fetchTodos } from './store/todoSlice';
import TodoList from './components/TodoList';
import NewTodoForm from './components/NewTodoForm';

import './App.css';

function App() {
  const [value, setValue] = useState([]);
  const { status, error } = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const addTask = () => {
    if (value.trim().length) {
      dispatch(addNewTodo(value));
      setValue('');
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <p>TODO LIST</p>
      <NewTodoForm
        value={value}
        handleInput={setValue}
        handleSubmit={addTask}
      />
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
