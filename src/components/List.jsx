import React from 'react'
import Todo from './Todo'
function List({todos, setTodos, filteredTodos}){
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((t, index) => {
                    return (
                        <Todo todo={t} todos={todos} setTodos={setTodos} todoText={t.text} key={index}/>
                    )
                })}
                
            </ul>
        </div>

    )
}

export default List