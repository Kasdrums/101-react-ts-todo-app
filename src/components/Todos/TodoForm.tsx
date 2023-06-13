import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'
import React from 'react'

interface TodoFormProps {
	addTodo: (text: string) => void
}

function TodoForm({ addTodo }: TodoFormProps) {
	const [text, setText] = useState<string>('')
	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		addTodo(text)
		setText('')
	}

	return (
		<div className={styles.todoFormContainer}>
			<form onSubmit={onSubmitHandler}>
				<input
					placeholder="Enter new Todo"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<Button type="submit" title="Submit">
					Submit
				</Button>
			</form>
		</div>
	)
}

export default TodoForm
