import TodoList from './TodoList.js'
import React, { useState, useRef, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid'
import './stylesheet.css'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
const [todos, setTodos] = useState([]) 
const todoNameRef = useRef()

useEffect(() => {
	const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
	if (storedTodos) setTodos(storedTodos)
}, [])

useEffect(() => {
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos])

function toggleTodo(id) {
const newTodos = [...todos]
const todo = newTodos.find(todo => todo.id === id)
todo.complete = !todo.complete
setTodos(newTodos)
}

function handleClearTodos() {
const newTodos = todos.filter(todo => !todo.complete)
setTodos(newTodos)
}

function handleAddTodo(e) {
const name = todoNameRef.current.value

if (name === '') return 

setTodos(prevTodos => {
return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
})
todoNameRef.current.value = null
}

return (
	<>
	<div className='form-box'>
		<h5>Todo List</h5>
	<form onSubmit={handleAddTodo}>
	    
		<div>
	    	<input ref={todoNameRef} className='input1' type="text" placeholder='Todo Example' />
		</div>
			<button type='submit' className="addBtn"> Add todo </button>
			<button onClick={handleClearTodos} className="clearBtn"> Clear Completed </button>

		<div className='div-dif'> {todos.filter(todo => !todo.complete).length} left to do </div>    
	</form> 
	<TodoList todos={todos} toggleTodo={toggleTodo} className=''/>
	</div>
	</>
      )
}



export default App;
