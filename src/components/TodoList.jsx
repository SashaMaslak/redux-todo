import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const todos = useSelector((state) => {
		console.log(state);
		return state.todos.todos;
	});

	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</ul>
	);
};

export default TodoList;
