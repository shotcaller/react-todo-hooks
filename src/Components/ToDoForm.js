import React from 'react'

export default function ToDoForm(props) {
    return (
        <div className='input-form'>
            <input className='input-box' type='text' placeholder='Enter To Do...' onChange={(e) => props.handleChange(e)}  value={props.todo.task}
             onKeyPress={(e) => props.addToDo(e)} />
        </div>
    )
}
