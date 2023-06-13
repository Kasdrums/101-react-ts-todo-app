import React from 'react'

interface TodoList {
	todos: {
		id: number
		text: string
		completed: boolean
	}[]
	deleteTodo: (id: number) => void
	toggleTodo: (id: number) => void
	todo: {
		id: number
		text: string
		completed: boolean
	}
}
const Todo = ({ todo, deleteTodo, toggleTodo }: TodoList) => {
	return (
		<div>
			<span>{todo.text}</span>
			<button onClick={() => deleteTodo(todo.id)}>Delete</button>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => toggleTodo(todo.id)}
			/>
		</div>
	)
}

export default TodoList
