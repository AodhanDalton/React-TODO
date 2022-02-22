import React from 'react'
import './stylesheet.css'

export default function Todo({ todo, toggleTodo }) {
	function handleTodoClick() {
	toggleTodo(todo.id)
}
return (
<div>
	<label className='label1'>
		<input type="checkbox" name='cb-strike' id='cb-strike' checked = {todo.complete} onChange={handleTodoClick}/>
		<p className='strikethrough'>{" " + todo.name} </p>
	</label>
</div>
)
}

