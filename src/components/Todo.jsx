import React from 'react'

function Todo({todo, todos, setTodos, todoText}){
    const deleteHandler = () => (
        setTodos(todos.filter((el) => el.id !== todo.id))
    )
    const completedHandler = () => {
        setTodos(todos.map((el) => {
            if (el.id === todo.id) {return {...el, completed: !el.completed}}
            else {return el}
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todoText}</li>
            <button className="complete-btn" onClick={completedHandler}>
                <i className={`fas ${todo.completed ? 'fa-times' : 'fa-check'}`}></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo