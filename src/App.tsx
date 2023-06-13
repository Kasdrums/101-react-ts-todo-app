import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import './App.css'
import TodosActions from './components/Todos/TodosActions'
import React from 'react'
import TodoList from './components/Todos/TodoList'
import TodoList from './components/Todos/TodoList'

interface Todo {
	id: string
	text: string
	isCompleted: boolean
}

function App() {
	const [todos, setTodos] = useState<Todo[]>([])

	const addTodoHandler = (text: string) => {
		const newTodo: Todo = {
			text: text,
			isCompleted: false,
			id: uuidv4(),
		}

		setTodos([...todos, newTodo])
	}

	const deleteTodoHandler = (id: string) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	const toggleTodoHandler = (id: string) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo },
			),
		)
	}

	const resetTodosHandler = () => {
		setTodos([])
	}

	const deleteCompletedTodosHandler = () => {
		setTodos(todos.filter((todo) => !todo.isCompleted))
	}

	const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

	return (
		<div className="App">
			<h1>Todo App</h1>
			<TodoForm addTodo={addTodoHandler} />
			{!!todos.length && (
				<TodosActions
					completedTodosExist={!!completedTodosCount}
					resetTodos={resetTodosHandler}
					deleteCompletedTodos={deleteCompletedTodosHandler}
				/>
			)}
			<TodoList
				todos={todos}
				deleteTodo={deleteTodoHandler}
				toggleTodo={toggleTodoHandler}
			/>
			{completedTodosCount > 0 && (
				<h2>{`You have completed ${completedTodosCount} ${
					completedTodosCount > 1 ? 'todos' : 'todo'
				}`}</h2>
			)}
		</div>
	)
}

export default App
